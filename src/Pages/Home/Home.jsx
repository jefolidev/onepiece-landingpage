import React from 'react';
import { createGlobalStyle } from 'styled-components'

import Navbar from './Components/Navbar/Navbar';
import Principal from './Components/Principal/Principal';
import Arcos from './Components/Arcos/Arcos';
import Chara from './Components/Characters/Chara';
import Footer from './Components/Footer/Footer';
import './style.css'
import { BrowserRouter } from 'react-router-dom';



export const GlobalStyle = createGlobalStyle`
  body { 
    font-family: 'Montserrat', sans-serif;
    font-family: 'Bree Serif', serif;
    font-family: "Poppins", sans-serif;
    
    padding: 0;
    margin: 0;
    box-sizing: border-box;  

    
}`


function Home() {

  return (
  
    <BrowserRouter>
      <GlobalStyle/>
        <Navbar/>
        <Principal/>
        <Chara/>
        <Arcos/>
        <Footer/>

    </BrowserRouter>
  )
}

export default Home
