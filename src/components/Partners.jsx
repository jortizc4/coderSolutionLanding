import {SectionContainer, TextWrapper} from "./styles/styledComponents.js";
import AwsPartner from "../assets/amazon-aws.svg"
import SalesforcePartner from "../assets/salesforce.svg"

export const Partners = () => {
    return (
        <SectionContainer partners id='partners'>


            <TextWrapper>
                <h2>Aliados</h2>

            </TextWrapper>
            <div>
                <figure>
                    <img src={AwsPartner} alt=""/>
                </figure>

                <figure>
                    <img src={SalesforcePartner} alt=""/>
                </figure>

            </div>


        </SectionContainer>
    )
}