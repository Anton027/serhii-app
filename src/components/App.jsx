import { Header } from "./Header";
import { Hero } from "./Hero";
import { CatalogList } from "./CatalogList";
import { Footer } from "./Footer";
import { GlobalStyle } from "./GlobalStyle";
import { ParticlesBackgrnd } from "./ParticlesBackgrnd";


export const App = () => {
  return (
    <>  
      <ParticlesBackgrnd id="tsparticles" />
        <Header />
        <Hero />
        <CatalogList />
        <Footer />
      <GlobalStyle />
    </>
  );
};
