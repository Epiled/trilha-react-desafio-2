import { ErrorMenssageStyled } from "./styles";

const ErrorMenssage = ({ text }: { text: string }) => {
  return (
    <ErrorMenssageStyled>
      {text}
    </ErrorMenssageStyled>
  )
}

export default ErrorMenssage;
