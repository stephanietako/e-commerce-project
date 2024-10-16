"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import scrollIcon from "@/public/assets/scrollIcon.png";

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 114) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <Image src={scrollIcon} alt="Scroll to top" width={25} height={30} />
    </button>
  );
};

export default ScrollToTop;
