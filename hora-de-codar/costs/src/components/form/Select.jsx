import styled from "styled-components";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <StyledDiv>
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </StyledDiv>
  );
}

export default Select;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  select {
    padding: 10px;
    border-radius: 0;
    border: none;
  }
`;
