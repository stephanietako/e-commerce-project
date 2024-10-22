"use client";

import { Canvas } from "@react-three/fiber";
import ImageEffect from "../ImageEffect/ImageEffect";
import EffectContrast from "../EffectContrast/EffectContrast";
// Styles
import styles from "./styles.module.scss";
import { useRef, useEffect } from "react";

export const dynamic = "force-dynamic";

const ThreeCompt = () => {
  const canvasRef = useRef();

  // useEffect(() => {
  //   const renderCanvas = canvasRef.current;

  //   // const handleWheel = (event) => {
  //   //   event.preventDefault(); // Empêche le zoom
  //   // };

  //   // if (renderCanvas) {
  //   //   // Ajout du gestionnaire d'événements
  //   //   renderCanvas.addEventListener("wheel", handleWheel, { passive: false });
  //   // }

  //   // Nettoyage de l'écouteur d'événements
  //   return () => {
  //     if (renderCanvas) {
  //       renderCanvas.removeEventListener("wheel", handleWheel);
  //     }
  //   };
  // }, []);

  return (
    <section>
      {/* Conteneur principal pour le canvas Three.js */}
      <div className={styles.canvas__container}>
        {/* Élément main qui contient le canvas */}
        <main className={styles.canvas}>
          {/* Initialisation de la scène Three.js avec le composant Canvas */}
          <Canvas
            ref={canvasRef} // Référence au Canvas
            flat
            dpr={[1, 1.5]}
            gl={{ antialias: false }}
            camera={{ position: [0, 2, 4], fov: 20, near: 1, far: 20 }}
          >
            {/* Éclairage ambiant dans la scène */}
            <ambientLight intensity={3 * Math.PI} />
            {/* Composant ImageEffect */}
            <ImageEffect />
            {/* Composant EffectContrast */}
            <EffectContrast />
          </Canvas>
          <div
            id="info"
            style={{
              position: "absolute",
              top: "10px",
              width: "100%",
              textAlign: "center",
              zIndex: "100",
              display: "flex",
              color: "#fff",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ color: "#fff" }}>PALM TREES AFFAIR</h1>
            <br />
            <p style={{ color: "#fff" }}>Découvrez la ferme des palmiers</p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ThreeCompt;
