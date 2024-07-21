"use client";

import { EffectComposer, ToneMapping } from "@react-three/postprocessing";

export const EffectContrast = () => {
  return (
    <EffectComposer>
      <ToneMapping />
    </EffectComposer>
  );
};

export default EffectContrast;
