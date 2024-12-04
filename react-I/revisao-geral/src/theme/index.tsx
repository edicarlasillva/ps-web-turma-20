import styled, { ThemeProvider } from "styled-components";

import theme from "./theme";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StyledButton>Primary Button</StyledButton>
      </Container>
    </ThemeProvider>
  );
}
