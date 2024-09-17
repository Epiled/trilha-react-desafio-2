import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: var(--lighter);
  border-radius: .5rem;
  border: 0;
  font-weight: 600;
  padding: 1.5rem 5rem;
  text-transform: uppercase;
  transition: all .2s;

  &:hover {
    background: var(--color-yellow);
    transform: scale(1.1) rotate(2deg);
    cursor: pointer;
  }
`
