import React from "react";
import { Background, MainContainer, PersonagemBoxStyle, ContTitulo, Title, ContPersonagens, Personagem, Nome } from "./style";
import { useState } from "react";

function Chara(){ 
    const [personagens, setPersonagem] = useState([
        {
            id: 1,
            name: "Luffy",
            image: "src/Pages/Home/Components/Characters/fotos/luffy.png",
            left: '-150px',
            top: '-5px',
            
        },
        {
            id: 2,
            name: "Zoro",
            image: "src/Pages/Home/Components/Characters/fotos/zoro.png",
            left: '-115px',
            top: '-250px',
            width: '600px',
        },
        {
            id: 3,
            name: "Usopp",
            image: "src/Pages/Home/Components/Characters/fotos/Usopp.png",
            left: '-140px',
            top: '-120px',
            width: '500px',
        },
        {
            id: 4,
            name: "Sanji",
            image: "src/Pages/Home/Components/Characters/fotos/sanji.png",
            left: '-140px',
            top: '0px',
            width: '300px',
        },
        {
            id: 5,
            name: "Nami",
            image: "src/Pages/Home/Components/Characters/fotos/nami.png",
            left: '-200px',
            top: '0px',
            width: '600px',
        },
        {
            id: 6,
            name: "Chopper",
            image: "src/Pages/Home/Components/Characters/fotos/chopper.png",
            left: '-160px',
            top: '-20px',
            width: '390px',
        },
        {
            id: 7,
            name: "Robin",
            image: "src/Pages/Home/Components/Characters/fotos/robin.png",
            left: '-250px',
            top: '-50px',
            width: '600px',
        },
        {
            id: 8,
            name: "Franky",
            image: "src/Pages/Home/Components/Characters/fotos/Franky.png",
            left: '-240px',
            top: '-150px',
            width: '480px',
        },
        {
            id: 9,
            name: "Brook",
            image: "src/Pages/Home/Components/Characters/fotos/brook.png",
            left: '-140px',
            top: '0px',
            width: '400px',
        },
        {
            id: 10,
            name: "Jimbe",
            image: "src/Pages/Home/Components/Characters/fotos/jimbe.png",
            left: '-140px',
            top: '0px',
            width: '510px',
        },
       
    ])
  
    return(
        <>
            <Background>
                <MainContainer id = 'personagens'> 
               

                    <ContTitulo> 
                        <Title> Personagens </Title>
                    </ContTitulo>

                    <ContPersonagens> 
                         {personagens.map((char) =>(
                            <PersonagemBoxStyle  key = {char.id}> 
                                <Personagem style = {char} src = {char.image} />
                            </PersonagemBoxStyle>
                        ))} 
                                                
                    </ContPersonagens>
                </MainContainer>
            </Background>
        </>

    )




}

export default Chara