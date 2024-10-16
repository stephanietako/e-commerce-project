"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { easing } from "maath";
// SCENE
// Component for animation
const ImageEffect = () => {
  // Diminution de la taille d'au moins trois fois
  const meshRef = useRef(null);
  const { camera } = useThree();
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "/assets/wallpalm1.jpg",
      (loadedTexture) => {
        setTexture(loadedTexture);
      },
      undefined,
      (err) => {
        console.error("Error loading texture:", err);
      }
    );
  }, []);

  useFrame((state, delta) => {
    // Camera position effect
    easing.damp3(
      state.camera.position,
      [
        state.pointer.x,
        1 + state.pointer.y / 2,
        8 + Math.atan(state.pointer.x * 2),
      ],
      0.3,
      delta
    );
    state.camera.lookAt(state.camera.position.x * 0.9, 0, -4);

    // Mesh rotation effect
    if (meshRef.current) {
      // Incline the image forward when the cursor is down, backward when the cursor is up
      meshRef.current.rotation.x = state.pointer.y * 0.3;
      meshRef.current.rotation.y = state.pointer.x * 0.3;
    }
  });

  if (!texture) return null;

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]} position={[0, 0, 0]}>
      <planeGeometry args={[8, 3.5]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default ImageEffect;
