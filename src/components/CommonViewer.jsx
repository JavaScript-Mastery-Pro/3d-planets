import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import React from "react";

const CommonViewer = () => {
  return (
    <>
      <Perf position={"bottom-right"} />
      <OrbitControls
        enableZoom={false}
        rotateSpeed={0.2}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <ambientLight intensity={0.5} />
    </>
  );
};

export default CommonViewer;
