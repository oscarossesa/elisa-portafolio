import React from 'react'
import MainNavigationContainer from './containers/MainNavigation/MainNavigation.container'
import HeaderContainer from './containers/Header/Header.container'
import CommentContainer from './containers/Comment/Comment.container'
import ProjectContainer from './containers/Project/Project.container'
import ContactContainer from './containers/Contact/Contact.container'
import FooterContainer from './containers/Footer/Footer.container'
import * as S from './App.styles'

const App = () => {
  return (
    <S.Container>
      <S.Ellipse
        backgroundGradient="radial-gradient(50% 50% at 50% 50%, rgba(191, 53, 142, 0.5) 0%, rgba(191, 53, 142, 0) 100%)"
        left="-180px"
        top="68px"
        width="400px"
        height="400px"
      />
      <S.Ellipse
        backgroundGradient="radial-gradient(155% 155% at 50% 50%, rgba(40, 234, 232, 0.4) 0%, rgba(40, 234, 232, 0) 28.86%)"
        left="377px"
        top="420px"
        width="400px"
        height="400px"
      />
      <S.Ellipse
        backgroundGradient="radial-gradient(155% 155% at 50% 50%, rgba(40, 234, 232, 0.4) 0%, rgba(40, 234, 232, 0) 28.86%)"
        left="966px"
        top="2195px"
        width="400px"
        height="400px"
      />
      <S.Ellipse
        backgroundGradient="radial-gradient(155% 155% at 50% 50%, rgba(40, 234, 232, 0.4) 0%, rgba(40, 234, 232, 0) 28.86%)"
        left="-35px"
        top="4780px"
        width="400px"
        height="400px"
      />
      <S.Wrapper>
        <MainNavigationContainer />
        <HeaderContainer />
        <CommentContainer />
        <ProjectContainer />
        <ContactContainer />
        <FooterContainer />
      </S.Wrapper>
    </S.Container>
  );
}

export default App;
