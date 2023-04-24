import { Container } from "components/Container";
import { LinkMore,WrapLink } from "./MainGallery.styled"; 
// import { SwiperCenter } from "components/Swiper/Swiper";
import { SwiperCarousel } from "components/SwiperCarousel/SwiperCarousel";



export const MainGallery = () => {
    return (
        <>
            <Container>
                {/* <SwiperCenter /> */}

                <SwiperCarousel />

                <WrapLink>
                    <LinkMore to={"/gallery"}>
                        More
                    </LinkMore>
                </WrapLink>
            </Container>
        </>
    )
}