// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/sanity";
// // Styles
// import styles from "./styles.module.scss";

// export const dynamic = "force-dynamic";

// const CarouselBeLike = ({ minipalms }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   console.log("CarouselBeLike minipalms:", minipalms);

//   // Vérifiez si minipalms est défini et a des éléments
//   if (!minipalms || minipalms.length === 0) {
//     return <div>No items to display</div>;
//   }

//   const itemsToShow = 1; // Afficher une image par ligne
//   const totalItems = minipalms.length;
//   console.log("CarouselBeLike minipalms.length:", minipalms.length);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1
//     );
//   };

//   return (
//     <div className={styles.carouselBeLike_container}>
//       <h2>Title</h2>
//       <button className={styles.prev_button} onClick={prevSlide}>
//         &#8249;
//       </button>
//       <div className={styles.carouselBeLike}>
//         <div
//           className={styles.carouselBeLike_slide}
//           style={{
//             transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
//           }}
//         >
//           {minipalms.map((item, index) => (
//             <div
//               key={index}
//               className={styles.carouselBeLike_item}
//               style={{ flex: `0 0 calc(100% / ${itemsToShow})` }}
//             >
//               <div className={styles.inner_container}>
//                 <div className={styles.image_container}>
//                   <Link href={`/plus/${item.slug}`}>
//                     <Image
//                       src={urlFor(item.coverImages).url()}
//                       alt={`Slide ${index}`}
//                       className={styles.carouselBeLike_img}
//                       width={350}
//                       height={350}
//                       loading="lazy"
//                       placeholder="blur"
//                       blurDataURL="data:image/jpeg..."
//                       style={{ objectFit: "contain" }}
//                     />
//                   </Link>
//                 </div>
//                 <div className={styles.title_content}>
//                   <h3 className={styles.title}>{item.name}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className={styles.next_button} onClick={nextSlide}>
//         &#8250;
//       </button>
//     </div>
//   );
// };

// export default CarouselBeLike;
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const CarouselBeLike = ({ minipalms }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("CarouselBeLike minipalms:", minipalms);

  // Vérifiez si minipalms est défini et a des éléments
  if (!minipalms || minipalms.length === 0) {
    return <div>No items to display</div>;
  }

  const itemsToShow = 1; // Afficher une image par ligne
  const totalItems = minipalms.length;
  console.log("CarouselBeLike minipalms.length:", minipalms.length);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselBeLike_wrapper}>
      <h2 className={styles.carouselBeLike_title}>
        Découvrez nos palmiers nains
      </h2>
      <div className={styles.carouselBeLike_container}>
        <button className={styles.prev_button} onClick={prevSlide}>
          &#8249;
        </button>
        <div className={styles.carouselBeLike}>
          <div
            className={styles.carouselBeLike_slide}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {minipalms.map((item, index) => (
              <div
                key={index}
                className={styles.carouselBeLike_item}
                style={{ flex: `0 0 calc(100% / ${itemsToShow})` }}
              >
                <div className={styles.inner_container}>
                  <div className={styles.image_container}>
                    <Link href={`/plus/${item.slug}`}>
                      <Image
                        src={urlFor(item.coverImages).url()}
                        alt={`Slide ${index}`}
                        className={styles.carouselBeLike_img}
                        width={250}
                        height={250}
                        loading="lazy"
                        priority={false}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg..."
                        style={{ objectFit: "contain" }}
                      />
                    </Link>
                  </div>
                  <div className={styles.title_content}>
                    <h3 className={styles.title}>{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.next_button} onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default CarouselBeLike;
