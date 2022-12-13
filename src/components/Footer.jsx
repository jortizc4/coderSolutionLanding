import {
  FooterLinks,
  FooterContainer,
  IconContainer,
  LogoContainer,
  TextWrapper
} from "./styles/styledComponents.js";
import { SocialCards } from "./SocialCards.jsx";
import FbIcon from "../assets/facebook.png";
import LkIcon from "../assets/linkedin.svg";
import TwIcon from "../assets/twitter.svg";
import Logo from "../assets/logo.png";
export const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer footer id="footer">
        <a href={`#`}>
          <img src={Logo} alt="coders solution logo" />
        </a>

<TextWrapper footer>
  <h4>Llamanos</h4>
  <span>+52 5585344473</span>

  <h4>Email</h4>
  <a href='mailto:contacto@coders-solution.com'>contacto@coders-solution.com</a>
</TextWrapper>



      </LogoContainer>

      <FooterLinks>
        <li>
          <a href={`#`}>Inicio</a>
        </li>
        <li>
          <a href={`#services`}>Servicios</a>
        </li>
        <li>
          <a href={`#partners`}>Aliados</a>
        </li>

        <li>
          <a href={`#contact`}>Contacto</a>
        </li>
      </FooterLinks>
      <IconContainer>
        <h4>Escribenos!</h4>
        <div>
          <SocialCards icon={FbIcon} user="coder123" link="fb.com" />
          <SocialCards icon={LkIcon} user="coder123" link="fb.com" />
          <SocialCards icon={TwIcon} user="coder123" link="fb.com" />
        </div>
      </IconContainer>
    </FooterContainer>
  );
};
