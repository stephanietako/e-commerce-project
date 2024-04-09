import FlipCard from "../FlipCard/FlipCard";
// import { getDataProduct } from "@/sanity/lib/client";

// Styles
import styles from "./styles.module.css";

const FlipCardsHero = () => {
  //   const slug = params.product;
  //   const product = await getDataProduct(slug);
  return (
    <div className={styles.cardsContainer}>
      {/* <h3>{product && product.name}</h3> */}
      {/* // je veux fetch mes products à la place de l'array  */}
      {[...Array(4)].map((_, index) => (
        <FlipCard key={index} />
      ))}
    </div>
  );
};

export default FlipCardsHero;
