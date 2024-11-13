import styles from "./styles.module.scss";

const Button = ({ onClick, text }) => {
  return (
    <button className={styles.button} onClick={onClick} id={styles.button_bg}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
