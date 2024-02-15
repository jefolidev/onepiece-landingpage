import styled from "styled-components"

export const Background = styled.div`
    background-color: rgba(2, 16, 36);
    width: 100%;
    height: 100vh;

    position: relative;
    z-index: 4;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, .4);


`
export const MainContainer = styled.div`
    display: flex;
        flex-direction: column;
        justify-content: center;

` 
export const ContTitulo = styled.div`
    display: flex;
        justify-content: center;

    margin-bottom: 90px;
`
export const Title = styled.h2`
    color: white;
    font-family: "Bree Serif";
    font-size: 40px;
    font-weight: 400;
    border-bottom: 1px solid white;

    margin-bottom: -40px;
    
`
export const ArcosBox = styled.div `

    background-color: darkred;
        width: 200px;
        height: 200px;
        transform: scale(1, 1);
    transition:  align-items .5s, transform .2s;
    border-radius: 30px;
    display: flex;
        align-items: center;
        justify-content: center;

    &:hover{
        transform: scale(1.05, 1.05);
        cursor: pointer;
    }

`

export const Name = styled.p`
    color: white;
    font-family: "Bree Serif";
    font-size: 20px;
    font-weight: 400;
    border-bottom: 1px solid white;

`

export const Carrossel = styled.div `
    height: 20px;
    margin-left: 40px;    
    padding: 5px;

`

