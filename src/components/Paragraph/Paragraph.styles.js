import styled from 'styled-components'

export const ParagraphBase = styled.p`
  margin: ${props => props.margin};
`

export const Headline1 = styled.h1``

export const Headline2 = styled.h2``

export const Headline3 = styled.h3``

export const Headline4 = styled.h4`
  font-family: ${props => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 55px;
  color: ${props => props.theme.color.black1};
  text-align: ${props => props.textAlign};
`

export const Headline5 = styled.h5`
  font-family: ${props => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 39px;
  opacity: ${props => props.opacity};
`

export const Body1 = styled(ParagraphBase)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.005em;
  color: ${props => props.theme.color.black1};
`

export const Body2 = styled(ParagraphBase)``

export const Button = styled(ParagraphBase)``

export const Caption = styled(ParagraphBase)``
