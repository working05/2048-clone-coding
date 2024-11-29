import styles from '../styles/Button.module.css';

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default Button;
