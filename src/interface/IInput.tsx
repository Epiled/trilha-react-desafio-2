interface IInput {
  placeholder: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default IInput;
