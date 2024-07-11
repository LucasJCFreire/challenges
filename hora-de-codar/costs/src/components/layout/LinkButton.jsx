import { Link } from "react-router-dom"
import styled from "styled-components"

function LinkButton ({to, text}) {
    return <StyledLink to={to}>{text} </StyledLink>
}

export default LinkButton

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #333;
  color: #fff;
  padding: 8px 12px;
  border: 1px solid #333;
  border-radius: 4px;
  transition: 0.5s ease;

  &:hover {
    color: #ffbb33;
    border: 1px solid #ffbb33;
  }
`