import React, { useRef } from "react";
import {
  earthBumpTextureImg,
  earthColorTextureImg,
  earthNightTextureImg,
  earthTextureImg,
  earthCloudTextureImg,
} from "../../utils";
import { MeshTransmissionMaterial, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const EarthAo = () => {
  const earth = useTexture(earthTextureImg);
  const earthBump = useTexture(earthBumpTextureImg);
  const earthColor = useTexture(earthColorTextureImg);
  const earthNight = useTexture(earthNightTextureImg);
  const earthClouds = useTexture(earthCloudTextureImg);

  const mesh = useRef(new THREE.Mesh());

  useFrame(() => {
    mesh.current.rotation.x += 0.0002;
    mesh.current.rotation.y += 0.0002;
    mesh.current.rotation.z += 0.0003;
  });

  return (
    <mesh scale={[1.75, 1.75, 1.75]} ref={mesh}>
      <sphereGeometry />
      <MeshTransmissionMaterial
        // transmission={1.1}
        // thickness={0.1}
        roughness={1}
        transparent
        map={earthColor}
        opacity={1}
        // background={earthColor}
        background={new THREE.Color(0x090F22)}
      />
    </mesh>
  );
};

export default EarthAo;
