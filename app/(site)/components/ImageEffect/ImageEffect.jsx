"use client";

import { useState, useEffect, useRef } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";
import { Html } from "@react-three/drei";

const ImageEffect = () => {
  const meshRef = useRef(null);
  const { camera, viewport } = useThree();
  const [isLoading, setIsLoading] = useState(true);
  const texture = useLoader(THREE.TextureLoader, "/assets/palm5.webp");

  const geometry = useState(new THREE.PlaneGeometry());

  useEffect(() => {
    if (texture) {
      setIsLoading(false);
    }
  }, [texture]);

  useFrame((state, delta) => {
    easing.damp3(
      camera.position,
      [
        // La position x de la caméra est influencée par la position de la souris sur l'axe horizontal, multipliée par 4 pour augmenter la sensibilité.
        state.pointer.x * 2,
        //  La position y est légèrement ajustée par rapport à la position de la souris sur l'axe vertical, mais elle est décalée pour éviter que la caméra ne descende trop bas.
        1 + state.pointer.y / 2,
        //  En ajoutant 8, vous fixez la profondeur initiale de la caméra à 8 unités. Cela signifie que la caméra commence à une certaine distance de la scène, en particulier sur l'axe z.
        // La position z de la caméra utilise la fonction Math.atan, qui renvoie l'arc tangente de la position de la souris multipliée par 4. Cela crée un effet de perspective dynamique en fonction de la position de la souris. Plus la souris se déplace à gauche ou à droite, plus la caméra se rapproche ou s'éloigne de la scène.
        10 + Math.atan(state.pointer.x * 7),
      ],
      // Ce chiffre est un facteur de raideur qui détermine à quelle vitesse la caméra réagit aux changements de position.
      // Une valeur de 1 signifie que les changements seront modérés ; des valeurs plus élevées rendraient la réponse plus rapide.
      1,
      delta
    );
    camera.lookAt(camera.position.x * 0, 0, 0);

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        state.pointer.y * 0.2,
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        state.pointer.x * 0.2,
        0.1
      );
      // Mettez à jour l'échelle si besoin
      meshRef.current.scale.set(viewport.width / 5, viewport.height / 5, 1);
    }
  });

  if (isLoading) {
    return (
      <Html center>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            color: "#000",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
          }}
        >
          <p>Chargement...</p>
        </div>
      </Html>
    );
  }

  return (
    <mesh ref={meshRef} scale={[1, 1, 1]} position={[5, 3, 0]}>
      <planeGeometry args={[17, 19, 1]} />
      <meshBasicMaterial map={texture} color="#ADD8E6" />
    </mesh>
  );
};

export default ImageEffect;
