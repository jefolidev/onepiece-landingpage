import { Background, BlockCont, Contato,  Text, Title, Social, ContSocial, ContatoInfos } from "./style"
import linkedinpreto from "./assets/linkedin-icon-black.png"
import githubpreto from "./assets/github-icon-black.png"
import email from "./assets/emailicon.png"
function Footer(){
    return( 
        <>
            <Background id = 'contato'>
                    <BlockCont>
                        <Title style = {{fontSize: '30px', marginBottom: '5px', borderBottom: '3px dotted black'}}> Encontre mais sobre mim! </Title>
                        <Text style = {{marginTop: '10px'}}> Acesse meu Linkedin e GitHub e me dê uma moral! </Text>
                        <ContSocial>
                        <a href = "https://github.com/jefolidev" target = "_blank"> <Social src = {githubpreto}/></a> 
                        <a href = "https://www.linkedin.com/in/jeferson-franco-1349062b0/" target = "_blank"> <Social src = {linkedinpreto}/></a>
                        </ContSocial>
                    </BlockCont>
                    <Contato>
                        <Title style = {{
                                    color: 'white',
                                    fontSize: '30px',
                                    borderBottom: '1px solid white',
                                    marginBottom: '-5px'
                                    }}> 
                                        Contato 
                                </Title> 
                        <ContatoInfos> 
                            
                            <Social style = {{
                                padding: '3px',
                                width: '18px',
                                cursor: 'default'
                                }} 
                                    src = {email}
                            />
                            <Text style = {{
                                color: 'white', 
                                fontSize: '12px', 
                                fontWeight: '200', 
                                padding: '5px',
                                }}> 
                                    jefoliveira279@gmail.com 
                            </Text>
                        </ContatoInfos>
                        
                    </Contato>
            </Background>
        </>
    )
}

export default Footer

    