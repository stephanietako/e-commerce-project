// "use client";

// import { useFrame, useThree } from "@react-three/fiber";
// import { useRef, useState, useEffect } from "react";
// import * as THREE from "three";
// import { easing } from "maath";
// export const dynamic = "force-dynamic";
// // Composant principal pour l'effet d'image
// const ImageEffect = () => {
//   const meshRef = useRef(null); // Création d'une référence pour le maillage (mesh)
//   const { camera } = useThree(); // Accès à la caméra de la scène Three.js
//   const [texture, setTexture] = useState(null); // État pour stocker la texture chargée

//   // useEffect pour charger la texture au montage du composant
//   useEffect(() => {
//     const loader = new THREE.TextureLoader(); // Création d'un nouveau chargeur de textures
//     loader.load(
//       "/assets/palm5.webp", // Chemin de l'image à charger
//       (loadedTexture) => {
//         setTexture(loadedTexture); // Mise à jour de l'état avec la texture chargée
//       },
//       undefined,
//       (err) => {
//         console.error("Erreur lors du chargement de la texture :", err);
//       }
//     );
//   }, []);

//   // useFrame est appelé à chaque frame pour animer la scène
//   useFrame((state, delta) => {
//     // damp3 damping sur trois dimensions (x, y, z)
//     // Animation douce de la position de la caméra
//     // damp fait référence à un type particulier de lissage qui ralentit progressivement les mouvements pour atteindre une position cible.
//     // C'est une forme de lissage exponentiel où le mouvement décélère à mesure qu'il s'approche de la cible
//     easing.damp3(
//       camera.position, // Position actuelle de la caméra
//       [
//         state.pointer.x * 2, // Calcul de la nouvelle position x de la caméra en fonction de la position de la souris
//         1 + state.pointer.y / 2, // Calcul de la nouvelle position y de la caméra
//         8 + Math.atan(state.pointer.x * 2), // Calcul de la nouvelle position z de la caméra en utilisant la tangente arctan
//       ],
//       0.5, // Facteur de lissage pour une interpolation douce
//       delta // Temps écoulé depuis la dernière frame
//     );

//     // Faire en sorte que la caméra regarde vers un point spécifique
//     camera.lookAt(camera.position.x * 0.9, 0, 2);

//     // Rotation douce du maillage en fonction de la position de la souris
//     if (meshRef.current) {
//       // Vérifie que le maillage est bien référencé
//       // Interpolation douce pour la rotation en x
//       meshRef.current.rotation.x = THREE.MathUtils.lerp(
//         meshRef.current.rotation.x, // Rotation actuelle en x
//         state.pointer.y * 0.3, // Nouvelle rotation en x basée sur la position de la souris
//         0.1 // Facteur de lissage
//       );
//       // Spherical Linear Interpolation
//       // L'interpolation est une méthode pour estimer les valeurs entre deux points connus. Imaginez que vous avez deux points sur une ligne et que vous voulez savoir quelles sont les valeurs entre ces deux points. L'interpolation vous permet de calculer ces valeurs intermédiaires.
//       // Interpolation douce pour la rotation en y
//       meshRef.current.rotation.y = THREE.MathUtils.lerp(
//         meshRef.current.rotation.y, // Rotation actuelle en y
//         state.pointer.x * 0.3, // Nouvelle rotation basée sur la position de la souris
//         // L'interpolation est utilisée pour créer des mouvements et des transitions fluides
//         0.1 // Facteur de lissage
//         // Le facteur de lissage est un paramètre qui contrôle à quelle vitesse ou avec quelle intensité la transition entre les valeurs doit se faire
//       );
//     }
//   });

//   // Si la texture n'est pas encore chargée, ne rien afficher
//   if (!texture) return null;

//   // Rendu du maillage avec la texture appliquée
//   //un mesh est une combinaison d'une géométrie (la forme de l'objet) et d'un matériau (l'apparence de l'objet)
//   return (
//     <mesh ref={meshRef} scale={[2, 2, 2]} position={[2, 4, 1]}>
//       {/* position={[-4, 4, 3] */}
//       {/* L'objet sera déplacé de tant unités vers la droite (X), de tant unité vers le
//       haut (Y), et de tant unités vers l'arrière (Z). */}
//       {/* Création de la géométrie du plan avec les dimensions spécifiées */}
//       {/* Ajuster l'image */}
//       <planeGeometry args={[15, 11]} />
//       {/* Application du matériau de base avec la texture chargée */}
//       <meshBasicMaterial map={texture} />
//     </mesh>
//   );
// };

// export default ImageEffect;
///////////////////
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { easing } from "maath";
import { Html } from "@react-three/drei";

export const dynamic = "force-dynamic";

const ImageEffect = () => {
  const meshRef = useRef(null);
  const { camera, viewport } = useThree();
  const [texture, setTexture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "/assets/palm5.webp",
      (loadedTexture) => {
        setTexture(loadedTexture);
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error("Erreur lors du chargement de la texture :", err);
        setLoading(false);
      }
    );
  }, []);

  useFrame((state, delta) => {
    easing.damp3(
      camera.position,
      [
        state.pointer.x * 3,
        1 + state.pointer.y / 3,
        8 + Math.atan(state.pointer.x * 2),
      ],
      0.5,
      delta
    );
    // La camera regardera vers le bas
    camera.lookAt(camera.position.x * 1, 1, -10);
    camera.updateWorldMatrix();

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
      // Ajustement de l'échelle
      meshRef.current.scale.set(viewport.width / 7, viewport.height / 7, 1); // Modifiez ici
    }
  });

  if (loading) {
    return (
      <Html center>
        <div style={{ color: "#fff", fontSize: "24px" }}>Chargement...</div>
      </Html>
    );
  }

  if (!texture) return null;

  // Ajustement de la position de l'image
  {
    /* position={[-4, 4, 3] */
  }
  // L'objet sera déplacé de tant unités vers la droite (X), de tant unité vers le bas (Y), et de tant unités vers l'arrière (Z).
  return (
    <mesh ref={meshRef} scale={[0, 1, 1]} position={[1, 3, 0]}>
      {" "}
      {/* Modifiez ici */}
      <planeGeometry args={[17, 27]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default ImageEffect;
