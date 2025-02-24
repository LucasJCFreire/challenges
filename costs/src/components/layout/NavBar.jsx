import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from '../../assets/images/costs_logo.png'

function NavBar() {
    return (
        <Nav>
            <Link to={"/"}>
                <img src={logo} alt='Costs' />
            </Link>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/projects"}>Projetos</Link>
                </li>
                <li>
                    <Link to={"/company"}>Empresa</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contato</Link>
                </li>
            </ul>
        </Nav>
    )
}
export default NavBar

const Nav = styled.nav`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background: #333;

    ul{
        display:flex;
        list-style: none;
    }

    li {
        padding: 20px;
    

    > a {
        color: whitesmoke;
        transition: color 0.3s;

        &:hover {
            color: gray;
            }
    }
`

