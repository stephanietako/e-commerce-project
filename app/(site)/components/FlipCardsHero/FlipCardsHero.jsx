import FlipCard from "../FlipCard/FlipCard";
// Styles
import styles from "./styles.module.css";

const FlipCardsHero = () => {
  return (
    <div className={styles.cardsContainer}>
      {[...Array(4)].map((_, index) => (
        <FlipCard key={index} />
      ))}
    </div>
  );
};

export default FlipCardsHero;
