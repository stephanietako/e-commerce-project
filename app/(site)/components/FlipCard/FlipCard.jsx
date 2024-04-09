"use client";

import { useState } from "react";
// Styles
import styles from "./styles.module.css";

const FlipCard = ({ flip }) => {
  const cardFront = "Welcome to GFG.";
  const cardBack = "Computer Science Portal.";
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={styles.app}>
      <h2 className={styles.geeks}>GeeksforGeeks</h2>
      <h3>React Example for Flip Card Effect</h3>
      <div className={`${styles.flip_card} ${isFlipped ? styles.flipped : ""}`}>
        <div className={styles.flip_card_inner}>
          <div className={styles.flip_card_front}>
            <div className={styles.card_content}>{cardFront}</div>
            <button className={styles.flip_button} onClick={handleFlip}>
              Flip
            </button>
          </div>
          <div className={styles.flip_card_back}>
            <div className={styles.flip_card_back_fetch}>
              <p>COUCOU !!!!!!!</p>
            </div>

            <div className={styles.card_content}>{cardBack}</div>
            <button className={styles.flip_button} onClick={handleFlip}>
              Flip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
