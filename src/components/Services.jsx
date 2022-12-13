import { SectionContainer } from "./styles/styledComponents.js";
import { ServiceItem } from "./ServiceItem.jsx";
import DataImg from "../assets/Data.svg";
import TestingImg from "../assets/testing.svg";
import SalesforceImg from "../assets/salesforce.svg";
import AwsImg from "../assets/amazon-aws.svg";
import ConsultancyImg from "../assets/consultancy.png";
import SecurityImg from "../assets/data-analysis.gif";
import StaffingImg from "../assets/staffing.svg";
export const Services = () => {
  return (
    <SectionContainer services id="services">
        <h2>Servicios</h2>

        <div>
            <ServiceItem img={DataImg} service='Data Analytics'/>
            <ServiceItem img={TestingImg}  service='Testing'/>
            <ServiceItem img={SalesforceImg}  service='Consultoria Salesforce'/>
            <ServiceItem img={AwsImg} service='Consultoria AWS' />
            <ServiceItem img={ConsultancyImg} service='Transformacion Digital' />
            <ServiceItem img={SecurityImg} service='Cyber-seguridad' />
            <ServiceItem/>
            <ServiceItem img={StaffingImg} service='Staffing & Headhunting'/>

        </div>

    </SectionContainer>
  );
};
