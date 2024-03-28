import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Lightformer,
  Sparkles,
} from "@react-three/drei";
import React, { useContext } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import { AllContext } from "../context/All.context";

const Common = ({ isHover }) => {
  const { isOrbiting, setIsOrbiting } = useContext(AllContext);
  return (
    <>
      <ambientLight intensity={0.3} />
      <OrbitControls
        enableZoom={false}
        makeDefault
        enabled={isHover}
        onChange={() => setIsOrbiting(true)}
        autoRotate
        autoRotateSpeed={0.3}
      />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
      
    </>
  );
};

export default Common;
