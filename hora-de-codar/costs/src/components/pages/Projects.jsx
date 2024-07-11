import { useLocation } from "react-router-dom";
import Message from "../layout/message";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import styled from "styled-components";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 500);
  }, []);
  // set timeout ficticio, simulando um requisição

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <StyledDiv>
      <div className="actionbtn">
        <h1>Meus Projetos</h1>
        <LinkButton to={"/newprojects"} text={"Criar Projetos"} />
      </div>
      {message && <Message type="sucess" msg={message} />}
      {projectMessage && <Message type="sucess" msg={projectMessage} />}
      <Container classe="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados</p>
        )}
      </Container>
    </StyledDiv>
  );
}

export default Projects;

const StyledDiv = styled.div`
  padding: 2em;
  width: 100%;

  .actionbtn {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
  }
`;
