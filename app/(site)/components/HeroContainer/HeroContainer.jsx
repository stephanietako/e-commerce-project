"use client";

import HeroCard from "../HeroCard/HeroCard";

import vibesImage from "@/public/assets/vibes.png";
import backgroundImg from "@/public/assets/background.webp";
import styles from "./styles.module.scss";

function HeroContainer() {
  const cards = [
    {
      imageUrl: vibesImage,
      title: "Guide du cbd",
      subtitle: "Qu'est-ce que le cbd et comment l'utiliser",
      description:
        "Jellyfish are fascinating marine creatures known for their graceful and mesmerizing movements in the water. Belonging to the phylum Cnidaria, these gelatinous animals come in various shapes, sizes, and colors. One distinctive feature of jellyfish is their umbrella-shaped bell, which pulsates to propel them through the ocean.",
    },
    // { bg: backgroundImg },
  ];

  return (
    <article className={styles.article}>
      <section className={styles.__sectionWrapper}>
        {cards.map((card, index) => (
          <div key={index}>
            <HeroCard {...card} />
          </div>
        ))}
      </section>
    </article>
  );
}

export default HeroContainer;
