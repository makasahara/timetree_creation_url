import Form from "../../organisms/form";
import Result from "../../organisms/result";
import { DataObj } from "../../types";

const CreateUrl = ({
  dataObj,
  handleDataObj,
  currentDateTime,
  handleCreateUrl
}: {
  dataObj: DataObj,
  handleDataObj: (dataObj: DataObj) => void,
  currentDateTime: Date,
  handleCreateUrl: () => void
}) => {
  return (
    <>
      <Form 
        dataObj={dataObj} 
        handleDataObj={handleDataObj} 
        currentDateTime={currentDateTime}
        handleCreateUrl={handleCreateUrl}
      />
      <Result />
    </>
  );
}

export default CreateUrl;