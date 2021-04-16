import styled from 'styled-components'

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  max-width: 900px;
  gap: 24px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    padding: 100px 0;
  }
`

export const Here = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 39px;
  text-align: center;
  color: ${props => props.theme.color.black};
`

export const Icon = styled.img``

export const Me = styled.p`
  font-family: ${props => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: 300;
  font-size: 34px;
  line-height: 55px;
  text-align: center;
  color: ${props => props.theme.color.black1};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`
