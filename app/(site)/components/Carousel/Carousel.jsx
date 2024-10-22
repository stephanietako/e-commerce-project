"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
import styles from "./styles.module.scss";

const Carousel = ({ plusproduct }) => {
  // Define the Carousel component, which takes plusproduct as a prop
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current slide index
  const itemsToShow = 1; // Number of items to show in the carousel
  const totalItems = plusproduct.length; // Total number of items in the carousel
  const autoPlayRef = useRef(); // useRef hook to keep track of the autoplay function

  // useEffect(() => {
  //   // useEffect to set the autoplay function
  //   autoPlayRef.current = nextSlide; // Set the autoplay reference to the nextSlide function
  // });

  // useEffect(() => {
  //   //useEffect to handle the autoplay interval
  //   const play = () => {
  //     autoPlayRef.current(); // Call the autoplay function
  //   };
  //   const interval = setInterval(play, 3000); // Set interval to change slide every 3 seconds
  //   return () => clearInterval(interval); // Clear interval on component unmount
  // }, []);

  const nextSlide = () => {
    // Function to go to the next slide
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1
    ); // Loop back to the first slide if at the last slide
  };

  const prevSlide = () => {
    // Function to go to the previous slide
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1
    ); // Loop back to the last slide if at the first slide
  };

  const goToSlide = (index) => {
    // Function to go to a specific slide
    setCurrentIndex(index); // Set current index to the specified index
  };

  const handleTouchStart = (e) => {
    // Function to handle touch start event for swiping
    const touchStartX = e.touches[0].clientX; // Get the starting touch position
    const touchMoveHandler = (e) => {
      // Handler for touch move event
      const touchEndX = e.changedTouches[0].clientX; // Get the ending touch position
      if (touchStartX - touchEndX > 50) {
        nextSlide(); // Go to next slide if swipe left
      }
      if (touchStartX - touchEndX < -50) {
        prevSlide(); // Go to previous slide if swipe right
      }
      e.currentTarget.removeEventListener("touchmove", touchMoveHandler); // Remove touch move handler after swipe
    };
    e.currentTarget.addEventListener("touchmove", touchMoveHandler); // Add touch move handler
  };

  return (
    <div className={styles.carousel_container}>
      {/* Carousel container */}
      <button className={styles.prev_button} onClick={prevSlide}>
        &#8249;
      </button>
      {/* Previous button */}
      <div className={styles.carousel} onTouchStart={handleTouchStart}>
        {/* Carousel slide container with touch start handler */}
        <div
          className={styles.carousel_slide}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {/* Slide transformation based on current index */}
          {plusproduct.map((item, index) => (
            <div
              key={index}
              className={styles.carousel_item}
              style={{ flex: `0 0 100%` }}
            >
              {/* Each carousel item */}
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
                {/* Image container with link */}
                <div className={styles.title_content}>
                  <h3 className={styles.title}>{item.name}</h3>
                </div>
                {/* Title container */}
              </div>
            </div>
          ))}
        </div>
        {/* Pagination indicators */}
        <div className={styles.pagination}>
          {plusproduct.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      <button className={styles.next_button} onClick={nextSlide}>
        &#8250;
      </button>
      {/* Next button */}
    </div>
  );
};

export default Carousel;
