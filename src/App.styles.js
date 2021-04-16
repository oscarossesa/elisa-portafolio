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
