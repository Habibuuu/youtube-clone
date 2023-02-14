import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components"
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`
const Wrapper = styled.div`
  color: ${({ theme }) => theme.text};
`

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main>
        <Navbar/>
        <Wrapper>
          Video Card
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
          <h1>Title</h1>
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App;