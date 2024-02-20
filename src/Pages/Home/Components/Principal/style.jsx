import styled from "styled-components";
import breakpoints from "../../size.js";

export const ContText = styled.div`
    display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    /* position: relative;
    left: 50px;
    bottom: 50px;

    width: 550px;
    height: 300px; */

`

export const Button = styled.div`
    background-color: rgba(2, 16, 36, 1);
    border-radius: 30px;

    width: 120px;
    height: 40px;
    transform: scale(1, 1);
    transition: transform .3s;

    display: flex;
        align-items: center;
        justify-content: center;

    color: white;
    font-family: "Montserrat";
    font-size: 12px;

        &:hover{
            transform: scale(1.1, 1.1);
            cursor: pointer;
        }
        &:active{
            background-color: #2f3237;
        }

        @media ${breakpoints.md} {
        width: 150px;
        height: 50px;
    }

`
export const ContSocial = styled.div`
    opacity: .9;
    margin-top: 10px;

    display: flex;
        align-items: center;
        gap: 5px;

`

export const Social = styled.img`

    width: 22px;   

    &:hover {
        cursor: pointer;
    }

    @media ${breakpoints.md} {
        width: 35px;
    }

`

export const Title = styled.h2`
    color: #fffefe;
    font-family: "Montserrat";
    font-size: 70px;
    font-weight: 400;
    border-bottom: 1px solid white;
    
    margin-bottom: 0px;

    @media ${breakpoints.md} {
        font-size: 50px;
    }

`

export const SubTitle = styled.h3`
    color: white;
    font-family: "Montserrat";
    font-weight: 400;

    @media ${breakpoints.md} {
        font-size: 18px;
    }
` 
export const Elements = styled.div`
    display: flex;
        align-items: center;

`

export const ContBarco = styled.div`

    @media ${breakpoints.bg} {
        display: none;
    }
    
    position: relative;
        bottom: 40px;
        right: 0px;
        z-index: 5;

`

export const Barco = styled.img`
    width: 500px;
`

export const MainContainer = styled.div` 

    display: flex;
        justify-content: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    background-position: center top ; 


    width: 100%;
    height: 100vh;   

`
