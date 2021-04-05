import styled from 'styled-components'
import { brakepoint } from '../../utils/breakpoints/respondTo'

export const DownloadText = styled.span`
  display: none;

  ${brakepoint.sm`
    display: inline-block;
  `}
`

export const MainNavigationButton = styled.a`
  align-items: center;
  background-color: #42E2B8;
  border: 2px solid #0F0A0A;
  border-radius: 90px;
  box-shadow: -4px 4px 14px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  height: 49px;
  justify-content: center;
  line-height: 23px;
  padding: 13px 24px;
  text-align: center;
  text-transform: uppercase;
  width: auto;  
`

export const MainNavigationBrand = styled.h1`
  color: #0F0A0A;
  display: flex;
  flex-direction: row;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 39px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`

export const MainNavigationWrapper = styled.nav`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

export const MainNavigationItemsWrapper = styled.ul`
  display: none;

  ${brakepoint.sm`
    display: flex;
    flex-direction: row nowrap;
    justify-content: flex-start;
    gap: 40px;
  `}
`