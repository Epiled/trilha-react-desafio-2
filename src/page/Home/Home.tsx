import { useState } from "react";
import { BackgroundStyled, ContainerInput, ContainerInter, Image, ListRepo } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ItemRepo from "../../components/ItemRepo";
import ErrorMenssage from "../../components/ErrorMenssage";

import IRepo from "../../interface/IRepo";

import { AxiosError } from "axios";

import { fetchRepo } from "../../services/api";

import ImageGitHub from "../../assets/img/github.webp";

const Home = () => {

  const [current, setCurrent] = useState<string>('');
  const [repos, setRepos] = useState<IRepo[]>([]);

  const [errorMensage, setErrorMenssage] = useState<string>('')

  const handleSearchRepo = async () => {

    if (!current.trim()) {
      setErrorMenssage("Por favor, insira um nome de repositório válido.");
      return;
    }

    try {
      setErrorMenssage(''); // Limpa a mensagem antes de iniciar
      const data = await fetchRepo(current);

      if (!data.id) throw new Error("Repositório informado não encontrado!");

      if (repos.some((repo) => repo.id === data.id)) {
        throw new Error("Repositório já adicionado na lista");
      }

      setRepos((prev) => [...prev, data]);
      setCurrent('');

    } catch (error) {
      if (error instanceof AxiosError) {
        // Tratar erros específicos das requisiçãos Axios
        const errorMessage = error.response?.status === 404 ? "Repositório informado não encontrado!" : "Erro ao buscar o repositório na API.";
        setErrorMenssage(errorMessage);

      } else if (error instanceof Error) {
        // Tratar erros lançados manualmente, como "Repositório já adicionado"
        setErrorMenssage(error.message);

      } else {
        // Tratamento para outros erros inesperados
        setErrorMenssage("Ocorreu um erro inesperado. Tente novamente.");
      }
    }
  }

  const handleRemoveRepo = (id: number) => {
    const filtered = repos.filter(repo => repo.id !== id);
    setRepos(filtered);
  }

  return (
    <BackgroundStyled>
      <ContainerInter>
        <Image src={ImageGitHub} width="2555" height="2561" alt="Logo do GitHub" />
        <ContainerInput>
          <Input
            placeholder="Ex: Epiled/trilha-react-desafio-2"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          />
          <ErrorMenssage text={errorMensage} />
        </ContainerInput>
        <Button
          text="Buscar"
          onClick={handleSearchRepo}
        />
      </ContainerInter>
      <ListRepo>
        {repos.map((repo) => {
          return <ItemRepo
            key={repo.id}
            handleRemoveRepo={handleRemoveRepo}
            {...repo}
          />
        })}
      </ListRepo>
    </BackgroundStyled>
  )
}

export default Home;
