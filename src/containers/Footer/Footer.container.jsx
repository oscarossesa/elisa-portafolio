import React from 'react'
import SocialNetwork from '../SocialNetwork/SocialNetwork.container'
import Paragraph from '../../components/Paragraph/Paragraph'
import * as S from './Footer.styles'

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <SocialNetwork />
      </S.Content>
      <S.FooterSection>
        <Paragraph level="body1">
          {/* FIXME: remove &nbsp; when the breakpoint whenever mobile */}
          Hecho con <S.Icon src="/elisa-portafolio/assets/images/love.svg" /> de Elisa.&nbsp;
        </Paragraph>
        <Paragraph level="body1" textAlign="center">
          Copyright 2021 - Todos los derechos reservados.
        </Paragraph>
      </S.FooterSection>
      <S.Brand>Logo</S.Brand>
    </S.Wrapper>
  )
}

export default Footer