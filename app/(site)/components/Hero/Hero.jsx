"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import backgroundImg from "@/public/assets/canaleafimg.jpg";
import Button from "../Button/Button";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const Hero = () => {
  const router = useRouter();
  return (
    <div className={styles.heroWrapper}>
      <Image
        src={backgroundImg}
        alt="boutique Vibes Saint-tropez"
        className={styles.heroImage}
        loading="lazy"
        fill={true}
        placeholder="blur"
      />
      <div className={styles.heroContent}>
        <h1>VIBES CBD SHOP</h1>
        <h2>FRENCH EXPERT CANNABIS</h2>

        <Button
          text="DÉCOUVRIR NOS PRODUITS"
          onClick={() => router.push("#all_products")}
        />
      </div>
    </div>
  );
};

export default Hero;
