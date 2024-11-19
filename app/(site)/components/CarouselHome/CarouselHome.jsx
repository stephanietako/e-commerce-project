"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./styles.module.scss";

const CarouselHome = ({ plusproduct }) => {
  const renderItem = (item, index) => (
    <div className={styles.inner_container}>
      <div className={styles.image_container}>
        <Link href={`/plusProducts/${item.slug}`}>
          <Image
            src={urlFor(item.coverImages).url()}
            alt={item.name}
            className={styles.carousel_img}
            width={550}
            height={450}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg..."
          />
        </Link>
      </div>
      <div className={styles.title_content}>
        <Link href={`/plusProducts/${item.slug}`}>
          <p className={styles.title}>{item.name}</p>
        </Link>
      </div>
    </div>
  );

  return (
    <Carousel
      items={plusproduct}
      renderItem={renderItem}
      title="Découvrez nos produits plus"
    />
  );
};

export default CarouselHome;
