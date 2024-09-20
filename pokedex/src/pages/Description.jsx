import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";

function Description() {
  const id = window.location.pathname.replace("/description/", "");
  const [info, setInfo] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((resp) => resp.json())
      .then((data) => {
        const infoPokemon = data;
        setInfo(infoPokemon);
        console.log(infoPokemon.abilities[0].ability);
      })
      .catch((error) => {
        console.log("Erro na requisicao de info na pagina de descricao", error);
      });
  }, []);

  return (
    <StyledDiv>
      {!info ? (
        <Loading />
      ) : (
        <>
          <img
            src={info.sprites.other["official-artwork"].front_default}
            alt={`Imagem de ${id}`}
          />
          <DivInfo>
            <h2>
              <span>#{id} </span>
              {info.name.toUpperCase()}
            </h2>
            <p>
              <span>Tipo: </span>
              {info.types[0].type.name.toUpperCase()}
            </p>
            <h3>Habilidades:</h3>
            {info.abilities.map((nAbility, index) => (
              <p key={index}>{nAbility.ability.name}:</p>
            ))}
          </DivInfo>
          <DivMoves>
            <h3>Movimentos</h3>
            <ul>
              {info.moves.map((nMove, index) => (
                <li key={index}>{nMove.move.name}</li>
              ))}
            </ul>
          </DivMoves>
        </>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 50px 100px 0 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  text-align: center;
  img {
    width: 350px;
  }

  * {
    // outline: 1px solid;
  }

  @media (max-width: 650px) {
    padding: 50px 10px 0 10px;
  }
`;

const DivMoves = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 10px;
  h3 {
    margin: 20px 0 5px 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      border-radius: 3px;
      border: 0.5px solid;
      margin: 2px;
      padding: 2px 5px;
    }
  }
`;
const DivInfo = styled.div`
  margin: 20px 0;
  flex: 0.6;
  h2 {
    min-width: 350px;
    color: var(--accent-color);
    font-size: var(--font-size-mega-large);
  }
  h3 {
    margin: 20px 0 5px 0;
    p {
      span {
        display: block;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 650px) {
    h2 {
      min-width: 300px;
      font-size: var(--font-size-extra-large);
    }
  }
`;
export default Description;
