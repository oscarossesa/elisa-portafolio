import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #0F0A0A;
  box-sizing: border-box;
  align-items: center;
  padding: 0px;
  box-shadow: -4px 4px 14px rgba(0, 0, 0, 0.25);
  border-radius: 90px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  font-family: ${props => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 23px;
  padding: 13px 24px;
  width: ${props => props.width || '100%'};
  

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    width: ${props => props.width || 'auto'};
  }

  &:focus {
    outline: 0;
  }

  &:active {
    transform: scale(0.98);
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.color.primary};
`

export const SecondaryButton = styled(Button)``

export const DownloadButton = styled(Button)`
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
