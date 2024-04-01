import {
  OrbitControls,
  Outlines,
  Sparkles,
  useTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import React, { useRef, useState } from "react";

const SmallPlanetsViewer = ({ tex }) => {
  const texture = useTexture(tex);
  const [hovered, hover] = useState(false);
  const ref = useRef();
  return (
    <>
      <Perf />
      <OrbitControls
        enableZoom={false}
        rotateSpeed={0.2}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <ambientLight intensity={2} />

      <rectAreaLight
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -3, -1]}
        intensity={7}
        color={"#f8f9fa"}
      />
      <mesh
        scale={[2.5, 2.5, 2.5]}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial map={texture} />
        <Outlines thickness={0.025} color={hovered ? "#80ffdb" : "black"} />
      </mesh>
    </>
  );
};

export default SmallPlanetsViewer;
