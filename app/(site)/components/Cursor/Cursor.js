"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import cursorImage from "/public/assets/icons8-palmier-black.png"; // Assurez-vous que le chemin est correct

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  return (
    <div
      className="cursor"
      style={{
        left: mousePosition.x - 10 + "px", // Adjust offset as needed
        top: mousePosition.y - 10 + "px", // Adjust offset as needed
        position: "absolute",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <Image
        src={cursorImage}
        alt="Custom Cursor"
        width={20}
        height={20}
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};

export default Cursor;
