import moment from "moment-timezone";
import pako from "pako";
import { encode } from "base-64";
import { timezone } from "./define";
import { DataObj } from "./types";

export const formatDateTime = (date: Date) => {
  return moment.tz(date, timezone).format('YYYYMMDDTHHmmssZZ');
}

export const formatDate = (date: Date) => {
  return moment.tz(date, timezone).format('YYYYMMDD');
}

export const formatTime = (date: Date) => {
  return moment.tz(date, timezone).format('HHmm');
}

const checkRequiredData = (dataObj: DataObj, requiredProperties: string[]) => {
  return requiredProperties.every(prop =>
    prop in dataObj && dataObj[prop] !== ''
  );
}

export const createUrl = (dataObj: DataObj) => {

  const dataJson = createJson(dataObj);
  if (!dataJson) {
    return false;
  }

  const compressedData = compressData(dataJson);

  const url = `https://timetr.ee/ne/${ compressedData }`;

  return url;
}

const createJson = (dataObj: DataObj) => {

  const requiredProperties = ['title', 'startDate', 'startTime', 'endDate', 'endTime'];

  if (!checkRequiredData(dataObj, requiredProperties)) {
    return false;
  }

  const newObj = {
    "c": Number(dataObj.category),
    "t": dataObj.title,
    "n": dataObj.note ?? '',
    "s": `${ dataObj.startDate }T${ dataObj.allDay === "1" ? "0000" : dataObj.startTime }00+0900`,
    "e": `${ dataObj.endDate }T${ dataObj.allDay === "1" ? "0000" : dataObj.endTime }00+0900`,
    "a": Number(dataObj.allDay),
    "l": dataObj.location ?? '',
    "u": dataObj.url ?? ''
  }

  const dataJson = JSON.stringify(newObj);
  return dataJson;
}

const compressData = (json: string) => {
  const compressed = pako.gzip(json);
  const encoded = encode(String.fromCharCode(...compressed));
  return encoded;
}
