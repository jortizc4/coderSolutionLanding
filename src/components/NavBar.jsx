import {
  Nav,
  Menu,
  Contact,
  LogoContainer,
  HamburguerMenu,
  MobileMenu,
} from "./styles/styledComponents.js";
import { useState } from "react";
import Logo from "../assets/logo.png";
import MenuImg from "../assets/hamburguerMenu.svg";
export function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <Nav>
      <LogoContainer>
        <img src={Logo} alt="coders solution logo" />
      </LogoContainer>

      <Menu>
        <li>
          <a href={`#`}>Home</a>
        </li>
        <li>
          <a href={`#services`}>Services</a>
        </li>
        <li>
          <a href={`#partners`}>Partners</a>
        </li>
      </Menu>
      <Contact>
        <a href={`#contact`}>Contact Us</a>
      </Contact>
      <HamburguerMenu onClick={() => setShow(!show)}>
        <img src={MenuImg} alt="hamburguer menu" />
      </HamburguerMenu>
      {show && (
        <MobileMenu>
          <li>Home</li>
          <li>Services</li>
          <li>Partners</li>
          <li>Contact us</li>
        </MobileMenu>
      )}
    </Nav>
  );
}
