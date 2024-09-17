import styled from "styled-components"
import Button from "../Button"

export const Box = styled.li`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding: 1.5rem;
  border: .2rem solid var(--color-yellow);
  border-radius: .5rem;
  max-width: 30rem;
  flex: 1;
  background-image: radial-gradient(circle 15rem at 90% 80%, #aaaaaa 0%, #f9f9f9 100%);;

  @media screen and (min-width: 768px){
    max-width: 35rem;
  }
`

export const Nome = styled.h2`
  font-size: 2.4rem;
  color: var(--color-yellow);
  background: -webkit-linear-gradient(180deg, var(--color-yellow-3), var(--color-yellow-2));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const NomeCompleto = styled.h3`
  font-size: 1.4rem;
  color: var(--color-gray-1);
`

export const LinkRepo = styled.a`
  font-size: 1.2rem;
  margin: .5rem 0;
`

export const RemoveButton = styled(Button)`
  background: var(--color-yellow);

  &:hover {
    background: var(--color-yellow-3);
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-top: 1.5rem;
`
