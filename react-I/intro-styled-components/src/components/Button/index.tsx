import { ButtonContainer, TomatoButton } from "./styles";

export interface ButtonProps {
  primary?: boolean;
}

export function Button({ primary }: ButtonProps) {
  return (
    <>
      <ButtonContainer primary={primary}>Compre agora</ButtonContainer>
      <TomatoButton as="a">Promoção</TomatoButton>
    </>
  );
}
