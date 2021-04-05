import styled from 'styled-components'

export const Link = styled.a`
  color: #0F0A0A;
  text-decoration: none;
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: bold;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 1.25px;
  line-height: 23px;  
  opacity: 0.5;
  text-transform: uppercase;

  &::active {
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
`

export const NavigationItem = styled.li`  
  list-style: none;
`
