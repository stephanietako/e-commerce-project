"use client";

import { useState, useRef, useEffect } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";
import { Html } from "@react-three/drei";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const ImageEffect = () => {
  const meshRef = useRef(null);
  const { camera, viewport } = useThree();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const texture = useLoader(THREE.TextureLoader, "/assets/palm5.webp");

  // Vérifier si la texture est chargée ou en erreur
  useEffect(() => {
    if (texture) {
      setIsLoading(false);
    } else {
      setHasError(true);
    }
  }, [texture]);

  const previousPointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    easing.damp3(
      camera.position,
      [
        state.pointer.x * 2,
        1 + state.pointer.y / 2,
        8 + Math.atan(state.pointer.x * 4),
      ],
      1,
      delta
    );
    camera.lookAt(new THREE.Vector3(0, 0, -10));

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
      meshRef.current.scale.set(viewport.width / 7, viewport.height / 7, 1);

      // Mise à jour de la position précédente de la souris
      previousPointer.current.x = state.pointer.x;
      previousPointer.current.y = state.pointer.y;
    }
  });

  // Affichage de l'état de chargement ou d'erreur
  if (isLoading || hasError) {
    return (
      <Html
        as="div"
        wrapperClass={styles.loadingContainer}
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
      >
        <p>{hasError ? "Erreur de chargement" : "Chargement..."}</p>
      </Html>
    );
  }

  return (
    <mesh ref={meshRef} scale={[1, 0, 1]} position={[0, 0, 0]}>
      <planeGeometry args={[20, 20, 1]} />
      <meshBasicMaterial map={texture} color="#ADD8E6" />
    </mesh>
  );
};

export default ImageEffect;
