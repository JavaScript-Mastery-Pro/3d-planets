import { OrbitControls, Sparkles } from "@react-three/drei";
import React from "react";

const CommonViewer = ({ sparkle, rectAreaLight, p1, p2 }) => {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        rotateSpeed={0.2}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <ambientLight intensity={0.2} />
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
      <pointLight position={[3, -3, 3]} intensity={5} color={p1} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={p2} />
    </>
  );
};

export default CommonViewer;
