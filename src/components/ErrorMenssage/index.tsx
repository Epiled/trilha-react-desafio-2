import styled from "styled-components";

const ErrorMenssageStyled = styled.span`
  position: absolute;
  left: 0;
  top: calc(100% + .5rem);

  color: var(--error);
  font-size: 1.4rem;
  font-weight: bold;
`

const ErrorMenssage = ({ text }: { text: string }) => {
  return (
    <ErrorMenssageStyled>
      {text}
    </ErrorMenssageStyled>
  )
}

export default ErrorMenssage;
