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
          Somos expertos en transformación digital
        </h1>

        <p>
          Coders Solution es una empresa mexicana dedicada a proveer servicios y soluciones de TI con un enfoque multi-industria. Utilizamos las últimas tecnologìas y metodologìas para llevar a cabo la transformación digital de tu negocio, te acompañamos desde la ideación, definición, diseño , implementación de software, testing, soporte y mantenimiento.to your needs.
        </p>
      </TextWrapper>

      <BannerImg>
        <img src={headerImg} alt="" />
      </BannerImg>
    </SectionContainer>
  );
};
