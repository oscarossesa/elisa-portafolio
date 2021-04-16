import React from 'react'
import MainNavigationContainer from './containers/MainNavigation/MainNavigation.container'
import HeaderContainer from './containers/Header/Header.container'
import CommentContainer from './containers/Comment/Comment.container'
import ProjectContainer from './containers/Project/Project.container'
import { Container, Wrapper } from './App.styles'

const App = () => {
  return (
    <Container>
      <Wrapper>
        <MainNavigationContainer />
        <HeaderContainer />
        <CommentContainer />
        <ProjectContainer />
      </Wrapper>
    </Container>
  );
}

export default App;
