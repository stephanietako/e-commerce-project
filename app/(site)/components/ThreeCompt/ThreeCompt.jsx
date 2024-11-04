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
/////////////////////"use client";

// import { useState, useEffect, useRef } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { Html } from "@react-three/drei";
// import * as THREE from "three";
// import styles from "./styles.module.scss";

// const ImageEffect = () => {
//   const meshRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const texture = useLoader(THREE.TextureLoader, "/assets/palm5.webp");

//   // Dimensions connues du canevas
//   const canvasWidth = 800;  // Remplacez par la largeur de votre canevas
//   const canvasHeight = 600;  // Remplacez par la hauteur de votre canevas

//   const geometry = new THREE.PlaneGeometry(canvasWidth, canvasHeight);

//   useEffect(() => {
//     if (texture) {
//       // Ajustement de la texture si nécessaire
//       texture.wrapS = THREE.RepeatWrapping; // Répéter horizontalement
//       texture.wrapT = THREE.RepeatWrapping; // Répéter verticalement
//       texture.repeat.set(canvasWidth / texture.image.width, canvasHeight / texture.image.height); // Ajuster la répétition
//       setIsLoading(false);
//     }
//   }, [texture]);

//   if (isLoading) {
//     return (
//       <Html center>
//         <div style={{ color: "#000", fontSize: "3rem" }}>Chargement...</div>
//       </Html>
//     );
//   }

//   return (
//     <mesh ref={meshRef} geometry={geometry}>
//       <meshBasicMaterial map={texture} />
//     </mesh>
//   );
// };

// const ThreeCompt = () => {
//   const canvasRef = useRef();

//   const cameraProps = {
//     position: [0, 1, 5],
//     fov: 70,
//     near: 0.1,
//     far: 1000,
//   };

//   return (
//     <section>
//       <div className={styles.canvas__container}>
//         <main className={styles.canvas}>
//           <Canvas
//             id={styles.canvas}
//             ref={canvasRef}
//             flat
//             dpr={[1, 2]}
//             gl={{ antialias: true }}
//             camera={cameraProps}
//           >
//             <ambientLight intensity={3} />
//             <directionalLight position={[5, 10, 5]} intensity={3} />
//             <ImageEffect />
//             <orbitControls enableZoom={false} />
//             <Text
//               position={[0, 1, 2]} // Position Z légèrement avancée
//               fontSize={1}
//               color="#fff"
//               renderOrder={0} // Rend le texte en dernier
//             >
//               PALMS TREES AFFAIR
//             </Text>
//           </Canvas>
//         </main>
//       </div>
//     </section>
//   );
// };

// export default ThreeCompt;
