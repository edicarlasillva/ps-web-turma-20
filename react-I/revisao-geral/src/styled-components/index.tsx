import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${({ primary }) => (primary ? "blue" : "pink")};
`;

export function App() {
  return (
    <Container>
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton>Normal Button</StyledButton>
    </Container>
  );
}
