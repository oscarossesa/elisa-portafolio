import styled from 'styled-components'

export const Section = styled.section``

export const Article = styled.article``

export const ProjectDescription = styled.div`
  width: 100%;
  margin: 24px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 40px 0;

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    justify-content: space-between;
    padding: 80px 0;
  }
`

export const ProjectComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border: 3px rgba(255, 255, 255, 0.2);
  border-radius: 24px;  
  border-style: outset none none outset;
  margin: 40px 0 80px;
  gap: 24px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    padding: 80px;

    h4 {
      text-align: center;
    }
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
  width: ${props => props.width || '100%'};

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: ${props => props.width || '100%'};
    max-width: ${props => props.maxWidth};
    padding: ${props => props.padding};
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 449px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
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

export const ButtonBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`