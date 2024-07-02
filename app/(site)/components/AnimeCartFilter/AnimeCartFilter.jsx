"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import useSWR from "swr";
import FlipCard from "../FlipCard/FlipCard";
import { fetchDataProduct } from "@/sanity/lib/apis";
import canaIcon from "@/public/assets/canaleaf.png";
// Styles
import styles from "./styles.module.scss";

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
    <section className={styles.flipcart}>
      <div className={styles.container_filter_flipcart}>
        <div className={styles.display_animecartfilter}>
          <header className={styles.title__bloc}>
            <div className={styles.title__content}>
              <h1 className={styles.title}>
                <span className={styles.icon}>
                  <Image
                    src={canaIcon}
                    alt="les produits de la boutiques vibes cbd"
                    className="cana_icon__img"
                    width={50}
                    height={70}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </span>
                Découvrez nos produits
              </h1>
            </div>
          </header>

          <div className={styles.display_infos_animecart}>
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
      </div>
    </section>
  );
};

export default AnimeCartFilter;
