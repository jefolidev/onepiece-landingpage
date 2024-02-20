import styled from "styled-components";
import breakpoints from "../../size";

export const NavLogo = styled.div`

    background-color: rgba(255, 255, 255);
    width: 100%;
    height: 80px;
   
`
export const LogoImg = styled.img`
    width: 180px;
    height: 100px;

    position: relative;
        left: 90px;
        top: -5px;
        z-index: 1;

    &:hover {
        cursor: pointer;
    }

    @media ${breakpoints.md} {
        left: 110px;

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

    position: relative;    
    z-index: 0;

    @media ${breakpoints.md} {
        left: 110px;
        position: sticky;
        top: 0;
        z-index: 10;

}

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

    @media ${breakpoints.md} {
        gap: 20px;

}



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