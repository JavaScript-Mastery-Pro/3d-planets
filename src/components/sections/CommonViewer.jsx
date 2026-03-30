import { OrbitControls, Sparkles } from "@react-three/drei";
import React from "react";

// Internal imports
import { SCENE } from "@c";

const CommonViewer = ({ sparkle, rectAreaLight }) => {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        rotateSpeed={SCENE.ORBIT_ROTATE_SPEED}
        autoRotate
        autoRotateSpeed={SCENE.ORBIT_AUTO_ROTATE_SPEED}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <ambientLight intensity={0.5} />
      <Sparkles
        count={500}
        scale={[15, 5, 10]}
        size={1.5}
        speed={2}
        color={sparkle}
      />
      <rectAreaLight
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -5, -1]}
        intensity={10}
        color={rectAreaLight}
      />
    </>
  );
};

export default CommonViewer;
