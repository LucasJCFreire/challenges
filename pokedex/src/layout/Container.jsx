import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Container(props) {
  const { theme } = useContext(ThemeContext);

  return <StyledDiv theme={theme}>{props.children}</StyledDiv>;
}

const StyledDiv = styled.main`
  padding: 80px 0 120px 0;
  width: 100%;
  min-height: calc(100vh - 120px);
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export default Container;
