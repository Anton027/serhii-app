
import { Header } from "./Header";

import { GlobalStyle } from "./GlobalStyle";
import { ParticlesBackgrnd } from "./ParticlesBackgrnd";
import Home from "pages/Home";

import { Footer } from "./Footer";


export const App = () => {
  return (
    <>  
      <ParticlesBackgrnd id="tsparticles" />
        <Header />
        <Home />
        <Footer />
        <GlobalStyle />
    </>
  );
};
