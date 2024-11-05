"use client";

import { Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ImageEffect from "../ImageEffect/ImageEffect";
import styles from "./styles.module.scss";
import { useRef } from "react";

const ThreeCompt = () => {
  const canvasRef = useRef();

  const cameraProps = {
    position: [0, 0, 0],
    fov: 75,
    near: 0.1,
    far: 1000,
  };

  return (
    <section>
      <div className={styles.canvas__container}>
        <main className={styles.canvas}>
          <Canvas
            id={styles.canvas}
            ref={canvasRef}
            flat
            dpr={[1, 2]}
            gl={{ antialias: true }}
            camera={cameraProps}
          >
            <ambientLight intensity={1} />
            <directionalLight position={[5, 10, 5]} intensity={1} />
            <ImageEffect cameraProps={cameraProps} />

            <Text
              position={[1, 1, 3]} // Position Z légèrement avancée
              fontSize={1.5}
              color="#fff"
              renderOrder={0}
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
