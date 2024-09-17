import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";

const BackgroundStyled = styled.div`
  background: var(--bg);
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100vh;
  padding: 5rem;
`

const ContainerInter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const Home = () => {

  return (
    <BackgroundStyled>
      <ContainerInter>
        <Input placeholder="Insira um  nome de usuário" />
        <Button text="Buscar" />
      </ContainerInter>
      <ItemRepo />
    </BackgroundStyled>
  )
}

export default Home;
