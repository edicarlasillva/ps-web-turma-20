import styled from "styled-components";

import { ButtonProps } from ".";

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${(props) => props.primary ? '#BF4F74' : '#FFF'};
  color: ${(props) => props.primary ? '#FFF' : '#BF4F74'};
  font-size: 1rem;
  border: 0;
  border-radius: 2px;
  padding: 0.5rem 1rem;
`

export const Button = styled.button`
  background-color: '#BF4F74' ;
  color: '#FFF';
  font-size: 1rem;
  border: 0;
  border-radius: 2px;
  padding: 0.5rem 1rem;
`

export const TomatoButton = styled(Button)`
  color: tomato;
  border: 2px solid tomato;
`