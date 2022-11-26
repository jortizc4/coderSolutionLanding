import { Nav, Menu, Contact, LogoContainer, HamburguerMenu, MobileMenu } from "./styles/styledComponents.js";
import {useState} from "react";
import Logo from '../assets/logo.png'
import MenuImg from '../assets/hamburguerMenu.svg'
export function NavBar () {
  const [show, setShow] = useState(false)
  return (
    <Nav>
    <LogoContainer>
      <img src={Logo} alt="coders solution logo"/>
    </LogoContainer>

      <Menu>
        <li>Home</li>
        <li>Services</li>
        <li>Partners</li>
      </Menu>
      <Contact>
        Contact Us
      </Contact>
      <HamburguerMenu onClick={() => setShow(!show)}>
        <img src={MenuImg} alt="hamburguer menu"/>
      </HamburguerMenu>
      {show && <MobileMenu>
        <li>Home</li>
        <li>Services</li>
        <li>Partners</li>
        <li>Contact us</li>
      </MobileMenu>}
    </Nav>
  )
}
