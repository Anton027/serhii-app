import { Container } from "components/Container";
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
                            <address >
                                <ul >
                                    <li >
                                        <a  href="https://goo.gl/maps/qqfPJEeKQyeXZiAr5">
                                            Ukraine, 30100 Netishyn
                                        </a>
                                    </li>
                        
                                    <li >
                                        <a  href="mailto:info@devstudio.com">
                                            info@devstudio.com
                                        </a>
                                    </li>
                        
                                    <li >
                                        <a  href="tel:+380961111111">
                                            +38 096 111 11 11
                                        </a>
                                    </li>
                                </ul>
                            </address>
                        </WrapAddres>
                        <div >
                            <NetworkTitle >
                                Join to us
                            </NetworkTitle>
                            <NetworksList >
                                <li >
                                    <a href="https://www.instagram.com/" className="social-network__link join__link">
                                        <BsInstagram size={26}/>
                                    </a>
                                </li>
                                <li >
                                    <a href="https://www.telegram.com/" className="social-network__link join__link">
                                        <BsTelegram size={26}/>
                                    </a>
                                </li>
                                <li >
                                    <a href="https://www.facebook.com/" className="social-network__link join__link">
                                        <BsFacebook size={26} />
                                    </a>
                                </li>
                                <li >
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