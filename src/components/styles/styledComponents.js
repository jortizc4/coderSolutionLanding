import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4rem;
  padding: 2rem 0;
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
`
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  li {
    cursor: pointer;
  }
`
export const Contact = styled.div`
  cursor: pointer;
  background-color: var(--LightBlue);
  color: var(--Light);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0 1px 1px, rgba(9, 30, 66, 0.13) 0 0 1px 1px;
  
  :hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
 
`