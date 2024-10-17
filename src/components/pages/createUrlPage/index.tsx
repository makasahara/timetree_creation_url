import { useState } from "react";
import CreateUrl from "../../pageTemplates/createUrl";
import { formatDate, formatTime, createUrl } from "../../functions";
import { DataObj } from "../../types";

const createUrlPage = () => {

  const currentDateTime = new Date();

  const [dataObj, setDataObj] = useState<DataObj>({
    category: "1",
    startDate: formatDate(currentDateTime),
    startTime: formatTime(currentDateTime),
    endDate: formatDate(currentDateTime),
    endTime: formatTime(currentDateTime),
    allDay: "0",
  });

  const [url, setUrl] = useState<string>("");

  const handleCreateUrl = () => {
    setUrl(createUrl(dataObj) || '');
  }

  return (
    <>
      <CreateUrl 
        dataObj={dataObj} 
        handleDataObj={setDataObj} 
        currentDateTime={currentDateTime} 
        handleCreateUrl={handleCreateUrl}
        url={url}
      />
    </>
  );
}

export default createUrlPage;
