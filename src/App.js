import React from 'react'
import MainNavigationContainer from './containers/MainNavigation/MainNavigation.container'
import Header from './containers/Header/Header.container'
import { Container, Wrapper } from './App.styles'

const App = () => {
  return (
    <Container>
      <Wrapper>
        <MainNavigationContainer />
        <Header />
      </Wrapper>
    </Container>
  );
}

export default App;
