function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default Button;
