import styled from 'styled-components'

function Input ({type, text, name, placeholder, handleOnChange, value}) {
    return (
        <StyledDiv>
            <label htmlFor={name}>{text}</label>
            <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            />
        </StyledDiv>
    )
}

export default Input

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    label {
        margin-bottom: 5px;
        font-weight: bold;
    }

    input {
        padding: 10px;
        border-radius: 0;
        border: none;

        &::placeholder {
            color: #7b7b7b;
        }
    }
`
