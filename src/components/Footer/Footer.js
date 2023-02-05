import { FooterSect } from "./Footer.styled"
export const Footer = () => {
    return (
        <>
            <FooterSect class="footer">
                <div class="container footer__main">
                    <div class="footer__wrapper">
                        <div class="footer__address">
                            <a class="logo footer__logo" lang="en" href="@">
                                <span class="logo__part" lang="en">Portfolio</span>_Serhii
                            </a>
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
                        </div>
                        <div class="join">
                            <p class="join__text">
                                Join to me
                            </p>
                            <ul class="social-network">
                                <li class="social-network__item">
                                    <a href="https://www.instagram.com/" class="social-network__link join__link">
                                        <svg class="social-network__icon" width="20" height="20">
                                            <use href="./images/svg/sprite.svg#instagram"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="social-network__item">
                                    <a href="https://www.twitter.com/" class="social-network__link join__link">
                                        <svg class="social-network__icon" width="20" height="20">
                                            <use href="./images/svg/sprite.svg#twitter"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="social-network__item">
                                    <a href="https://www.facebook.com/" class="social-network__link join__link">
                                        <svg class="social-network__icon" width="20" height="20">
                                            <use href="./images/svg/sprite.svg#facebook"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="social-network__item">
                                    <a href="https://www.linkedin.com/" class="social-network__link join__link">
                                        <svg class="social-network__icon" width="20" height="20">
                                            <use href="./images/svg/sprite.svg#linkedin"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </FooterSect>
        </>
    )
}