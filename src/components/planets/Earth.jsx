import { MeshTransmissionMaterial, View, useTexture } from "@react-three/drei";
import React, { useEffect } from "react";
import * as THREE from "three";
import Common from "../Common";

import {
  earthBumpTextureImg,
  earthColorTextureImg,
  earthNightTextureImg,
  earthTextureImg,
  earthCloudTextureImg,
} from "../../utils";

const Earth = () => {
  const earth = useTexture(earthTextureImg);
  const earthBump = useTexture(earthBumpTextureImg);
  const earthColor = useTexture(earthColorTextureImg);
  const earthNight = useTexture(earthNightTextureImg);
  const earthClouds = useTexture(earthCloudTextureImg);

  useEffect(() => {
    console.log(earth);
  }, []);

  return (
    <>
      <meshStandardMaterial
        map={earth}
        bumpMap={earthBump}
        bumpScale={1}
        emissiveMap={earthNight}
        emissive={new THREE.Color(0xffff99)}
        emissiveIntensity={15}
        color={"#03045e"}
        transparent={true}
        lightMap={earthColor}
        envMapIntensity={1}
      />
    </>
  );
};

export default Earth;
