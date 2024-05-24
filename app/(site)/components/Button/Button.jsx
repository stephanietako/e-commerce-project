import styles from "./styles.module.scss"; // Assurez-vous d'avoir un fichier de style CSS ou SCSS correspondant

const Button = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <p>Découvrir nos produits</p>
    </button>
  );
};

export default Button;
