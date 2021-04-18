import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

   // Medium devices (tablets, less than 992px)
   @media (min-width: 991.98px) { 
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`

export const Icon = styled.img``

export const Content = styled.div`
  margin: ${props => props.margin};
`

export const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px 0px 24px 16px;

  // Medium devices (tablets, less than 992px)
  @media (min-width: 991.98px) { 
    flex-direction: row;
  }
`

export const Brand = styled.h1`
  color: ${props => props.theme.color.black};
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 39px;
  text-transform: uppercase;
  display: none;

  // Medium devices (tablets, less than 992px)
  @media (min-width: 991.98px) { 
    display: block;
  }
`