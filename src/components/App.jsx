import { Header } from "./Header";
import { Hero } from "./Hero";
import { CatalogList } from "./CatalogList";
import { Footer } from "./Footer";
import { GlobalStyle } from "./GlobalStyle";
export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <CatalogList />
      <Footer />
      <GlobalStyle />
    </>
  );
};
