import React from 'react'
import * as S from './Comment.styles'

const Comment = () => {
  return (
    <S.CommentWrapper>
      <S.Content>
        <S.Me>
          A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles
        </S.Me>
        <S.Here>
          Aquí hay algunos que me gustaría compartir.
        </S.Here>
        <S.Icon src="/elisa-portafolio/assets/images/arrow-down.svg" />
      </S.Content>
    </S.CommentWrapper>
  )
}

export default Comment