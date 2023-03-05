import { CatalogList } from "components/CatalogList";
import { Hero } from "components/Hero";
import { SliderResponsive } from "components/SimpleSlider";


const Home = () => { 
    return (
        <>
            <Hero />
            <SliderResponsive />
            <CatalogList />
        </>
    )
};
export default Home;