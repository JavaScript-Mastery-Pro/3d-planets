import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { useContext } from "react";
import { AllContext } from "../context/All.context";

const Common = ({ isHover }) => {
  const { isOrbiting, setIsOrbiting } = useContext(AllContext);
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls
        enableZoom={false}
        makeDefault
        enabled={isHover}
        onChange={() => setIsOrbiting(true)}
      />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
    </>
  );
};

export default Common;
