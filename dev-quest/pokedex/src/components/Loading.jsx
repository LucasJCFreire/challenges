import styled from "styled-components";
import loading from "../images/loading.svg";

function Loading() {
  return <Image src={loading} alt="image loading" />;
}

export default Loading;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;
