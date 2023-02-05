import { Head, LogoLink, Nav,InfoList } from "./Header.styled";
import { AiFillPhone, AiFillMail} from "react-icons/ai";

export const Header = () => {
    return (
        <>
            <Head>
                <Nav>
                    <LogoLink href="https://www.google.com">
                        <span className="logo__part" lang="en">Portfolio</span>_Serhii
                    </LogoLink>
                </Nav>
                <InfoList className="contacts list">
                    <li className="contacts__item">
                        <a className="contacts__link contact contacts__link--padding-top" href="mailto:info@devstudio.com">
                            <AiFillMail />
                            info@devstudio.com
                        </a>
                    </li>

                    <li className="contacts__item">
                        <a className="contacts__link contact contacts__link--padding-bottom" href="tel:+380961111111">
                            <AiFillPhone />
                            +38 096 111 11 11
                        </a>
                    </li>
                </InfoList>
            </Head>
        </>
    );
}
