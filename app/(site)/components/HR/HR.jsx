// Styles
import styles from "./styles.module.css";

// Définition du composant HR
const HR = (props) => {
  const { className } = props;

  // Fusion des classes avec les classes CSS spécifiées
  return <hr className={[className, styles.hr].filter(Boolean).join(" ")} />;
};

// Exportation du composant HR
module.exports = HR;
