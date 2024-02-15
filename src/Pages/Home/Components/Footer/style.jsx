import styled from "styled-components";

export const Background = styled.div`
    background-color: #0b1423;
    width: 100%;
    height: 60vh;
    
    display: flex;
        align-items: center;
        justify-content: center;
`

export const BlockCont = styled.div`
    display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    background-color: white;
        width: 250px;
        height: 250px;
    
    border-radius: 15px;
    padding: 20px;
    margin-right: 250px
`

export const Contato = styled.div`
    display: flex;
        flex-direction: column;

`
export const ContatoInfos = styled.div`
    display: flex;
    align-items: center;
`
export const Title = styled.h1`
    margin: 0 auto;
    font-family: "Poppins";
`
export const Text = styled.p`
    font-family: "Poppins";
`
export const Social = styled.img`
    width: 22px;   

    &:hover {
        cursor: pointer;
    }
`
export const ContSocial = styled.div`
    margin-top: 10px;
    margin-bottom: -30px;

    display: flex;
        align-items: center;
        gap: 5px;

`



