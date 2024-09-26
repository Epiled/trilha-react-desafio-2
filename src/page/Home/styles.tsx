import styled from "styled-components"
import bgImage from "../../assets/img/bg.webp";

export const BackgroundStyled = styled.div`
  background-image: 
  linear-gradient(190deg, var(--bg-a), var(--bg2-a)),
  url("${bgImage}"),
  linear-gradient(var(--bg), var(--bg));

  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100vh;
  padding: 2.5rem;

  @media screen and (min-width: 768px){
    padding: 5rem;
  }
`

export const Image = styled.img`
  width: 10rem;
  height: auto;
  margin: 0 auto;
`

export const ContainerInter = styled.header`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 40rem;
`

export const ContainerInput = styled.div`
  position: relative;
`

export const ListRepo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
  gap: 2rem;
`
