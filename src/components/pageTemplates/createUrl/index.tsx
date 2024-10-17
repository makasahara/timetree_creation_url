import Form from "../../organisms/form";
import Result from "../../organisms/result";
import { DataObj } from "../../types";

const CreateUrl = ({
  dataObj,
  handleDataObj,
  currentDateTime,
  handleCreateUrl,
  url
}: {
  dataObj: DataObj,
  handleDataObj: (dataObj: DataObj) => void,
  currentDateTime: Date,
  handleCreateUrl: () => void,
  url: string,
}) => {
  return (
    <>
      <Form 
        dataObj={dataObj} 
        handleDataObj={handleDataObj} 
        currentDateTime={currentDateTime}
        handleCreateUrl={handleCreateUrl}
      />
      <Result url={url} />
    </>
  );
}

export default CreateUrl;