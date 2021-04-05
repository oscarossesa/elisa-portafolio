import React from 'react'
import MainNavigationItem from '../MainNavigationItem/MainNavigationItem.container'
import { DownloadText, MainNavigationBrand, MainNavigationButton, MainNavigationItemsWrapper, MainNavigationWrapper } from './MainNavigation.styles'

const MainNavigation = () => {
  return (
    <MainNavigationWrapper>
      <MainNavigationBrand>Logo</MainNavigationBrand>
      <MainNavigationItemsWrapper>
        <MainNavigationItem label="Hola" />
        <MainNavigationItem label="Proyectos" />
        <MainNavigationItem label="Hablemos" />
      </MainNavigationItemsWrapper>
      <MainNavigationButton>
        <DownloadText>Descargar</DownloadText>&nbsp;Currículum
      </MainNavigationButton>
    </MainNavigationWrapper>
  )
}

export default MainNavigation