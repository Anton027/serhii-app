import { Container } from "components/Container.styled";
import { FooterSect, Wrapper, LogoLink, WrapAddres,NetworksList,NetworkTitle } from "./Footer.styled"
import { BsInstagram,BsFacebook,BsTelegram,BsLinkedin } from 'react-icons/bs';
export const Footer = () => {
    return (
        <>
            <FooterSect>
                <Container>
    
                    <Wrapper>
                        <WrapAddres>
                            <LogoLink href="https://www.google.com">
                                Logo
                            </LogoLink>
                            <address class="address">
                                <ul class="address-list list">
                                    <li class="address-item">
                                        <a class="address-link map" href="https://goo.gl/maps/qqfPJEeKQyeXZiAr5">
                                            Ukraine, 30100 Netishyn
                                        </a>
                                    </li>
                        
                                    <li class="address-item">
                                        <a class="address-link contact" href="mailto:info@devstudio.com">
                                            info@devstudio.com
                                        </a>
                                    </li>
                        
                                    <li class="address-item">
                                        <a class="address-link contact" href="tel:+380961111111">
                                            +38 096 111 11 11
                                        </a>
                                    </li>
                                </ul>
                            </address>
                        </WrapAddres>
                        <div class="join">
                            <NetworkTitle class="join__text">
                                Join to us
                            </NetworkTitle>
                            <NetworksList class="social-network">
                                <li class="social-network__item">
                                    <a href="https://www.instagram.com/" className="social-network__link join__link">
                                        <BsInstagram size={26}/>
                                    </a>
                                </li>
                                <li class="social-network__item">
                                    <a href="https://www.telegram.com/" className="social-network__link join__link">
                                        <BsTelegram size={26}/>
                                    </a>
                                </li>
                                <li class="social-network__item">
                                    <a href="https://www.facebook.com/" className="social-network__link join__link">
                                        <BsFacebook size={26} />
                                    </a>
                                </li>
                                <li class="social-network__item">
                                    <a href="https://www.linkedin.com/" className="social-network__link join__link">
                                        <BsLinkedin size={26}/>
                                    </a>
                                </li>
                            </NetworksList>
                        </div>
                    </Wrapper>
                    
                </Container>
            </FooterSect>
        </>
    )
}