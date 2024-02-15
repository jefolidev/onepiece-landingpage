import { LogoImg, NavLogo, NavbarPagesLi, NavbarPagesUl, NavbarStyled, NavbarContText } from "./style"
import { useState } from "react"
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {

    const [color, setColor] = useState('color: white')

    return (
        <>
            <NavLogo> 
                <LogoImg src = "\src\assets\onepiece-logo-grande.png"/>
            </NavLogo>

            <NavbarStyled>
                <NavbarContText>
                    <NavbarPagesUl>
                       <NavbarPagesLi onClick = {setColor} > Inicio  </NavbarPagesLi> 
                       <Link to = "#personagens">  <NavbarPagesLi onClick = {setColor} > Personagens  </NavbarPagesLi> </Link>
                       <Link to = "#arcos">  <NavbarPagesLi onClick = {setColor} > Arcos  </NavbarPagesLi></Link>
                       <Link to = "#contato">  <NavbarPagesLi onClick = {setColor} > Contato  </NavbarPagesLi></Link>
                    </NavbarPagesUl>
                </NavbarContText>
            </NavbarStyled>


        </>
    )
}

export default Navbar