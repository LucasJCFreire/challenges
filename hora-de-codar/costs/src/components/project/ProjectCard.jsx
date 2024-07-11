import styled from "styled-components";
import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <StyledDiv>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className="category-text">
        <span className={category.toLowerCase()}></span> {category}
      </p>

      <div className="actionbtn">
        <Link to={`/projects/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Remover
        </button>
      </div>
    </StyledDiv>
  );
}

export default ProjectCard;

const StyledDiv = styled.div`
  width: 320px;
  height: 250px;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
  padding: 1em;
  margin: 0.5%;
  h4 {
    background-color: #222;
    height: 73px;
    color: #ffbb33;
    padding: 0.4em;
    margin-bottom: 1.3em;
    font-size: 1.3em;
  }

  p {
    color: #7a7a7a;
    margin-bottom: 1em;
    span {
      font-weight: bold;
    }
  }
  .category-text {
    display: flex;

    align-items: center;

    span {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #ccc;
      margin-right: 5px;
      &.infra {
        background-color: #ffaebc;
      }
      &.desenvolvimento {
        background-color: #a0e7e5;
      }
      &.design {
        background-color: #b4f8c8;
      }
      &.planejamento {
        background-color: #fbe7c6;
      }
    }
  }
  .actionbtn {
    display: flex;
    margin-top: 1em;
    align-items: center;
    a,
    button {
      text-decoration: none;
      border: none;
      background-color: #fff;
      color: #222;
      font-size: 0.9em;
      width: 100px;
      padding: 0.6em 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: center;
      border: 1px solid #222;
      transition: 0.3s;
      &:hover {
        color: #ffbb33;
        background-color: #222;
      }
    }
  }
`;
