import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const NavBarStyle = styled.ul`
width: 100%;
list-style: none;
padding: 1em;
margin: 0;
background-color: #0D0D0D;
height: 2em;
font-weight: bold;
color: black;
`
const NavBarLayout = styled.li`
background-color: #0D0D0D;
&:hover {
background: linear-gradient(#5CAB9B, #8DF8DC) 
}
width: 3em;
display: inline;
padding: 1.8em;
text-align: center;
justify-content: space-between;
position: relative;
`

const NavBar = () => {

return (
    <NavBarStyle>
        <NavBarLayout>
            <Link to="/">Home</Link>
        </NavBarLayout>
        <NavBarLayout>
            <Link to="/About">About</Link>
        </NavBarLayout>
        <NavBarLayout>
            <Link to="/Projects">Projects</Link>
        </NavBarLayout>
        <NavBarLayout>
            <Link to="/TechnicalSkills">Technical Skills</Link>
        </NavBarLayout>
    </NavBarStyle>
)

}

export default NavBar