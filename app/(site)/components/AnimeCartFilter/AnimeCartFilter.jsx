"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import useSWR from "swr";
import FlipCard from "../FlipCard/FlipCard";
import { fetchDataProduct } from "@/sanity/lib/api";
import canaIcon from "@/public/assets/canaleaf.png";
// Styles
import styles from "./styles.module.css";

const AnimeCartFilter = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const { data, error, isLoading } = useSWR("/products", fetchDataProduct);
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  // Filtrage des produits
  const filterProductsCartFlip = (products) => {
    return products.filter((el) => el.name.includes(searchQuery));
  };

  const filteredProducts = filterProductsCartFlip(data || []);

  return (
    <div className={styles.container_filter_flipcart}>
      <div className={styles.display_infos_animecart}>
        <header className={styles.title}>
          <h1>
            Découvrez nos produits
            <span className={styles.icon}>
              {" "}
              <Image
                src={canaIcon}
                alt="les produits de la boutiques vibes cbd"
                className="cana_icon__img"
                width={100}
                height={0}
                style={{
                  objectFit: "cover",
                }}
              />
            </span>
          </h1>
        </header>

        <ul className={styles.products_flipcart_list}>
          <div className={styles.__box}>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              // Affichage des cartes FlipCard sans la fonction chunkArray
              filteredProducts.map((product) => (
                <div key={product._id} className={styles.cardsContainer}>
                  <FlipCard key={product._id} product={product} />
                </div>
              ))
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AnimeCartFilter;