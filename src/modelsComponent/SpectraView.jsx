import React, { useMemo } from "react";
import CommonViewer from "../components/CommonViewer";
import { Sparkles, useTexture } from "@react-three/drei";
import { la, ld, lm, ln, sa, sd, sm, sn } from "../utils";
import * as THREE from "three";

const SpectraView = () => {
  const sTexture = useTexture(sm);
  const snTexture = useTexture(sn);
  const sdTexture = useTexture(sd);
  const saTexture = useTexture(sa);

  useMemo(() => {
    sTexture.wrapS = sTexture.wrapT = THREE.RepeatWrapping;
    sTexture.repeat.setScalar(4);
  }, [lm]);

  useMemo(() => {
    snTexture.wrapS = snTexture.wrapT = THREE.RepeatWrapping;
    snTexture.repeat.setScalar(4);
  }, [sn]);

  useMemo(() => {
    sdTexture.wrapS = sdTexture.wrapT = THREE.RepeatWrapping;
    sdTexture.repeat.setScalar(4);
  }, [sd]);

  useMemo(() => {
    saTexture.wrapS = saTexture.wrapT = THREE.RepeatWrapping;
    saTexture.repeat.setScalar(4);
  }, [sa]);
  return (
    <>
      <CommonViewer />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#ff0a54"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#e01e37"} />
      <rectAreaLight
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -5, -1]}
        intensity={10}
        color={"#ffffff"}
      />

      <Sparkles
        count={500}
        scale={[15, 5, 10]}
        size={1.5}
        speed={2}
        color={"#ff7b00"}
      />
      <mesh scale={[4, 4, 4]} position={[0, 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={sTexture}
          normalMap={snTexture}
          normalScale={[1, 1]}
          // displacementMap={ldTexture}
          // displacementScale={0.05}
          aoMap={saTexture}
          aoMapIntensity={0.9}
          roughness={0}
        />
      </mesh>
    </>
  );
};

export default SpectraView;
