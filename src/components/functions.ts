import moment from "moment-timezone";
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

export const createUrl = (dataObj: DataObj) => {
  console.log(dataObj);
}
