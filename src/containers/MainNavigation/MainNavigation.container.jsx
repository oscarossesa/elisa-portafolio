import React from 'react'
import Button from '../../components/Button/Button'
import MainNavigationItem from '../MainNavigationItem/MainNavigationItem.container'
import * as S from './MainNavigation.styles'

const MainNavigation = () => {
  return (
    <S.MainNavigationWrapper>
      <S.MainNavigationBrand>Logo</S.MainNavigationBrand>
      <S.MainNavigationItemsWrapper>
        <MainNavigationItem label="Hola" />
        <MainNavigationItem label="Proyectos" />
        <MainNavigationItem label="Hablemos" />
      </S.MainNavigationItemsWrapper>
      <Button color="custom-download">
        <S.DownloadText>Descargar</S.DownloadText>&nbsp;Currículum
      </Button>
    </S.MainNavigationWrapper>
  )
}

export default MainNavigation