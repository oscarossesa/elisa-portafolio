import styled from 'styled-components'

export const Avatar = styled.div``

export const BasicInformation = styled.div`
  max-width: 451px;
  max-height: 302px;
`

export const Ellipse = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  left: -180px;
  top: 68px;
  background: radial-gradient(50% 50% at 50% 50%, rgba(191, 53, 142, 0.5) 0%, rgba(191, 53, 142, 0) 100%);

`

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* margin: 0 auto; */
  max-width: 1110px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    flex-direction: row-reverse;
    justify-content: row;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { 
    max-width: 1110px;
   } 
`

export const Headline2 = styled.label`
  color: ${props => props.theme.color.black1};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 59px;
  font-style: normal;
  line-height: 95px;
  font-weight: bold;
  letter-spacing: -0.005em;
`

export const Headline3 = styled.label`
  color: ${props => props.theme.color.black1};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.015em;
`

export const Body1 = styled.label`
  color: ${props => props.theme.color.black};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.005em;
  line-height: 26px;
  margin: 16px 0px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Icon = styled.img``

export const Image = styled.img`
  width: 100%;

  // Medium devices (tablets, less than 992px)
  @media (min-width: 991.98px) { 
    width: 500px;
  }
`

export const SocialNetwors = styled.div`
  margin: 16px 0px;
`