import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;

  figure {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      max-width: 8rem;
      padding: 2rem 0;
    }
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
`;
export const Contact = styled.div`
  cursor: pointer;
  background-color: var(--LightBlue);
  color: var(--Light);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0 1px 1px, rgba(9, 30, 66, 0.13) 0 0 1px 1px;

  :hover {
    box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  }
`;
export const BannerContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  text-align: left;
  h1 {
    margin: -9rem 0 1rem 0;
    display: inline-block;
  }
`;
export const BannerImg = styled.figure`
  width: 60%;
  overflow: hidden;
  img {
    width: 100%;
    margin-left: 5rem;
  }
`;
