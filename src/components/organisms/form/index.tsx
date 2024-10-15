import Heading from "../../atoms/heading";
import Input from "../../atoms/input";
import FormPart from "../../molecules/formPart";

const Form = () => {
  return (
    <>
      <Heading text="予定作成URLの生成" />
      <FormPart id="title" labelText="予定のタイトル" isRequired={true}>
        <Input placeholder="TimeTree Day" />
      </FormPart>
    </>
  );
}

export default Form;
