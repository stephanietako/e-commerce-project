"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { easing } from "maath";
import { Html, Text } from "@react-three/drei";

const ImageEffect = () => {
  const meshRef = useRef(null);
  const { camera, viewport } = useThree();
  const [texture, setTexture] = useState(null);
  const [loading, setLoading] = useState(true);

  // Charger l'image principale pour l'animation du mesh
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "/assets/palm5.webp", // Chemin de l'image principale
      (loadedTexture) => {
        setTexture(loadedTexture); // Stocker la texture pour affichage
        setLoading(false); // Charger terminé
      },
      undefined,
      (err) => {
        console.error("Erreur lors du chargement de la texture :", err);
        setLoading(false);
      }
    );
  }, []);

  // Animation continue de la scène et des objets dans useFrame
  useFrame((state, delta) => {
    // Le useFrame de React Three Fiber, qui est appelé à chaque frame de l'animation. Il permet de mettre à jour la position de la caméra en fonction de la position du pointeur de la souris, créant ainsi un effet interactif et dynamique.
    // Déplacement de la caméra en fonction du pointeur de la souris avec un effet de lissage (damping)
    // damp3 : Applique un effet de lissage (damping) pour animer la transition de la position de la caméra
    // en se rapprochant progressivement de la position cible. Cela crée un mouvement fluide et amorti.
    // - 1er argument : la position actuelle de la caméra (camera.position)
    // - 2ème argument : le tableau [x, y, z] indiquant la nouvelle position cible de la caméra
    // - 3ème argument : le facteur de lissage (plus il est faible, plus l'animation est douce)
    // - 4ème argument : le delta de temps (temps écoulé entre les frames) pour ajuster la vitesse de transition

    easing.damp3(
      camera.position,
      [
        // Cela signifie que la position x de la caméra sera multipliée par 3. En déplaçant la souris de gauche à droite (axe x), la caméra se déplacera également latéralement, amplifiant l'effet de mouvement par un facteur de 3.
        state.pointer.x * 3,
        1 + state.pointer.y / 3,
        // calcule l'angle tangent basé sur la position x de la souris.
        8 + Math.atan(state.pointer.x * 2),
      ], // Nouvelle position de la caméra
      1, // Facteur de lissage, le lissage est souvent utilisé en conjonction avec l'interpolation pour adoucir les mouvements et éviter des transitions abruptes
      // delta est le temps écoulé entre le cadre actuel et le précédent, ce qui est essentiel pour synchroniser le mouvement avec le temps réel
      delta // Temps écoulé pour le lissage
    );
    // La caméra est orientée pour regarder vers un point fixe
    camera.lookAt(camera.position.x * 1, 1, -10);
    camera.updateWorldMatrix(); // Mise à jour de la matrice de la caméra

    // Rotation et échelle du mesh basé sur la position du pointeur
    if (meshRef.current) {
      // Rotation progressive du mesh en fonction du pointeur
      // MathUtils.lerp : Effectue une interpolation linéaire entre deux valeurs pour créer un effet de transition douce.
      // Utilisé ici pour ajuster progressivement la rotation du mesh en fonction de la position du pointeur.
      // - 1er argument : la valeur actuelle (ex. meshRef.current.rotation.x)
      // - 2ème argument : la valeur cible, basée sur la position du pointeur (state.pointer.y * 0.2)
      // - 3ème argument : le facteur d’interpolation (entre 0 et 1) ; plus il est proche de 1, plus le mouvement est rapide

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
      // Ajustement de l'échelle du mesh en fonction des dimensions du viewport
      meshRef.current.scale.set(viewport.width / 5, viewport.height / 5, 1);
    }
  });

  if (loading) {
    return (
      <Html center>
        <div
          style={{
            color: "#000",
            fontSize: "24px",
            // backgroundColor: "white",
            // width: "60rem",
            // height: "30rem",
            // textAlign: "center",
            // justifyContent: "center",
          }}
        >
          Chargement...
        </div>
      </Html>
    );
  }
  // Si la texture est manquante, ne rien afficher
  if (!texture) return null;

  // Création du mesh principal avec la texture chargée
  return (
    <mesh ref={meshRef} scale={[0, 0, 4]} position={[2, 2.5, 0]}>
      <planeGeometry args={[19, 19]} />{" "}
      {/* Définition de la géométrie en forme de plan */}
      <meshBasicMaterial map={texture} color="#ADD8E6" />{" "}
    </mesh>
  );
};

export default ImageEffect;

// "use client";

// import { useFrame, useThree } from "@react-three/fiber"; // Hooks pour animer et accéder aux propriétés Three.js
// import { useRef, useState, useEffect } from "react";
// import * as THREE from "three";
// import { easing } from "maath";
// import { Html } from "@react-three/drei";

// const ImageEffect = ({ cameraProps }) => {
//   const meshRef = useRef(null); // Référence pour le mesh principal
//   const { camera, viewport } = useThree(); // Accès à la caméra et au viewport de la scène
//   const [texture, setTexture] = useState(null); // État pour stocker la texture de l'image chargée
//   const [loading, setLoading] = useState(true); // État de chargement pour l'affichage du message

//   // Chargement de l'image principale pour l'animation
//   useEffect(() => {
//     const loader = new THREE.TextureLoader(); // Instancie le chargeur de textures Three.js
//     loader.load(
//       "/assets/palm5.webp", // Chemin vers l'image à charger
//       (loadedTexture) => {
//         setTexture(loadedTexture); // Stocke la texture une fois chargée
//         setLoading(false); // Mise à jour de l'état pour indiquer la fin du chargement
//       },
//       undefined, // Gestionnaire de progression (inutilisé ici)
//       (err) => {
//         console.error("Erreur lors du chargement de la texture :", err); // Affiche une erreur en cas de problème de chargement
//         setLoading(false); // Arrête le chargement si une erreur survient
//       }
//     );
//   }, []);

//   // Configuration de la caméra après chargement
//   useEffect(() => {
//     camera.position.set(...cameraProps.position); // Position initiale de la caméra
//     camera.fov = cameraProps.fov; // Champ de vision de la caméra
//     camera.near = cameraProps.near; // Distance minimale de la caméra
//     camera.far = cameraProps.far; // Distance maximale de la caméra
//     camera.updateProjectionMatrix(); // Met à jour la matrice de projection de la caméra
//   }, [cameraProps, camera]);

//   // Animation continue de la scène et du mesh
//   useFrame((state, delta) => {
//     // Applique un effet de lissage à la position de la caméra pour la rendre plus fluide
//     easing.damp3(
//       camera.position,
//       [
//         state.pointer.x * 3, // Ajustement de l'axe X de la caméra en fonction du pointeur
//         1 + state.pointer.y / 3, // Ajustement de l'axe Y de la caméra en fonction du pointeur
//         8 + Math.atan(state.pointer.x * 2), // Ajustement de la profondeur (axe Z) en fonction de l'angle
//       ],
//       0.8, // Facteur de lissage
//       delta // Delta pour synchroniser la transition avec le temps
//     );

//     camera.lookAt(camera.position.x, 1, -5); // La caméra regarde vers un point fixe dans la scène
//     camera.updateWorldMatrix(); // Mise à jour de la matrice du monde pour la caméra

//     if (meshRef.current) {
//       // Rotation progressive du mesh en fonction du pointeur
//       meshRef.current.rotation.x = THREE.MathUtils.lerp(
//         meshRef.current.rotation.x,
//         state.pointer.y * 0.2, // Rotation en fonction de l'axe Y du pointeur
//         0.1 // Facteur de lissage de la rotation
//       );
//       meshRef.current.rotation.y = THREE.MathUtils.lerp(
//         meshRef.current.rotation.y,
//         state.pointer.x * 0.2, // Rotation en fonction de l'axe X du pointeur
//         0.1 // Facteur de lissage de la rotation
//       );
//       meshRef.current.scale.set(viewport.width / 5, viewport.height / 5, 1); // Ajustement de l'échelle du mesh en fonction du viewport
//     }
//   });

//   // Si l'image est en cours de chargement, afficher un message de chargement
//   if (loading) {
//     return (
//       <Html center>
//         {/* Texte de chargement centré sur l'écran */}
//         <div style={{ color: "#fff", fontSize: "24px" }}>Chargement...</div>
//       </Html>
//     );
//   }

//   // Si la texture n'a pas pu être chargée, ne rien afficher
//   if (!texture) return null;

//   // Rendu final du mesh principal avec la texture appliquée
//   return (
//     <mesh ref={meshRef} scale={[0, 0, 0]} position={[0, 0, 0]}>
//       <planeGeometry args={[17, 17]} />{" "}
//       {/* Dimensions du plan pour l'affichage de l'image */}
//       <meshBasicMaterial map={texture} />{" "}
//       {/* Application de la texture sur le mesh */}
//     </mesh>
//   );
// };

// export default ImageEffect;
