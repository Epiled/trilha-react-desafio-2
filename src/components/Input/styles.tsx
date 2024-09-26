import styled from "styled-components";

export const InputStyled = styled.input`
  border-radius: .5rem;
  border: .2rem solid var(--lighter);
  padding: 1rem;
  font-size: 2rem;
  color: var(--lighter);
  background: var(--color-yellow-trans);
  width: 100%;
  backdrop-filter: blur(.2rem);

  &::placeholder {
    color: var(--bg-light);
  }

  @media screen and (max-width: 370px) {
    font-size: 1.6rem;
  }
`
