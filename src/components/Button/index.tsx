import styled from "styled-components";

const ButtonStyled = styled.button`
  background: var(--lighter);
  border-radius: .5rem;
  border: 0;
  font-weight: 600;
  padding: 1.5rem 5rem;
  text-transform: uppercase;
`

const Button = ({text}: {text: string}) => {

  return (
    <ButtonStyled>
      {text}
    </ButtonStyled>
  )
}

export default Button;