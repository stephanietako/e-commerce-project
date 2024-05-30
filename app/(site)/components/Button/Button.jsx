import styles from "./styles.module.scss";

const Button = ({ onClick, text }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
