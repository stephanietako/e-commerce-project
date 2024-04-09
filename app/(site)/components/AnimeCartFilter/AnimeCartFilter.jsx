"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import FlipCard from "../FlipCard/FlipCard";
import { fetchDataProduct } from "../../../../sanity/lib/api";
import styles from "./styles.module.css";

const AnimeCart = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const { data, error, isLoading } = useSWR("/products", fetchDataProduct);
  const searchParams = useSearchParams();

  // Fonction pour diviser un tableau en groupes de taille spécifique
  function chunkArray(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

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
      <ul className={styles.products_flipcart_list}>
        <div className={styles.__box}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            // Grouper les cartes par groupe de trois
            chunkArray(filteredProducts, 2).map((group, index) => (
              <div key={index} className={styles.cardGroup}>
                {group.map((product) => (
                  <div key={product._id} className={styles.cardsContainer}>
                    <FlipCard key={product._id} product={product} />
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </ul>
    </div>
  );
};

export default AnimeCart;
