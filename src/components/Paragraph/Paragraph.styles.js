import styled from 'styled-components'

export const ParagraphBase = styled.p`
  font-family: ${props => props.theme.typography.fontFamily};
  margin: ${props => props.margin};
  text-align: ${props => props.textAlign};
  color: ${props => props.theme.color.black1};
  opacity: ${props => props.opacity};
`

export const Headline1 = styled.h1`
  font-family: ${props => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 95px;
  line-height: 154px;
`

export const Headline2 = styled.h2`
  font-family: ${props => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 59px;
  line-height: 95px;
`

export const Headline3 = styled.h3`
  font-family: ${props => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 78px;
`

export const Headline4 = styled.h4`
  font-family: ${props => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: ${props => props.theme.color.black1};
  text-align: ${props => props.textAlign};
  letter-spacing: 0.005em;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    font-weight: 300;
    font-size: 34px;
    line-height: 55px;
  }
`

export const Headline5 = styled.h5`
  font-family: ${props => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 39px;
  opacity: ${props => props.opacity};

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    font-weight: 300;
    font-size: 34px;
    line-height: 55px;
  }
`

export const Body1 = styled(ParagraphBase)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.005em;
`

export const Body2 = styled(ParagraphBase)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.0025em;
`

export const Button = styled(ParagraphBase)`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`

export const Caption = styled(ParagraphBase)`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    font-size: 24px;
    line-height: 39px;
  }
  
`
