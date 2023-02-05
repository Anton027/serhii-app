import { HeroSection,HeroWrap,Title } from "./Hero.styled";
import { Container } from "components/Container.styled";
export const Hero = () => {
    return (
        <>
            <HeroSection >
                <Container>
                    <HeroWrap >
                        <Title>
                            Plese give some text
                        </Title>
                        {/* <button data-modal-open type="button" class="hero__btn btn">
                            Press
                        </button> */}
                    </HeroWrap>
                </Container>
            </HeroSection> 
        </>
    );
}