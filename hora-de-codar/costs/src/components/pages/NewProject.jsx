import styled from "styled-components";
import ProjectForm from "../project/ProjectForm";
import { useNavigate } from "react-router-dom";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        const state = { message: "Projeto criado com sucesso!" };
        navigate("/projects", { state });
      })
      .catch((err) => console.log(err));
  }

  return (
    <StyledDiv>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </StyledDiv>
  );
}

export default NewProject;

const StyledDiv = styled.div`
  width: 450px;
  margin: 0 auto;
  padding: 3em;

  h1 {
    margin-bottom: 20px;
  }

  p {
    color: #7b7b7b;
  }
`;
