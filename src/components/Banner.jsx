import {
  SectionContainer,
  TextWrapper,
  BannerImg,
} from "./styles/styledComponents.js";
import headerImg from "../assets/Data.svg";

export const Banner = () => {
  return (
    <SectionContainer>
      <TextWrapper>
        <h1>
          Our team of experts are dedicated to provide the best solutions to
          your software requirements.
        </h1>

        <p>
          coders solution is a company dedicated to providing solutions and
          software services through best of the experts software services. We
          provide solutions that range from testing to AWS consultancy and our
          Skill set includes various technologies according to your needs.
        </p>
      </TextWrapper>

      <BannerImg>
        <img src={headerImg} alt="" />
      </BannerImg>
    </SectionContainer>
  );
};
