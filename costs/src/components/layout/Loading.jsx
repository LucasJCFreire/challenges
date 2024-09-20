import styled from "styled-components";
import loading from "../../assets/images/loading.svg";

function Loading() {
  return (
    <StyledDiv>
      <img className="loader" src={loading} alt="image loading" />
    </StyledDiv>
  );
}

export default Loading;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .loader {
    width: 50px;
    height: 50px;
  }
`;
