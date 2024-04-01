import { OrbitControls, Sparkles, useTexture } from "@react-three/drei";
import React, { useMemo } from "react";
import { fa, fd, fm, fn, ja, jd, jm, jn } from "../utils";
import * as THREE from "three";
import CommonViewer from "../components/CommonViewer";

const ZephyrionView = () => {
  const jTexture = useTexture(jm);
  const jnTexture = useTexture(jn);
  const jdTexture = useTexture(jd);
  const jaTexture = useTexture(ja);

  useMemo(() => {
    jTexture.wrapS = jTexture.wrapT = THREE.RepeatWrapping;
    jTexture.repeat.setScalar(4);
  }, [jm]);

  useMemo(() => {
    jnTexture.wrapS = jnTexture.wrapT = THREE.RepeatWrapping;
    jnTexture.repeat.setScalar(4);
  }, [jn]);

  useMemo(() => {
    jdTexture.wrapS = jdTexture.wrapT = THREE.RepeatWrapping;
    jdTexture.repeat.setScalar(4);
  }, [jd]);

  useMemo(() => {
    jaTexture.wrapS = jaTexture.wrapT = THREE.RepeatWrapping;
    jaTexture.repeat.setScalar(4);
  }, [ja]);
  return (
    <>
      <CommonViewer />

      <pointLight position={[3, 0, 3]} intensity={5} color={"#d8f3dc"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#d8f3dc"} />
      <rectAreaLight
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -5, -1]}
        intensity={10}
        color={"#52b69a"}
      />

      <Sparkles
        count={500}
        scale={[15, 5, 10]}
        size={1.5}
        speed={2}
        color={"#52b788"}
      />
      <mesh scale={[4, 4, 4]} position={[0, 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={jTexture}
          normalMap={jnTexture}
          normalScale={[1, 1]}
          displacementMap={jdTexture}
          displacementScale={0.05}
          aoMap={jaTexture}
          aoMapIntensity={0.5}
          //   bumpMap={sandBTexture}
          //   bumpScale={1.5}
          roughness={1}
          //   color={"yellow"}
        />
      </mesh>
    </>
  );
};

export default ZephyrionView;
