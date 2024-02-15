import styled from "styled-components";

export const NavLogo = styled.div`

    background-color: rgba(255, 255, 255);
    width: 100%;
    height: 80px;
   
`
export const LogoImg = styled.img`
    width: 180px;
    height: 100px;

    position: absolute;
        left: 90px;
        top: -5px;
        z-index: 10;

    &:hover {
        cursor: pointer;
    }
`
export const NavbarStyled = styled.nav`

    font-family: 'Bree Serif';
    font-weight: 500;
    background-color: rgba(2, 16, 36, 1);
        width: 100%;
        height: 50px;

    display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 100px;

    position: sticky;
    z-index: 0;
`


export const NavbarContText = styled.div`
    position: absolute;
    right: 50px;
    display: flex;
    
`
export const NavbarPagesUl = styled.ul`
    display: flex;
        gap: 40px;
    color: white;
    font-size: 18px;
    font-family: 'Bree Serif';
    list-style: none;



`
export const NavbarPagesLi = styled.li`

    float: left;
    transform: scale(1, 1);
    transition: transform .2s;
    text-decoration: none;
    color: white;

    position: relative;
    z-index: 40;

    &:hover {
        cursor: pointer;
        transform: scale(1.1, 1.1);
    }

    &:active {
       color: gray;
    }

`  