import IRepo from "../../interface/IRepo";
import { Box, LinkRepo, Nome, NomeCompleto, Options, RemoveButton } from "./styles";

type ItemRepoProps = IRepo & {
  handleRemoveRepo: (id: number) => void; // Defina o tipo correto para o id
};

const ItemRepo = ({ id, name, full_name, html_url, handleRemoveRepo }: ItemRepoProps) => {

  return (
    <Box>
      <Nome>{name}</Nome>
      <NomeCompleto>{full_name}</NomeCompleto>
      <Options>
        <LinkRepo
          href={html_url}
          target="_blank">
          Ver Repositório
        </LinkRepo>
        <RemoveButton
          text="Remover"
          onClick={() => handleRemoveRepo(id)}
        />
      </Options>
    </Box>
  )
}

export default ItemRepo;
