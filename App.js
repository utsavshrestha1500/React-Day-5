import React from 'react';
/* import { StyledContainer } from "styled-components"; */
import { HeaderStyle } from './components/style/HeaderStyle';
import { Globals } from './components/style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { MyTheme } from "./Theme";
import { Button } from "./components/style/ButtonStyle";



const App = () => {
  return (
    <>
    <ThemeProvider theme = {MyTheme}>
    <Globals />
      <HeaderStyle> Hello There </HeaderStyle>
    <h1>
      React Js
      <p>Java</p>
    </h1>
    <Button> Click Me</Button>
    </ThemeProvider>
    </>
  );
};

export default App;