import styled, { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/gobal"

const StyledButton = styled.button`
  background-color: ${({theme}) => theme.colors.primary};
  color: #fff;
  outline: none;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: .2rem;
  cursor: pointer;
  transition: all .2s ease;

  &:hover{
   background-color: #000;
  }
`

function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <StyledButton>Test</StyledButton>
    <GlobalStyle/>
   </ThemeProvider>
  )
}

export default App
