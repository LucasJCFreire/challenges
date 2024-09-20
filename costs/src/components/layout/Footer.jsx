// import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'

function Footer () {
    return(
        <AboutUs>
            <ul>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p>&copy; 2024 - Costs</p>
        </AboutUs>
    )
}

export default Footer

const AboutUs = styled.footer`
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: whitesmoke;
    ul {
        display: flex;
    }
    li {
        cursor: pointer;
        padding: 0 20px;
        font-size: 30px;
        transition: 0.5s ease;
    &:hover {
        color: gray;
    }
    }    
`