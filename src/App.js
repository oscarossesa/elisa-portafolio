import React from 'react'
import MainNavigationContainer from './containers/MainNavigation/MainNavigation.container'
import { Container, Wrapper } from './App.styles'

const App = () => {
  return (
    <Container>
      <Wrapper>
        <MainNavigationContainer />
      </Wrapper>
    </Container>
  );
}

export default App;
