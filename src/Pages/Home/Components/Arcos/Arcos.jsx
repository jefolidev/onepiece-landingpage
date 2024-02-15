import { ArcosBox, Background, ContTitulo, MainContainer, Title, Name, Carrossel } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react'

import { register } from 'swiper/element/bundle'
register();

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/grid'
import './swiper.css'

function Arcos(){
    const arcos = [
        { 
            id: 1,
            name: "East Blue",
        },
        { 
            id: 2,
            name: "Alabasta",
        },
        { 
            id: 3,
            name: "Skypiea",
        },
        { 
            id: 4,
            name: "Water 7/Ennies Lobby",
        },
        { 
            id: 5,
            name: "Thriller Bark",
        },
        { 
            id: 6,
            name: "Sabaody",
        },
        { 
            id: 7,
            name: "Alabasta",
        },
        { 
            id: 8,
            name: "Skypiea",
        },
        { 
            id: 9,
            name: "East Blue",
        },
        { 
            id: 10,
            name: "Alabasta",
        },
        { 
            id: 11,
            name: "Skypiea",
        },
        { 
            id: 12,
            name: "Water 7/Ennies Lobby",
        },
        { 
            id: 13,
            name: "Thriller Bark",
        },
        { 
            id: 14,
            name: "Sabaody",
        },
        { 
            id: 15,
            name: "Alabasta",
        },
        { 
            id: 16,
            name: "Skypiea",
        },
    ]

    return( 
        <>
            <Background id = 'arcos'>
                <MainContainer>
                    <ContTitulo>
                        <Title> Arcos </Title>
                    </ContTitulo>

                    {/* <Buttons> 
                        <Btn onClick = {leftClick}> Esquerda </Btn>
                        <Btn onClick = {rightClick}> Direita </Btn>
                    </Buttons> */}
                <Carrossel>

                    <Swiper style = {{padding: '10px'}}
                        slidesPerView={5}
                        grid={{
                            rows: 2,
                            fill: "row",
                        }}
                        spaceBetween={5}
                        pagination = {{
                            clickable: true,
                        }}
                        navigation
                        className = "carrossel"
                        > 
                          <SwiperSlide> <ArcosBox>  <Name> East Blue </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Alabasta </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Skypiea </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Water 7/Ennies Lobby </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Thriller Bark </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Sabaody </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Impel Town </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Marine Ford </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Time Skip </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Ilha dos Tritões </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Punk Hazard </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Dressrosa </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Zou </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Whole Cake </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Wano </Name></ArcosBox> </SwiperSlide>
                          <SwiperSlide> <ArcosBox>  <Name> Egg Head </Name></ArcosBox> </SwiperSlide>


                    </Swiper>
                </Carrossel>
                </MainContainer>
            </Background>    

        </>
    )

}

export default Arcos