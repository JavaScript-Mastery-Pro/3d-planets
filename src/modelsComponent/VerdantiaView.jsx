import React, { useMemo } from "react";
import CommonViewer from "../components/CommonViewer";
import { Sparkles, useTexture } from "@react-three/drei";
import { la, ld, lm, ln } from "../utils";
import * as THREE from "three";
import { Perf } from "r3f-perf";

const VerdantiaView = () => {
  const lTexture = useTexture(lm);
  const lnTexture = useTexture(ln);
  const ldTexture = useTexture(ld);
  const laTexture = useTexture(la);

  useMemo(() => {
    lTexture.wrapS = lTexture.wrapT = THREE.RepeatWrapping;
    lTexture.repeat.setScalar(4);
  }, [lm]);

  useMemo(() => {
    lnTexture.wrapS = lnTexture.wrapT = THREE.RepeatWrapping;
    lnTexture.repeat.setScalar(4);
  }, [ln]);

  useMemo(() => {
    ldTexture.wrapS = ldTexture.wrapT = THREE.RepeatWrapping;
    ldTexture.repeat.setScalar(4);
  }, [ld]);

  useMemo(() => {
    laTexture.wrapS = laTexture.wrapT = THREE.RepeatWrapping;
    laTexture.repeat.setScalar(4);
  }, [la]);
  return (
    <>
     
      <CommonViewer />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#fdc500"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#ff7b00"} />
      <rectAreaLight
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -5, -1]}
        intensity={10}
        color={"#ffd60a"}
      />

      <Sparkles
        count={500}
        scale={[15, 5, 10]}
        size={1.5}
        speed={2}
        color={"#ffd60a"}
      />
      <mesh scale={[4, 4, 4]} position={[0, 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={lTexture}
          normalMap={lnTexture}
          normalScale={[1, 1]}
          // displacementMap={ldTexture}
          // displacementScale={0.05}
          aoMap={laTexture}
          aoMapIntensity={0.9}
          roughness={1}
        />
      </mesh>
    </>
  );
};

export default VerdantiaView;
