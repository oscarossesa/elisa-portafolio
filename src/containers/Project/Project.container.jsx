import React from 'react'
import Button from '../../components/Button/Button'
import Paragraph from '../../components/Paragraph/Paragraph'
import * as S from './Project.styles'

const Project = () => {

  const handleViewProject = () => console.log('view project')

  const handleViewCode = () => console.log('view code')

  return (
    <S.ProjectWrapper>
      <S.Icon src="/elisa-portafolio/assets/images/laptop.png" />
      <S.ProjectInfo>
        <S.WebContent>
          <Paragraph color="primary" level="body1">
            leonidasesteban.com
          </Paragraph>
        </S.WebContent>
        <Paragraph level="body1">
          Accede a más de 120 proyectos que te
          ayudarán a mejorar tus habilidades como
          desarrollador Front-End.
        </Paragraph>
        <S.ProjectActions>
          <Button width="100%" color="secondary" onClick={handleViewCode}>VER CÓDIGO</Button>
          <Button width="100%" onClick={handleViewProject}>VER PROYECTO</Button>
        </S.ProjectActions>
      </S.ProjectInfo>
    </S.ProjectWrapper>
  )
}

export default Project