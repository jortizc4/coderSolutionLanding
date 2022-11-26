import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner.jsx";
import { Services } from "./components/Services.jsx";
import { Partners } from "./components/Partners.jsx";
import {ContactSection} from "./components/ContactSection.jsx";
import {Footer} from "./components/Footer.jsx";
import React from "react";
function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Services />
      <Partners />
        <ContactSection/>
        <Footer/>
    </>
  );
}

export default App;
