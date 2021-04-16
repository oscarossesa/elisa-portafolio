import React from 'react'
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
      <S.MainNavigationButton>
        <S.DownloadText>Descargar</S.DownloadText>&nbsp;Currículum
      </S.MainNavigationButton>
    </S.MainNavigationWrapper>
  )
}

export default MainNavigation