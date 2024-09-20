import styled from "styled-components";
import logo from "../images/favicon.png";
import Card from "../components/Card";
import { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    addPokemon();
  }, []);

  async function addPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${count}`)
      .then((resp) => resp.json())
      .then((data) => {
        setList([...list, ...data.results]);
        setCount(count + 10);

        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 800);
      })
      .catch((error) => {
        console.error("Erro na requisicao da pagina Home", error);
      });
  }
  return (
    <StyledDiv>
      {list.map((pokemon, index) => (
        <Card key={index} number={index + 1} name={pokemon.name} />
      ))}
      <a className="btnadd" onClick={addPokemon}>
        <Img src={logo} alt="imagem pokebola" />
      </a>
    </StyledDiv>
  );
}
export default Home;

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
  .btnadd {
    position: fixed;
    z-index: 999;
    right: 50%;
    transform: translatex(50%);
    color: white;
    bottom: 70px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      scale: 1.05;
    }
  }
`;
const Img = styled.img`
  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    70% {
      transform: translate(0, 0) rotate(0deg);
    }
    80% {
      transform: translate(-3px, 0) rotate(-4deg);
    }
    90% {
      transform: translate(3px, 0) rotate(4deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  animation: shake 2s infinite;
`;
