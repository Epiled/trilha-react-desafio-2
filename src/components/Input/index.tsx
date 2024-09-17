import IInput from "../../interface/IInput";
import { InputStyled } from "./styles";

const Input = ({ placeholder, value, onChange }: IInput) => {

  return (
    <InputStyled
      placeholder={placeholder} type="text"
      value={value}
      onChange={onChange}
    />
  )
}

export default Input;
