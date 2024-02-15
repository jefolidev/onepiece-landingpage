import styled from "styled-components";


export const ContText = styled.div`
    display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    position: relative;
    left: 50px;
    bottom: 50px;

    width: 550px;
    height: 300px;

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
`

export const Title = styled.h2`
    color: white;
    font-family: "Montserrat";
    font-size: 70px;
    font-weight: 400;
    border-bottom: 1px solid white;
    
    margin-bottom: 0px;

`

export const SubTitle = styled.h3`
    color: white;
    font-family: "Montserrat";
    font-weight: 400;
` 
export const Elements = styled.div`
    display: flex;
        align-items: center;
`

export const ContBarco = styled.div`

    position: relative;
        bottom: 40px;
        right: 0px;
        z-index: 5;

`

export const Barco = styled.img`
    width: 440px;
`

export const Overlay = styled.div`
    background: black;
    opacity: .2;
    width: 100%;
    height: 75vh;


   z-index: 0;
     position: absolute;

 `

export const MainContainer = styled.div` 

    display: flex;
        align-items: center;
        justify-content: center;        
    background-repeat: round;
    background-attachment: scroll;


    width: 100%;
    height: 75vh; 


`
export const TopButton = styled.button`
    position: fixed;
        bottom: 0;
        left: 1250px;
        z-index: 50;
    

    background-color: red;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        margin-bottom: 50px;

`