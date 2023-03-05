
import { Header } from "./Header";

import { GlobalStyle } from "./GlobalStyle";
import {  ParticlesBackgrnd } from "./ParticlesBackgrnd";
import Home from "pages/Home";

import { Footer } from "./Footer";
import { Routes,Route } from "react-router-dom";
import Gallery from "pages/Gallery";


export const App = () => {
  return (
    <>  
      <ParticlesBackgrnd id="tsparticles" />
        {/* <ParticlesBg />   */}
        <Header />
      <Home />
      <Routes>
        <Route path='/gallery' element={<Gallery/>}></Route>
      </Routes>
        <Footer />
        <GlobalStyle />
    </>
  );
};
