"use client";
import { Text } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ImageEffect from "../ImageEffect/ImageEffect";
import styles from "./styles.module.scss";
import { useRef, useEffect } from "react";

export const dynamic = "force-dynamic";

const ThreeCompt = () => {
  const canvasRef = useRef();
  const textRef = useRef();

  const cameraProps = {
    position: [0, 1, 5],
    fov: 70,
    near: 0.1,
    far: 1000,
  };

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.invalidateFrameloop = true;
    }
  }, []);

  // useEffect(() => {
  //   const handleMouseWheel = (event) => {
  //     // Accéder à la caméra à partir de la référence
  //     if (cameraRef.current) {
  //       cameraRef.current.position.z += event.deltaY / 500;
  //     }
  //   };

  //   // Ajouter l'événement d'écouteur
  //   document.addEventListener("mousewheel", handleMouseWheel);

  //   // Nettoyer l'événement lors du démontage
  //   return () => {
  //     document.removeEventListener("mousewheel", handleMouseWheel);
  //   };
  // }, []);
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
            camera={cameraProps}
          >
            <ambientLight intensity={3} />
            <directionalLight position={[5, 10, 5]} intensity={3} />
            <ImageEffect cameraProps={cameraProps} />
            <OrbitControls enableZoom={false} />
            {/* Ajoutez une légère position Z et renderOrder pour que le texte soit devant */}
            <Text
              ref={textRef}
              position={[0, 1, 2]} // Position Z légèrement avancée
              fontSize={1}
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
