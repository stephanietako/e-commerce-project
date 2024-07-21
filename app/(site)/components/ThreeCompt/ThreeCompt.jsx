"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import ImageEffect from "../ImageEffect/ImageEffect";
import EffectContrast from "../EffectContrast/EffectContrast";

const ThreeCompt = () => {
  return (
    <section>
      <div className="canvas__container">
        <main
          className="canvas__canvas"
          style={{
            display: "flex",
            width: "65rem",
            height: "30rem",
            border: "4px solid red",
            marginBottom: "4rem",
          }}
        >
          <Canvas
            flat
            dpr={[1, 1.5]}
            gl={{ antialias: false }}
            camera={{ position: [0, 1, 6], fov: 25, near: 1, far: 20 }}
          >
            <ambientLight intensity={1.5 * Math.PI} />
            <Sky />
            <ImageEffect
              rotation={[0, Math.PI / 2, 0]}
              position={[0, -1, -0.85]}
            />
            {/* <OrbitControls
              enableZoom={true}
              enableRotate={true}
              enablePan={true}
              maxPolarAngle={Math.PI / 0}
              minDistance={1}
              maxDistance={20}
            /> */}
            <EffectContrast />
          </Canvas>
        </main>
      </div>
    </section>
  );
};

export default ThreeCompt;
