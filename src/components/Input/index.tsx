import styled from "styled-components";

const InputStyled = styled.input`
  border-radius: .5rem;
  border: .2rem solid var(--lighter);
  background: transparent;
  padding: 1rem;
  font-size: 2rem;
  color: var(--lighter);
`

const Input = ({placeholder}: {placeholder: string}) => {

  return (
    <>
      <InputStyled placeholder={placeholder} type="text" />
    </>
  )
}

export default Input;