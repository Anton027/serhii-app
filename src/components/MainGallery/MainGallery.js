import { Container } from "components/Container";
import { LinkMore,WrapLink } from "./MainGallery.styled"; 
import { SwiperCenter } from "components/Swiper/Swiper";



export const MainGallery = () => {
    return (
        <>
            <Container>
                <SwiperCenter />
                <WrapLink>
                    <LinkMore to={"/gallery"}>
                        More
                    </LinkMore>
                </WrapLink>
            </Container>
        </>
    )
}