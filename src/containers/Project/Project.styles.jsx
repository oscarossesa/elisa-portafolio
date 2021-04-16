import styled from 'styled-components'

export const ProjectWrapper = styled.div`
  width: 100%;
  margin: 24px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    flex-direction: row-reverse;
    justify-content: space-between
  }
`

export const ProjectActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0px 0px;
  margin: 16px 0px;
  gap: 16px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    flex-direction: row-reverse;
  }
`

export const Icon = styled.img`
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    width: 570px;
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 449px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    /* flex-direction: row; */
    align-items: flex-start;
  }
`

export const WebContent = styled.div`
  background: ${props => props.theme.color.black};
  box-shadow: -4px 4px 0px ${props => props.theme.color.white};
  margin: 16px 0px;

  p {
    color: ${props => props.theme.color.primary};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 39px;
    padding: 0 8px;
  }
`
