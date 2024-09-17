import IButton from "../../interface/IButton";
import { ButtonStyled } from "./styles";

const Button = ({ text, className, onClick }: IButton) => {

  return (
    <ButtonStyled
      className={className}
      onClick={onClick}
    >
      {text}
    </ButtonStyled>
  )
}

export default Button;
