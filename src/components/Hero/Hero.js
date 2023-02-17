import { HeroSection,HeroWrap,Title,ImageWrap } from "./Hero.styled";
import { Container } from "components/Container";
export const Hero = () => {
    return (
        <>
            <HeroSection >
                <Container>
                    <HeroWrap >
                        <Title>
                            Plese give some text
                        </Title>
                        <ImageWrap>
                            
                        </ImageWrap>
                        {/* <button data-modal-open type="button" class="hero__btn btn">
                            Press
                        </button> */}
                    </HeroWrap>
                </Container>
            </HeroSection> 
        </>
    );
}