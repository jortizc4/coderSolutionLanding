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
          <a href={`#`}>Inicio</a>
        </li>
        <li>
          <a href={`#services`}>Servicios</a>
        </li>
        <li>
          <a href={`#partners`}>Aliados</a>
        </li>
      </Menu>
      <Contact>
        <a href={`#contact`}>Contacto</a>
      </Contact>
      <HamburguerMenu onClick={() => setShow(!show)}>
        <img src={MenuImg} alt="hamburguer menu" />
      </HamburguerMenu>
      {show && (
        <MobileMenu>
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Aliados</li>
          <li>Contacto</li>
        </MobileMenu>
      )}
    </Nav>
  );
}
