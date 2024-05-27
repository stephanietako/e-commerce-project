import styles from "./styles.module.scss";

const Button = ({ onClick, text, className }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
