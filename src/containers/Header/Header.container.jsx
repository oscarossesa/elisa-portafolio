import React from 'react'

import {
  Avatar,
  BasicInformation,
  Body1,
  Ellipse,
  Heading,
  Headline2,
  Headline3,
  Icon,
  Image,
  SocialNetworks
} from './Header.styles'

const Header = () => {
  return (
    <Heading>
      <Ellipse />
      <Avatar>
        <Image src="/elisa-portafolio/assets/images/person.png" />
      </Avatar>
      <BasicInformation>
        <Headline3>¡Hola a todos!</Headline3><br />
        <Headline2>Soy Elisa</Headline2><br />
        <Body1>
          Una Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.
        </Body1>
        <SocialNetworks>
          <Icon src="/elisa-portafolio/assets/images/phone.svg" />
          <Icon src="/elisa-portafolio/assets/images/email.svg" />
          <Icon src="/elisa-portafolio/assets/images/instagram.svg" />
          <Icon src="/elisa-portafolio/assets/images/twitter.svg" />
        </SocialNetworks>
      </BasicInformation>
    </Heading>
  )
}

export default Header