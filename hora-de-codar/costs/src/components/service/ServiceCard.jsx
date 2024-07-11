import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";

function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  };

  return (
    <StyledDiv>
      <h4>{name}</h4>
      <p>
        <span>Custo Total:</span>R${cost}
      </p>
      <p>{description}</p>
      <div className="actions">
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </StyledDiv>
  );
}

export default ServiceCard;

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
  svg {
    margin-right: 5px;
  }
`;
