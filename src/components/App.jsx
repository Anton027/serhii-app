import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";

import { GlobalStyle } from "./GlobalStyle";
import { ParticlesBackgrnd } from "./ParticlesBackgrnd";
import Home from "pages/Home";
import Gallery from "pages/Gallery";
import NotFound from "pages/NotFound";
import { Footer } from "./Footer";


export const App = () => {
  return (
    <>  
      <ParticlesBackgrnd id="tsparticles" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
        <GlobalStyle />
    </>
  );
};
