import React from 'react'
import * as S from './Header.styles'
import SocialNetworkContainer from '../SocialNetwork/SocialNetwork.container'

const Header = () => {
  return (
    <S.Wrapper>
      <S.Ellipse />
      <S.Avatar>
        <S.Image src="/elisa-portafolio/assets/images/person.png" />
      </S.Avatar>
      <S.BasicInformation>
        <S.Headline3>¡Hola a todos!</S.Headline3><br />
        <S.Headline2>Soy Elisa</S.Headline2><br />
        <S.Body1>
          US.na Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.
        </S.Body1>
        <S.SocialNetwors>
          <SocialNetworkContainer />
        </S.SocialNetwors>
      </S.BasicInformation>
    </S.Wrapper>
  )
}

export default Header