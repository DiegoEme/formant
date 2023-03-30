type InputProps = {
  type?: "text" | "number";
  placeholder?: string;
};

const Input = ({ type = "text", placeholder }: InputProps) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
