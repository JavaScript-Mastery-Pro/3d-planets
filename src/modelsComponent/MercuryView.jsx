import { OrbitControls, Sparkles, useTexture } from "@react-three/drei";
import React, { useMemo } from "react";
import { ca, cd, cm, cn, fa, fd, fm, fn } from "../utils";
import * as THREE from "three";

const MercuryView = () => {
  const fTexture = useTexture(fm);
  const fnTexture = useTexture(fn);
  const fdTexture = useTexture(fd);
  const faTexture = useTexture(fa);

  const cTexture = useTexture(cm);
  const cnTexture = useTexture(cn);
  const cdTexture = useTexture(cd);
  const caTexture = useTexture(ca);

  useMemo(() => {
    fTexture.wrapS = fTexture.wrapT = THREE.RepeatWrapping;
    fTexture.repeat.setScalar(4);
  }, [fm]);

  useMemo(() => {
    fnTexture.wrapS = fnTexture.wrapT = THREE.RepeatWrapping;
    fnTexture.repeat.setScalar(4);
  }, [fn]);

  useMemo(() => {
    fdTexture.wrapS = fdTexture.wrapT = THREE.RepeatWrapping;
    fdTexture.repeat.setScalar(4);
  }, [fd]);

  useMemo(() => {
    faTexture.wrapS = faTexture.wrapT = THREE.RepeatWrapping;
    faTexture.repeat.setScalar(4);
  }, [fa]);

  // next texture
  useMemo(() => {
    cTexture.wrapS = cTexture.wrapT = THREE.RepeatWrapping;
    cTexture.repeat.setScalar(4);
  }, [cm]);

  useMemo(() => {
    cnTexture.wrapS = cnTexture.wrapT = THREE.RepeatWrapping;
    cnTexture.repeat.setScalar(4);
  }, [cn]);

  useMemo(() => {
    cdTexture.wrapS = cdTexture.wrapT = THREE.RepeatWrapping;
    cdTexture.repeat.setScalar(4);
  }, [cd]);

  useMemo(() => {
    caTexture.wrapS = caTexture.wrapT = THREE.RepeatWrapping;
    caTexture.repeat.setScalar(4);
  }, [ca]);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        rotateSpeed={0.2}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <ambientLight intensity={0.5} />

      <pointLight position={[3, 0, 3]} intensity={5} color={"#fff0f3"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#fff0f3"} />
      <rectAreaLight
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -5, -1]}
        intensity={10}
        color={"#fff0f3"}
      />

      <Sparkles
        count={500}
        scale={[15, 5, 10]}
        size={1.5}
        speed={2}
        color={"#fff0f3"}
      />
       
      <mesh scale={[4, 4, 4]} position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={fTexture}
          normalMap={fnTexture}
          normalScale={[1, 1]}
          displacementMap={fdTexture}
          displacementScale={0.09}
          aoMap={faTexture}
          aoMapIntensity={1.5}
          //   bumpMap={sandBTexture}
          //   bumpScale={1.5}
          roughness={1}
          //   color={"pink"}
        />
      </mesh>
    </>
  );
};

export default MercuryView;
