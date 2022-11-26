import {SectionContainer, TextWrapper} from "./styles/styledComponents.js";
import AwsPartner from "../assets/amazon-aws.svg"
import SalesforcePartner from "../assets/salesforce.svg"

export const Partners = () => {
    return (
        <SectionContainer partners id='partners'>


            <TextWrapper>
                <h2>Our partners</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolore facilis nam obcaecati repellat. Aliquid beatae dolor dolorum expedita laudantium magnam nihil officiis perspiciatis qui quia quos recusandae, ullam. Sint?
                </p>
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