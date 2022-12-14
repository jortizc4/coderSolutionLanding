import React, {useEffect} from "react";
import { HubspotFormContainer } from "./styles/styledComponents.js";
export const HubspotContactForm = props => {
  const { region, portalId, formId } = props;
  useEffect(() => {
    const script = document.createElement('script');
    script.src='https://js.hsforms.net/forms/shell.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {

      if (window.hbspt) {

        window.hbspt.forms.create({
          region: {region},
          portalId: {portalId},
          formId: {formId},
          target: '#hubspotForm'
        })
      }
    });
  }, []);

  return (
    <div>
      <HubspotFormContainer id="hubspotForm"></HubspotFormContainer>
    </div>
  );
};