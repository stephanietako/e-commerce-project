"use client";

import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import ImageEffect from "../ImageEffect/ImageEffect";
import EffectContrast from "../EffectContrast/EffectContrast";
// Styles
import styles from "./styles.module.scss";

const ThreeCompt = () => {
  return (
    <section>
      {/* Conteneur principal pour le canvas Three.js */}
      <div className={styles.canvas__container}>
        {/* Élément main qui contient le canvas */}
        <main className={styles.canvas}>
          {/* Initialisation de la scène Three.js avec le composant Canvas */}
          <Canvas
            flat // Utilise un rendu 2D donc les objets ne sont pas en perspective
            dpr={[1, 1.5]} // Définit la densité de pixels pour le rendu
            gl={{ antialias: false }} // Désactive l'anticrénelage pour une apparence plus nette
            // Le crénelage (ou "jaggies" en anglais) fait référence à un effet visuel indésirable que l'on peut voir sur les bords des objets dans les images numériques. Cela se produit principalement lorsque les objets ont des contours inclinés ou courbes. Au lieu d'apparaître lisses, ces bords semblent "déchirés" ou "escaliers"
            camera={{ position: [0, 1, 6], fov: 25, near: 1, far: 20 }} // Paramètres de la caméra
          >
            {/* Éclairage ambiant dans la scène, avec une intensité calculée */}
            <ambientLight intensity={1.5 * Math.PI} />
            {/* Ajout d'un ciel dynamique dans la scène */}
            <Sky />
            {/* Composant ImageEffect pour appliquer un effet d'image, positionné et tourné */}
            <ImageEffect
              rotation={[0, Math.PI / 2, 0]} // Rotation de 90 degrés sur l'axe Y
              position={[0, -1, -0.85]} // Position dans l'espace 3D
            />
            {/* Composant EffectContrast pour appliquer un effet de contraste */}
            <EffectContrast />
          </Canvas>
        </main>
      </div>
    </section>
  );
};

export default ThreeCompt;
