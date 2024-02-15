import { Barco, Button, ContBarco, ContText, ContSocial, Elements, MainContainer, Overlay, SubTitle, Title, Social, TopButton } from "./style"
import background from "../../../../assets/background.png"

function Principal() {


    return (
        <>
    

            <MainContainer style = {{ backgroundImage: `url(${background})` }}>
                <Overlay/>
                    <Elements> 
                        <ContBarco>
                            <Barco src = "\src\assets\sunny-go.png"/>
                        </ContBarco>

                        <ContText>
                            <Title> O N E  P I E C E </Title>
                            <SubTitle> Uma jornada sem fim. </SubTitle>
                            <Button> Descubra mais </Button>
                            
                            <ContSocial> 
                                <a href = "https://github.com/jefolidev" target = "_blank"><Social src = "\src\assets\github-icon.png"/></a>
                                <a href = "https://www.linkedin.com/in/jeferson-franco-1349062b0/" target = "_blank"> <Social src = "\src\assets\linkedin-svgrepo-com.svg"/></a>
                            </ContSocial>
                        </ContText>
                        
                    </Elements>
            

            </MainContainer>
            {/* <TopButton> Top </TopButton> */}

        </>
    )
}

export default Principal

