import { lazy,Suspense } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Loader } from "./Loader/Loader";
import { BackgroundContainer } from "./BackgroundContainer";
import { Footer } from "./Footer";

const Home = lazy(() => import("../pages/Home"));
const Gallery = lazy(() => import("../pages/Gallery"));
const NotFound = lazy(() => import("../pages/NotFound"))

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BackgroundContainer>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route  path="/gallery" element={<Gallery />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BackgroundContainer>
      <GlobalStyle />
    </Suspense>
  );
};
