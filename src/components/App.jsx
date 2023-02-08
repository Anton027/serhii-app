import { Header } from "./Header";
import { Hero } from "./Hero";
import { CatalogList } from "./CatalogList";
import { Footer } from "./Footer";
import { BackgroundContainer } from "./BackgroundContainer";
import { GlobalStyle } from "./GlobalStyle";
export const App = () => {
  return (
    <>  
      <Header />
      <BackgroundContainer>
        <Hero />
        <CatalogList />
        <Footer />
      </BackgroundContainer>
    

      <GlobalStyle />
    </>
  );
};
