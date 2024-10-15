/** @jsxImportSource @emotion/react */
import { heading } from "./style";

type Props = {
  text: string;
};

const Heading = ({ text }: Props) => {
  return <h1 css={heading}>{text}</h1>;
};

export default Heading;
