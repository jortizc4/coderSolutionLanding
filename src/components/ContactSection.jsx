import {
  Button,
  SectionContainer,
  ErrorMessage,
  FormContainer,
} from "./styles/styledComponents.js";
import HubspotForm from "react-hubspot-form";
import { HubspotContactForm } from "./HubspotForm.jsx";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ContactSection = () => {
  return (
    <SectionContainer contact id="contact">
      <h2>Contacto</h2>

      <p>Cuéntanos mas acerca de tu proyecto para ponernos en contacto</p>
      <FormContainer>
        <HubspotForm
          region="na1"
          portalId="23233360"
          formId="08b730f1-0394-461c-9b6d-58b2879469b4"
        />
      </FormContainer>
    </SectionContainer>
  );
};
