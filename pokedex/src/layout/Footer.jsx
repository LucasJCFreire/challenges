import { FaAddressCard, FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function FooterBar() {
  const { theme } = useContext(ThemeContext);
  return (
    <Footer theme={theme}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/lucasjcfreire/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://lucasjcfreire.github.io/portfolio/" target="_blank">
            <FaAddressCard />
          </a>
        </li>
        <li>
          <a href="https://github.com/LucasJCFreire" target="_blank">
            <FaGithub />
          </a>
        </li>
      </ul>
      <p>&copy; 2024 - Lucas Jones Dev</p>
    </Footer>
  );
}

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 15px;
  color: ${({ theme }) => theme.fixedText};
  background-color: ${({ theme }) => theme.fixedElement};

  ul {
    display: flex;
  }

  a {
    transition: 0.5s ease;
    color: ${({ theme }) => theme.fixedText};
    &:hover {
      color: var(--accent-color);
    }
  }

  li {
    padding: 0 15px;
    font-size: var(--font-size-extra-large);
  }

  p {
    font-size: var(--font-size-small);
  }
`;

export default FooterBar;
