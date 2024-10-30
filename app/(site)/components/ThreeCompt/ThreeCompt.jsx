"use client";

import { Text } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import ImageEffect from "../ImageEffect/ImageEffect";
import styles from "./styles.module.scss";
import { useRef, useEffect, useState } from "react";

export const dynamic = "force-dynamic";

const ThreeCompt = () => {
  const canvasRef = useRef();
  const textRef = useRef();

  const [cameraProps] = useState({
    position: [0, 0, 0],
    fov: 70,
    near: 0.1,
    far: 1000,
  });

  return (
    <section>
      <div className={styles.canvas__container}>
        <main className={styles.canvas}>
          <Canvas
            id={styles.canvas}
            ref={canvasRef}
            flat
            // Densité de pixels (DPR, Device Pixel Ratio)
            dpr={[1, 2]}
            gl={{ antialias: true }}
          >
            <ambientLight intensity={3} />
            <directionalLight position={[5, 10, 5]} intensity={3} />
            <ImageEffect cameraProps={cameraProps} />

            {/* Ajoutez une légère position Z et renderOrder pour que le texte soit devant */}
            <Text
              ref={textRef}
              position={[1, 1, 3]} // Position Z légèrement avancée
              fontSize={1.5}
              color="#fff"
              renderOrder={0} // Rend le texte en dernier
            >
              PALMS TREES AFFAIR
            </Text>
          </Canvas>
        </main>
      </div>
    </section>
  );
};

export default ThreeCompt;
