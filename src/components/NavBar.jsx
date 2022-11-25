import { Nav, Menu, Contact } from "./styles/styledComponents.js";
import Logo from '../assets/logo.png'
export function NavBar () {
  return (
    <Nav>
    <figure>
      <img src={Logo} alt="coders solution logo"/>
    </figure>
      <Menu>
        <li>Home</li>
        <li>Services</li>
        <li>Partners</li>
      </Menu>
      <Contact>
        Contact Us
      </Contact>
    </Nav>
  )
}
