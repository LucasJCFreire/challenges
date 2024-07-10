import styled from "styled-components";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import ToggleButtom from "../components/ToggleButtom";
import pokemonText from "../images/logo.png";

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { theme } = useContext(ThemeContext);
  console.log("cor header", theme.fixedElement);
  const inicio = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledHeader theme={theme}>
      <Link to="/" onClick={inicio}>
        <FcHome style={{ fontSize: "55px" }} />
      </Link>
      <Link to="/">
        <img className="pokemonText" src={pokemonText} alt="logo pokebola" />
      </Link>
      <ToggleButtom />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.fixedElement};
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  z-index: 999;
  }
  .pokemonText {
    width: 300px;
    transform: translatey(20%);
  }

  a {
    transition: 0.1s;
  }

  a:hover {
    scale: 1.01;
  }

@media(max-width: 600px){
  .pokemonText {
    width: 150px;
    transform: translatey(80%);
}
`;

export default Header;
