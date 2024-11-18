// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/sanity";
// import styles from "./styles.module.scss";

// const CarouselHome = ({ plusproduct }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsToShow = 1;
//   const totalItems = plusproduct.length;

//   const nextSlide = () => {
//     // Function to go to the next slide
//     setCurrentIndex((prevIndex) =>
//       prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1
//     ); // Loop back to the first slide if at the last slide
//   };

//   const prevSlide = () => {
//     // Function to go to the previous slide
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1
//     ); // Loop back to the last slide if at the first slide
//   };

//   const goToSlide = (index) => {
//     // Function to go to a specific slide
//     setCurrentIndex(index); // Set current index to the specified index
//   };

//   const handleTouchStart = (e) => {
//     // Function to handle touch start event for swiping
//     const touchStartX = e.touches[0].clientX; // Get the starting touch position
//     const touchMoveHandler = (e) => {
//       // Handler for touch move event
//       const touchEndX = e.changedTouches[0].clientX; // Get the ending touch position
//       if (touchStartX - touchEndX > 50) {
//         nextSlide(); // Go to next slide if swipe left
//       }
//       if (touchStartX - touchEndX < -50) {
//         prevSlide();
//       }
//       e.currentTarget.removeEventListener("touchmove", touchMoveHandler); // Remove touch move handler after swipe
//     };
//     e.currentTarget.addEventListener("touchmove", touchMoveHandler); // Add touch move handler
//   };

//   return (
//     <div className={styles.carousel_wrapper}>
//       <div className={styles.carousel_container}>
//         <button className={styles.prev_button} onClick={prevSlide}>
//           &#8249;
//         </button>
//         <div className={styles.carousel} onTouchStart={handleTouchStart}>
//           <div
//             className={styles.carousel_slide}
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {plusproduct.map((item, index) => (
//               <div
//                 key={index}
//                 className={styles.carousel_item}
//                 style={{ flex: `0 0 100%` }}
//               >
//                 {/* Each carousel item */}
//                 <div className={styles.inner_container}>
//                   <div className={styles.image_container}>
//                     <Link href={`/plusProducts/${item.slug}`}>
//                       <Image
//                         src={urlFor(item.coverImages).url()}
//                         alt={item.name}
//                         className={styles.carousel_img}
//                         width={450}
//                         height={450}
//                         loading="lazy"
//                         placeholder="blur"
//                         blurDataURL="data:image/jpeg..."
//                         style={{ objectFit: "contain" }}
//                       />
//                     </Link>
//                   </div>
//                   {/* Image container with link */}
//                   <Link href={`/plusProducts/${item.slug}`}>
//                     <h3 className={styles.title}>{item.name} </h3>
//                   </Link>
//                   {/* Title container */}
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* Pagination indicators */}
//           <div className={styles.pagination}>
//             {plusproduct.map((_, index) => (
//               <button
//                 key={index}
//                 className={`${styles.dot} ${
//                   currentIndex === index ? styles.active : ""
//                 }`}
//                 onClick={() => goToSlide(index)}
//               />
//             ))}
//           </div>
//         </div>
//         <button className={styles.next_button} onClick={nextSlide}>
//           &#8250;
//         </button>
//         {/* Next button */}
//       </div>
//     </div>
//   );
// };

// export default CarouselHome;
/////////////
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
            width={450}
            height={450}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg..."
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
      <Link href={`/plusProducts/${item.slug}`}>
        <h3 className={styles.title}>{item.name}ici !!!!!!</h3>
      </Link>
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
