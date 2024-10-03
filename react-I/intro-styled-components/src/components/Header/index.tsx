import { Button } from "../Button";

import { Title, Wrapper } from "./styles";

export function Header() {
  return (
    <Wrapper>
      <Title>Hello, Styled Components!</Title>
      <Button primary />
    </Wrapper>
  );
}
