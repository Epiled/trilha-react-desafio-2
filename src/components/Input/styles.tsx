import styled from "styled-components";

export const InputStyled = styled.input`
  border-radius: .5rem;
  border: .2rem solid var(--lighter);
  background: transparent;
  padding: 1rem;
  font-size: 2rem;
  color: var(--lighter);
  background: var(--color-yellow-trans);

  &::placeholder {
    color: var(--lighter);
  }
`
