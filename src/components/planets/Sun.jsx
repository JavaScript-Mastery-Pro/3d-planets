import React from "react";
import { sun } from "../../utils";
import { useTexture } from "@react-three/drei";

const Sun = () => {

    const sunT = useTexture(sun)

  return (
    <>
      <meshStandardMaterial
        map={sunT}
        color={"#fca311"}
        transparent={true}
        envMapIntensity={1}
      />
    </>
  );
};

export default Sun;
