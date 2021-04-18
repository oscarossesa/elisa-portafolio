import React from 'react'
import MainNavigationContainer from './containers/MainNavigation/MainNavigation.container'
import HeaderContainer from './containers/Header/Header.container'
import CommentContainer from './containers/Comment/Comment.container'
import ProjectContainer from './containers/Project/Project.container'
import ContactContainer from './containers/Contact/Contact.container'
import FooterContainer from './containers/Footer/Footer.container'
import { Container, Wrapper } from './App.styles'

const App = () => {
  return (
    <Container>
      <Wrapper>
        <MainNavigationContainer />
        <HeaderContainer />
        <CommentContainer />
        <ProjectContainer />
        <ContactContainer />
        <FooterContainer />
      </Wrapper>
    </Container>
  );
}

export default App;
