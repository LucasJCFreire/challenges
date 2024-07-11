import styled from "styled-components";

function SubmitButton ({text}) {
    return (
        <StyledButton >{text}</StyledButton>
    )
}

export default SubmitButton

const StyledButton = styled.button`
    background-color: #222;
    color: #fff;
    padding: 10px 20px;
    transition: 0.5s ease;
    cursor: pointer;
    border: none;
    &:hover{
        color: #ffbb33;
    }
`