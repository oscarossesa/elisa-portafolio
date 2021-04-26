import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(135deg, #FAD7A1 0%, #E96D71 100%);
`

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1110px;
  padding: 16px 16px;

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { 
    padding: 25px 0;
  } 
`

export const Ellipse = styled.div`
  display: none;
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  background: ${props => props.backgroundGradient};
  opacity: ${props => props.opacity};

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    display: block;
  }
`