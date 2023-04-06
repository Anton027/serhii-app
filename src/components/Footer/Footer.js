import { Container } from "components/Container";
import { FooterSect, Wrapper,ItemNetwork, LogoLink,Link,List,Item, WrapAddres,NetworksList,NetworkTitle,Logo } from "./Footer.styled"
import { BsInstagram,BsFacebook,BsTelegram,BsLinkedin } from 'react-icons/bs';
import logo from "../../images/video-logo.png"

export const Footer = () => {
    return (
        <>
            <FooterSect>
                <Container>
    
                    <Wrapper>
                        <WrapAddres>
                            <LogoLink to="/">
                                <Logo src={logo} alt="logo" />
                            </LogoLink>
                            
                                <List>
                                    <Item >
                                        <Link  to="https://goo.gl/maps/qqfPJEeKQyeXZiAr5" target="_blank">
                                            Ukraine, 30100 Netishyn
                                        </Link>
                                    </Item>
                        
                                    <Item >
                                        <Link  to="mailto:info@devstudio.com">
                                            info@devstudio.com
                                        </Link>
                                    </Item>
                        
                                    <Item >
                                        <Link  to="tel:+380961111111">
                                            +38 096 111 11 11
                                        </Link>
                                    </Item>
                                </List>
                            
                        </WrapAddres>
                        <div >
                            <NetworkTitle >
                                Join to us
                            </NetworkTitle>
                            <NetworksList >
                                <ItemNetwork >
                                    <Link to="https://www.instagram.com/" target="_blank" className="social-network__link join__link">
                                        <BsInstagram size={32}/>
                                    </Link>
                                </ItemNetwork>
                                <ItemNetwork >
                                    <Link to="https://www.telegram.com/" target="_blank" className="social-network__link join__link">
                                        <BsTelegram size={32}/>
                                    </Link>
                                </ItemNetwork>
                                <ItemNetwork >
                                    <Link to="https://www.facebook.com/"  target="_blank" className="social-network__link join__link">
                                        <BsFacebook size={32} />
                                    </Link>
                                </ItemNetwork>
                                <ItemNetwork >
                                    <Link to="https://www.linkedin.com/"  target="_blank" className="social-network__link join__link">
                                        <BsLinkedin size={32}/>
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