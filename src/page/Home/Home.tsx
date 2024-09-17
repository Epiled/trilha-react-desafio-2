import { useState } from "react";
import { BackgroundStyled, ContainerInter, Image, ListRepo } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ItemRepo from "../../components/ItemRepo";
import IRepo from "../../interface/IRepo";
import { instance } from "../../services/api";
import ImageGitHub from "../../assets/img/github.png";

const Home = () => {

  const [current, setCurrent] = useState('');
  const [repos, setRepos] = useState<IRepo[]>([]);

  const handleSearchRepo = async () => {
    const { data } = await instance.get(`/repos/${current}`);

    if (data.id) {

      const isExist = repos.find((repo) => { return repo.id === data.id })

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrent('');
        return;
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
        <Input
          placeholder="Insira um  nome de usuário"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <Button
          text="Buscar"
          onClick={handleSearchRepo}
        />
      </ContainerInter>
      <ListRepo>
        {repos && repos.map((repo) => {
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
