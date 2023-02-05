import { HeroSection,HeroWrap } from "./Hero.styled";
export const Hero = () => {
    return (
        <>
            <HeroSection class="hero overlay"> 
                <HeroWrap class="hero__main">
                    <h1 class="hero__title">
                        OMG Plese give some text
                    </h1>
                    <button data-modal-open type="button" class="hero__btn btn">
                        Press
                    </button>
                </HeroWrap>
            </HeroSection> 
        </>
    );
}