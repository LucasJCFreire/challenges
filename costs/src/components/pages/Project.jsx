import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../layout/Loading";
import ServiceForm from "../service/ServiceForm";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/message";
import { parse, v4 as uuidv4 } from "uuid";
import ServiceCard from "../service/ServiceCard";

function Project() {
  const { id } = useParams();
  const [project, setproject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  const [showServiceForm, setShowServiceForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setproject(data);
          setServices(data.services);
        })
        .catch((err) => console.log(err));
    }, 500);
  }, [id]);

  function editPost(project) {
    setMessage("");
    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setproject(data);
        setShowProjectForm(false);
        setMessage("Projeto Atualizado!");
        setType("sucess");
      })
      .catch((err) => console.log(err));
  }

  function removeService(id, cost) {
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id
    );

    const projectUpdated = project;

    projectUpdated.services = servicesUpdated;

    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setproject(projectUpdated);
        setServices(servicesUpdated);
        setMessage("Serviço removido com sucesso");
      })
      .catch((err) => console.log(err));
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  function createService(project) {
    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    //validacao custo max ultrapassado
    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("error");
      project.services.pop();
      return false;
    }

    // atualiza custo somando custo do serviço add
    project.cost = newCost;

    //update Project
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setShowServiceForm(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {project.name ? (
        <StyledDiv>
          {message && <Message type={type} msg={message} />}
          <h1>Projeto: {project.name}</h1>
          <button onClick={toggleProjectForm}>
            {!showProjectForm ? "Editar Projeto" : "Fechar"}
          </button>
          {!showProjectForm ? (
            <div className="info">
              <p>
                <span>Categoria:</span>
                {project.category.name}
              </p>
              <p>
                <span>Total de orçamento:</span>
                R${project.budget}
              </p>
              <p>
                <span>Total utilizado:</span>
                R${project.cost}
              </p>
            </div>
          ) : (
            <div className="info">
              <ProjectForm
                handleSubmit={editPost}
                btnText="Concluir edição"
                projectData={project}
              />
            </div>
          )}
          <div className="services">
            <h2>Adicione um serviço:</h2>
            <button onClick={toggleServiceForm}>
              {!showServiceForm ? "Adicionar Serviço" : "Fechar"}
            </button>
            <div className="info">
              {showServiceForm && (
                <ServiceForm
                  handleSubmit={createService}
                  btnText="Adicionar Serviço"
                  projectData={project}
                />
              )}
            </div>
            <div>
              <h2>Serviços</h2>
              <div className="cards">
                {services.length > 0 &&
                  services.map((service) => (
                    <ServiceCard
                      id={service.id}
                      name={service.name}
                      cost={service.cost}
                      description={service.description}
                      key={service.id}
                      handleRemove={removeService}
                    />
                  ))}
                {services.length === 0 && <p>Não há serviços cadastrados</p>}
              </div>
            </div>
          </div>
        </StyledDiv>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;

const StyledDiv = styled.div`
  margin: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  height: fit-content;

  h1,
  h2,
  p {
    margin-bottom: 0.5em;
  }
  h1 {
    color: #ffbb33;
    height: 80px;
    line-height: 80px;
    background-color: #222;
    padding: 0 30px;
  }

  span {
    font-weight: bold;
    margin-right: 10px;
  }

  button {
    background-color: #222;
    color: #fff;
    padding: 10px 20px;
    height: 50px;
    transition: 0.5s ease;
    cursor: pointer;
    border: none;
    &:hover {
      color: #ffbb33;
    }
  }
  .info {
    width: 100%;
    border-bottom: 0.5px solid #333;
    padding-bottom: 15px;
  }
  .services {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding-top: 15px;
    .cards {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
