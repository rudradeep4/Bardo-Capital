import React from 'react';
import "typeface-courier-prime"
import { 
  ChakraProvider,
} from '@chakra-ui/react';
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route
} from 'react-router-dom'
import About from './routes/About';
import AuthPage from './routes/AuthPage';
import theme from './theme';
import LandingPage from './routes/LandingPage';
import { Global, css } from '@emotion/react'


function App() {

  const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
  }`

  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <ReactRouter>         
          <Switch>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/auth">
                  <AuthPage p={"/auth"}/>
              </Route>
              <Route path="/register">
                <AuthPage p={"/register"}/>
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
          </Switch>
      </ReactRouter>
    </ChakraProvider>
  );
}

export default App
