"use client";

import { Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ImageEffect from "../ImageEffect/ImageEffect";
import styles from "./styles.module.scss";
import { useRef, useEffect, useState } from "react";

export const dynamic = "force-dynamic";

const ThreeCompt = () => {
  // Création d'une référence pour accéder au Canvas DOM
  const canvasRef = useRef();
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth); // Mise à jour de la largeur de l'écran
    };

    // Écoute du redimensionnement
    window.addEventListener("resize", handleResize);
    handleResize(); // Appel initial pour récupérer la largeur au chargement

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // État pour stocker la largeur du Canvas
  //const [canvasWidth, setCanvasWidth] = useState(0);

  // Définition des propriétés de la caméra utilisée dans la scène 3D
  const cameraProps = {
    position: [0, 0, 0], // Position initiale de la caméra
    fov: 75, // Angle de vue de la caméra (Field of View)
    near: 0.1, // Distance minimale à laquelle la caméra peut voir des objets
    far: 1000, // Distance maximale à laquelle la caméra peut voir des objets
  };

  // // Gestion de la redimension de l'écran et ajuster la largeur du Canvas en conséquence
  // useEffect(() => {
  //   // Fonction pour mettre à jour la largeur du Canvas
  //   if (canvasRef.current) {
  //     setCanvasWidth(canvasRef.current.clientWidth); // Mise à jour de la largeur du Canvas
  //   }

  //   // Fonction appelée lors du redimensionnement de la fenêtre
  //   const handleResize = () => {
  //     if (canvasRef.current) {
  //       setCanvasWidth(canvasRef.current.clientWidth); // Mise à jour de la largeur du Canvas lors du redimensionnement
  //     }
  //   };

  //   // Écouteur d'événements pour le redimensionnement de la fenêtre
  //   window.addEventListener("resize", handleResize);

  //   // Nettoyage de l'écouteur lors de la suppression du composant
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [canvasRef]); // Dépendance sur canvasRef, s'assure que le hook est réexécuté lorsque la référence change

  // Calcul de la taille du texte en fonction de la largeur du Canvas (pour qu'il soit responsive)
  const minFontSize = 0.5;
  const fontSize = Math.max(viewportWidth / 1200, minFontSize); // ajuster en fonction de la largeur du viewport

  return (
    <section>
      {/* Conteneur principal du Canvas avec des styles CSS */}
      <div className={styles.canvas__container}>
        <main className={styles.canvas}>
          <Canvas
            id={styles.canvas} // Assignation de l'ID pour ce Canvas (lié aux styles)
            ref={canvasRef} // Lien avec la référence pour accéder au Canvas
            flat // Option pour rendre le fond de la scène plat
            dpr={[1, 2]} // Résolution dynamique de rendu pour les écrans Retina
            gl={{ antialias: true }} // Activation de l'anticrénelage pour des graphismes plus lisses
            camera={cameraProps} // Passage des propriétés de la caméra à la scène
          >
            {/* Lumière ambiante qui éclaire uniformément la scène */}
            <ambientLight intensity={1} />
            {/* Lumière directionnelle positionnée pour un effet d'ombrage */}
            <directionalLight position={[5, 10, 5]} intensity={1} />
            {/* Application de l'effet d'image personnalisé */}
            <ImageEffect />
            {/* Affichage du texte en 3D avec position, taille de police et couleur */}
            <Text
              position={[0, 0, 3]} // Position du texte légèrement en avant sur l'axe Z
              fontSize={fontSize}
              color="#fff"
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
