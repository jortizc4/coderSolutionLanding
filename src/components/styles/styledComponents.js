import styled, { css } from "styled-components";
export const HamburguerMenu = styled.figure`
  display: none;
  cursor: pointer;
  padding: 0 1rem;
`;

export const Contact = styled.div`
  cursor: pointer;
  background-color: var(--LightBlue);
  color: var(--Light);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0 1px 1px, rgba(9, 30, 66, 0.13) 0 0 1px 1px;

  a {
    color: var(--Light);
  }
  :hover {
    box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  }
`;
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  li {
    cursor: pointer;
    display: inline-block;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--LightBlue);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    :hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  ${(props) =>
    props.mobile &&
    css`
      background: red;
      color: black;
    `}
`;

export const MobileMenu = styled.ul`
background-color: var(--Light);
  position: absolute;
  width: 100%;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  text-align: right;
  padding: 2rem 1rem;
  border-radius: 0 0 1rem 1rem;

  li {
    cursor: pointer;
    display: inline-block;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--LightBlue);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    :hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
;
 
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  position: fixed;
  overflow: hidden;
  width: 100%;
  padding: 2rem 4rem;
  background-color: var(--Light);
  z-index: 2;
  @media (max-width: 465px) {
    overflow: visible;
    padding: 0;
    ${Menu}, ${Contact} {
      display: none;
    }
    ${HamburguerMenu} {
      display: block;
    }
  }
`;
export const LogoContainer = styled.figure`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 13rem;
   margin-top: 1rem;
  }
  ${(props) =>
    props.footer &&
    css`
      flex-direction: column;
      
      img {
       
        padding: 0;
        margin-left: -2.3rem;
      }

      @media (max-width: 465px) {
        padding: 2rem 0;
      }
    `}
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  margin: 2rem 0;
  border-radius: 0.5rem;
  background: var(--Light);
  box-shadow: 20px 20px 60px var(--Light), -20px -20px 60px #ffffff;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    input,
    textarea {
      border: 1px solid var(--DarkText);
      border-radius: 0.5rem;
      resize: none;
      padding: 1rem;
      ::placeholder {
        text-transform: capitalize;
      }
    }
    input.error,
    textarea.error {
      border-color: #ff5e60;
    }

    input {
      height: 2rem;
    }
    textarea {
      height: 10rem;
    }
  }
`;
export const ContactInfo = styled.div`
  width: 100%;
  margin-left: 1rem;
  border-radius: 5px;
  background: #dfefff;
  box-shadow: 11px 11px 22px #c4d2e0, -11px -11px 22px #faffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: bold;
  }
`;
export const SectionContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 4rem;
  background-color: #dfefff;

  @media (max-width: 465px) {
    flex-direction: column-reverse;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  ${(props) =>
    props.services &&
    css`
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      background-color: var(--Light);

      div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        margin: 1rem 0;
      }

      @media (max-width: 465px) {
        flex-direction: column;
        h2 {
          font-size: 1.8rem;
        }
        div {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(4, 1fr);
          margin: 0;
        }
      }
    `}

  ${(props) =>
    props.contact &&
    css`
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      background-color: var(--Light);
      gap: 1rem;

      @media (max-width: 465px) {
        flex-direction: column;
      }
    `}

  &&  ${(props) =>
    props.partners &&
    css`
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      background-color: #dfefff;

      div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;

        figure {
          margin-left: 0.5rem;
          :hover {
            transform: scale(1.1);
          }

          img {
            width: 100%;
            max-width: 200px;
          }
        }
      }

      @media (max-width: 465px) {
        flex-direction: column;
        h2 {
          font-size: 2rem;
        }
        figure {
          margin: 0 1rem;
        }
        img {
          max-width: 100px;
          margin: 0;
        }
      }
    `}
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  text-align: left;
  h2 {
    width: 100%;
  }
  h1 {
    margin: -9rem 0 1rem 0;
  }

  @media (max-width: 465px) {
    width: 100%;
    text-align: justify;
    font-size: 0.8rem;

    h1 {
      margin: 0;
    }
  }

  ${(props) =>
    props.footer &&
    css`
      width: 100%;
      gap: 0.5rem;
      text-align: justify;
    `}
`;
export const BannerImg = styled.figure`
  width: 60%;
  overflow: hidden;
  img {
    width: 100%;
    margin-left: 5rem;
  }

  @media (max-width: 465px) {
    width: 100%;
    img {
      margin-left: 0;
      padding: 2rem 0;
    }
  }
`;

export const ServiceItemContainer = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 2rem;
  @media (max-width: 465px) {
    margin: 0.5rem;
  }
  img {
    width: 5rem;
  }
  :hover {
    transform: scale(1.2);
  }
`;
export const Button = styled(Contact)`
  border: none;
`;
export const ErrorMessage = styled.div`
  color: #ff5e60;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    width: 1rem;
  }
`;

export const Icon = styled.figure`
  display: flex;
  align-items: center;
  width: 6rem;
  justify-content: flex-start;
  gap: 0.2rem;
  h3 {
    font-size: 1rem;
  }
  figcaption {
    display: none;
  }
  :hover {
    figcaption {
      animation: all 2ms ease;
      display: block;
    }
  }
`;
export const FooterContainer = styled.footer`
  background-color: #dfefff;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  div {
    display: flex;
  }

  @media (max-width: 465px) {
    flex-direction: column;
  }
`;
export const FooterLinks = styled(Menu)`
  border-left: 1px solid var(--DarkText);
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 3rem;

  ul {
    margin: 1rem 0;
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 465px) {
    padding: 2rem 0;
    flex-direction: row;
    border-bottom: 1px solid var(--DarkText);
    border-top: 1px solid var(--DarkText);
    border-left: none;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  border-left: 1px solid var(--DarkText);

  div {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
  }
  img {
    width: 2rem;
    cursor: pointer;
  }

  @media (max-width: 465px) {
    flex-direction: column;
    border: none;
    h4 {
      display: none;
    }
    div {
      flex-direction: row;
      padding: 0.5rem;
    }
  }
`;
