import {ServiceItemContainer} from "./styles/styledComponents.js";
import aws from '../assets/amazon-aws.svg'
export const ServiceItem = ({img, service}) => {
    return (
        <ServiceItemContainer>
            <img src={img} alt=""/>

            <figcaption>
                <h4>{service}</h4>
            </figcaption>
        </ServiceItemContainer>
    )
}