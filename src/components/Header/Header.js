import { Head, LogoLink, Nav,InfoList,Icon } from "./Header.styled";
import { AiFillPhone, AiFillMail} from "react-icons/ai";
import { Container } from "components/Container";
import { SwitchTheme } from "components/SwitchTheme";

export const Header = () => {
    return (
        <>
            <Container>
                <Head>
                
                    <Nav>
                        <LogoLink href="https://www.google.com">
                            Logo
                        </LogoLink>
                        <SwitchTheme/>
                    </Nav>
                    <InfoList className="contacts list">
                        <li className="contacts__item">
                            <a className="contacts__link contact contacts__link--padding-top" href="mailto:info@devstudio.com">
                            <Icon>
                                <AiFillMail />
                            </Icon>    
                            
                                info@devstudio.com
                            </a>
                        </li>

                        <li className="contacts__item">
                            <a className="contacts__link contact contacts__link--padding-bottom" href="tel:+380961111111">
                                <Icon>
                                    <AiFillPhone />
                                </Icon>
                                
                                +38 096 111 11 11
                            </a>
                        </li>
                    </InfoList>
                
                </Head>
            </Container>
        </>
    );
}
