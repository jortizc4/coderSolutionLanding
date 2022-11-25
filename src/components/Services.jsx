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
    <SectionContainer services>
        <h2>Our services</h2>

        <div>
            <ServiceItem img={DataImg} service='Data Analytics'/>
            <ServiceItem img={TestingImg}  service='Testing'/>
            <ServiceItem img={SalesforceImg}  service='Salesforce Consultancy'/>
            <ServiceItem img={AwsImg} service='Aws Consultancy' />
            <ServiceItem img={ConsultancyImg} service='Digital Transformation' />
            <ServiceItem img={SecurityImg} service='Cyber-security' />
            <ServiceItem/>
            <ServiceItem img={StaffingImg} service='Staffing and Headhunting'/>

        </div>

    </SectionContainer>
  );
};
