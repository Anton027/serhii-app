import { Head, LogoLink,Pages,PagesLink, Nav,InfoList,Icon,Link,InfoListItem } from "./Header.styled";
import { AiFillPhone, AiFillMail} from "react-icons/ai";
import { Container } from "components/Container";
import { BurgerMenu } from "components/BurgerMenu";
// import { SwitchTheme } from "components/SwitchTheme";


export const Header = () => {
    return (
        <>
            <Container>
                <Head>
                
                    <Nav>
                        <LogoLink href="https://www.google.com">
                            Logo
                        </LogoLink>
                        {/* <SwitchTheme/> */}
                    </Nav>

                    <Pages>
                        <li>
                            <PagesLink to="/" end>
                                Home
                            </PagesLink>
                        </li>
                        <li>
                            <PagesLink to="/gallery">
                                Gallery
                            </PagesLink>
                        </li>
                    </Pages>

                    <InfoList >
                        <InfoListItem>
                            <Link  href="mailto:info@devstudio.com">
                                <Icon>
                                    <AiFillMail />
                                </Icon>
                                
                                info@devstudio.com
                            </Link>
                        </InfoListItem>

                        <InfoListItem>
                            <Link href="tel:+380961111111">
                                <Icon>
                                    <AiFillPhone />
                                </Icon>
                                
                                +38 096 111 11 11
                            </Link>
                        </InfoListItem>
                    </InfoList>
                    <BurgerMenu/>
                </Head>
            </Container>
        </>
    );
}
