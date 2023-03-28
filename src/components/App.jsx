import { lazy,Suspense } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loader } from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home"));
const Gallery = lazy(() => import("../pages/Gallery"));
const NotFound = lazy(() => import("../pages/NotFound"))

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route  path="/gallery" element={<Gallery />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <GlobalStyle />
    </Suspense>
  );
};
