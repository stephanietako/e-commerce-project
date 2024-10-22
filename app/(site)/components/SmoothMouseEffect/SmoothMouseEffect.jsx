"use client";

import { useState } from "react";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";

const SmoothMouseEffect = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setTransform({ x, y });
  };

  return (
    <div
      className={styles.smoothTransition}
      onMouseMove={handleMouseMove}
      style={{
        transform: `translate(${transform.x * 50}px, ${transform.y * 50}px)`,
      }}
    ></div>
  );
};

export default SmoothMouseEffect;
