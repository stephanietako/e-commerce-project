"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./styles.module.scss";

const CarouselBeLike = ({ minipalms }) => {
  const renderItem = (item, index) => (
    <div className={styles.inner_container}>
      <div className={styles.image_container}>
        <Link href={`/plus/${item.slug}`}>
          <Image
            src={urlFor(item.coverImages).url()}
            alt={`Slide ${index}`}
            className={styles.carousel_img}
            width={250}
            height={250}
            loading="lazy"
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/jpeg..."
          />
        </Link>
      </div>
      <div className={styles.title_content}>
        <Link href={`/plus/${item.slug}`}>
          <h3 className={styles.title}>{item.name}</h3>
        </Link>
      </div>
    </div>
  );

  return (
    <Carousel
      items={minipalms}
      renderItem={renderItem}
      title="Découvrez nos palmiers nains"
    />
  );
};

export default CarouselBeLike;
