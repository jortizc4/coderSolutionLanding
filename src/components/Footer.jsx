import {FooterLinks, Menu, FooterContainer, IconContainer, LogoContainer} from "./styles/styledComponents.js";
import {SocialCards} from "./SocialCards.jsx";
import FbIcon from "../assets/facebook.png";
import LkIcon from "../assets/linkedin.svg";
import TwIcon from "../assets/twitter.svg";
import Logo from "../assets/logo.png";
export const Footer = () => {
    return (
        <FooterContainer>
            <LogoContainer footer>
                <img src={Logo} alt="coders solution logo"/>

                    <h4>Call us</h4>
                    <span>+1 4332323</span>

            </LogoContainer>

            <FooterLinks>

                    <li>Home</li>
                    <li>Services</li>
                    <li>Partners</li>
                    <li>Contact us</li>


            </FooterLinks>
            <IconContainer>
                <h4>Lets chat!</h4>
                <div>
                    <SocialCards icon={FbIcon} user='coder123' link='fb.com'/>
                    <SocialCards icon={LkIcon} user='coder123' link='fb.com'/>
                    <SocialCards icon={TwIcon} user='coder123' link='fb.com'/>
                </div>

            </IconContainer>

        </FooterContainer>
    )
}