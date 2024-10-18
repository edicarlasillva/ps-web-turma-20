import { Outlet } from "react-router-dom";

import { Container, Wrapper } from "./styles";

export function DefaultLayout() {
  return (
    <Wrapper>
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
}
