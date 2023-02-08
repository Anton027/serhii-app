import { Container } from "components/Container";
import { FooterSect, Wrapper,ItemNetwork, LogoLink,Link,Item, WrapAddres,NetworksList,NetworkTitle } from "./Footer.styled"
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
                                <ul>
                                    <Item >
                                        <Link  href="https://goo.gl/maps/qqfPJEeKQyeXZiAr5">
                                            Ukraine, 30100 Netishyn
                                        </Link>
                                    </Item>
                        
                                    <Item >
                                        <Link  href="mailto:info@devstudio.com">
                                            info@devstudio.com
                                        </Link>
                                    </Item>
                        
                                    <Item >
                                        <Link  href="tel:+380961111111">
                                            +38 096 111 11 11
                                        </Link>
                                    </Item>
                                </ul>
                            </address>
                        </WrapAddres>
                        <div >
                            <NetworkTitle >
                                Join to us
                            </NetworkTitle>
                            <NetworksList >
                                <ItemNetwork >
                                    <Link href="https://www.instagram.com/" className="social-network__link join__link">
                                        <BsInstagram size={26}/>
                                    </Link>
                                </ItemNetwork>
                                <ItemNetwork >
                                    <Link href="https://www.telegram.com/" className="social-network__link join__link">
                                        <BsTelegram size={26}/>
                                    </Link>
                                </ItemNetwork>
                                <ItemNetwork >
                                    <Link href="https://www.facebook.com/" className="social-network__link join__link">
                                        <BsFacebook size={26} />
                                    </Link>
                                </ItemNetwork>
                                <ItemNetwork >
                                    <Link href="https://www.linkedin.com/" className="social-network__link join__link">
                                        <BsLinkedin size={26}/>
                                    </Link>
                                </ItemNetwork>
                            </NetworksList>
                        </div>
                    </Wrapper>
                    
                </Container>
            </FooterSect>
        </>
    )
}