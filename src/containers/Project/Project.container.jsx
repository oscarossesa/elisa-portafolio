import React from 'react'
import Button from '../../components/Button/Button'
import Paragraph from '../../components/Paragraph/Paragraph'
import * as S from './Project.styles'

const Project = () => {

  const handleViewProject = () => console.log('view project')

  const handleViewCode = () => console.log('view code')

  return (
    <S.Section>
      <S.Article>
        <S.ProjectDescription reverse>
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
              <Button color="secondary" onClick={handleViewCode}>
                VER CÓDIGO
              </Button>
              <Button onClick={handleViewProject}>
                VER PROYECTO
              </Button>
            </S.ProjectActions>
          </S.ProjectInfo>
        </S.ProjectDescription>
        <S.ProjectComment>
          <S.Icon src="/elisa-portafolio/assets/images/user1.svg" width="80px" />
          <Paragraph level='headline4'>
            "Elisa ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo.
            Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses".
          </Paragraph>
          <Paragraph level='caption' opacity={0.5}>
            LEONIDAS ESTEBAN / COFUNDADOR Y CEO LEONIDASESTEBAN.COM
          </Paragraph>
        </S.ProjectComment>
      </S.Article>
      <S.Article>
        <S.ProjectDescription>
          <S.Icon src="/elisa-portafolio/assets/images/movol.png" width="100%" />
          <S.ProjectInfo>
            <S.WebContent>
              <Paragraph color="primary" level="body1">
                MARVOL
              </Paragraph>
            </S.WebContent>
            <Paragraph level="body1">
              Es el sitio oficial de Marvol Entertainment. Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvol.
            </Paragraph>
            <S.ProjectActions>
              <Button color="secondary" onClick={handleViewCode}>
                VER CÓDIGO
              </Button>
              <Button onClick={handleViewProject}>
                VER PROYECTO
              </Button>
            </S.ProjectActions>
          </S.ProjectInfo>
        </S.ProjectDescription>
        <S.ProjectComment>
          <S.Icon src="/elisa-portafolio/assets/images/user2.svg" width="80px" />
          <Paragraph level='headline4'>
            "Elisa ha superado mis expectativas desde el diseño hasta el desarrollo".
          </Paragraph>
          <Paragraph level='caption' opacity={0.5}>
            JASON LOPEZ / COFUNDADOR Y CEO MARVOL
          </Paragraph>
        </S.ProjectComment>
      </S.Article>
      <S.Article>
        <S.ProjectDescription reverse>
          <S.Icon src="/elisa-portafolio/assets/images/iphone-x.png" padding="0 120px 0 0" width="302px" />
          <S.ProjectInfo>
            <S.WebContent>
              <Paragraph color="primary" level="body1">
                NETNET
              </Paragraph>
            </S.WebContent>
            <Paragraph level="body1">
              Películas y series ilimitadas y mucho más. Disfruta donde quieras. Cancela cuando quieras.
            </Paragraph>
            <S.ProjectActions>
              <Button color="secondary" onClick={handleViewCode}>
                VER CÓDIGO
              </Button>
              <Button onClick={handleViewProject}>
                VER PROYECTO
              </Button>
            </S.ProjectActions>
          </S.ProjectInfo>
        </S.ProjectDescription>
        <S.ProjectComment>
          <S.Icon src="/elisa-portafolio/assets/images/user3.svg" width="80px" />
          <Paragraph level='headline4'>
            "Por primera vez en la historia de nuestra empresa, aparecimos en todas las plataformas en las que trabajamos".
          </Paragraph>
          <Paragraph level='caption' opacity={0.5}>
            MARCO CORTEZ / NETNET
          </Paragraph>
        </S.ProjectComment>
      </S.Article>
    </S.Section>
  )
}

export default Project