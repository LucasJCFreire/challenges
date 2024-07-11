import styled from "styled-components";
import LinkButton from "../layout/LinkButton";
import savings from "../../assets/images/savings.svg";

function Home() {
  return (
    <Section>
      <h1>
        Bem vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to={"/newprojects"} text={"Criar Projetos"} />
      <img src={savings} alt="Porquinho Costs" />
    </Section>
  );
}

export default Home;

const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;

    img {
        margin: auto;
        height: 50%;
        max-height: 400px;
    }
    
    p {
        padding: 20px 0;
        color: #333;
    }

    h1{
        font-size: 30px;
    & span {
        color: #ffbb33;
        padding: 0 5px;
        background-color: #222; 
    }

`;
