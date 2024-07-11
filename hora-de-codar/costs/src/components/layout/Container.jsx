import styled from "styled-components";
function Container(props) {
  return (
    <FlexContainer className={props.classe}>{props.children}</FlexContainer>
  );
}

export default Container;

const FlexContainer = styled.div`
  max-width: 1400px;
  padding: 5px 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  min-height: calc(100vh - 192px);

  &.start {
    min-height: calc(100vh - 365px);
    justify-content: flex-start;
  }
`;
