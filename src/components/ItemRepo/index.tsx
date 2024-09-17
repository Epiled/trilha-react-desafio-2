import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding: 1.5rem;
  border: .2rem solid var(--lighter);
  border-radius: .5rem;
`

const Nome = styled.h2`
  font-size: 2.4rem;
`

const NomeCompleto = styled.h3`
  font-size: 1.6rem;
`

const LinkRepo = styled.a`
  font-size: 1.2rem;
`

const RemoveButton = styled.button`
`

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

const ItemRepo = () => {

  return (
    <Box>
      <Nome>Olá</Nome>
      <NomeCompleto>Olá Mundo</NomeCompleto>
      <Options>
        <LinkRepo>Ver Repositório</LinkRepo>
        <RemoveButton>Remover</RemoveButton>
      </Options>
    </Box>
  )
}

export default ItemRepo;