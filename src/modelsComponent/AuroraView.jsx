import { OrbitControls, Sparkles, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useMemo } from "react";
import {
  sand,
  sandN,
  weed,
  weedD,
  weedN,
  sandD,
  sandAO,
  sandB,
  a1,
  a1N,
  mm,
  mn,
  md,
  ma,
} from "../utils";
import * as THREE from "three";
import CommonViewer from "../components/CommonViewer";

const AuroraView = () => {
  const weedTexture = useTexture(weed);
  const weedNTexture = useTexture(weedN);
  const weedDTexture = useTexture(weedD);
  const sandTexture = useTexture(sand);
  const sandNTexture = useTexture(sandN);
  const sandDTexture = useTexture(sandD);
  const sandAOTexture = useTexture(sandAO);
  const sandBTexture = useTexture(sandB);

  const a1Texture = useTexture(a1);
  const a1NTexture = useTexture(a1N);

  const mTexture = useTexture(mm);
  const mnTexture = useTexture(mn);
  const mdTexture = useTexture(md);
  const maTexture = useTexture(ma);

  useMemo(() => {
    weedTexture.wrapS = weedTexture.wrapT = THREE.RepeatWrapping;
    weedTexture.repeat.setScalar(4);
  }, [weed]);

  useMemo(() => {
    weedNTexture.wrapS = weedNTexture.wrapT = THREE.RepeatWrapping;
    weedNTexture.repeat.setScalar(4);
  }, [weedN]);

  useMemo(() => {
    sandTexture.wrapS = sandTexture.wrapT = THREE.RepeatWrapping;
    sandTexture.repeat.setScalar(4);
  }, [sand]);

  useMemo(() => {
    sandNTexture.wrapS = sandNTexture.wrapT = THREE.RepeatWrapping;
    sandNTexture.repeat.setScalar(4);
  }, [sandN]);

  useMemo(() => {
    sandDTexture.wrapS = sandDTexture.wrapT = THREE.RepeatWrapping;
    sandDTexture.repeat.setScalar(4);
  }, [sandD]);

  useMemo(() => {
    sandAOTexture.wrapS = sandAOTexture.wrapT = THREE.RepeatWrapping;
    sandAOTexture.repeat.setScalar(4);
  }, [sandAO]);

  useMemo(() => {
    sandBTexture.wrapS = sandBTexture.wrapT = THREE.RepeatWrapping;
    sandBTexture.repeat.setScalar(4);
  }, [sandB]);

  useMemo(() => {
    a1Texture.wrapS = a1Texture.wrapT = THREE.RepeatWrapping;
    a1Texture.repeat.setScalar(4);
  }, [a1]);

  useMemo(() => {
    a1NTexture.wrapS = a1NTexture.wrapT = THREE.RepeatWrapping;
    a1NTexture.repeat.setScalar(4);
  }, [a1N]);

  useMemo(() => {
    mTexture.wrapS = mTexture.wrapT = THREE.RepeatWrapping;
    mTexture.repeat.setScalar(4);
  }, [mm]);

  useMemo(() => {
    mnTexture.wrapS = mnTexture.wrapT = THREE.RepeatWrapping;
    mnTexture.repeat.setScalar(4);
  }, [mn]);

  useMemo(() => {
    mdTexture.wrapS = mdTexture.wrapT = THREE.RepeatWrapping;
    mdTexture.repeat.setScalar(4);
  }, [md]);

  useMemo(() => {
    maTexture.wrapS = maTexture.wrapT = THREE.RepeatWrapping;
    maTexture.repeat.setScalar(4);
  }, [ma]);

  return (
    <>
      <CommonViewer />
      {/* <pointLight position={[3, 0, 3]} intensity={5} color={"#ffbe0b"} />
      <pointLight position={[-3, 0, 3]} intensity={5} color={"#ffbe0b"} />
      <pointLight position={[-3, -3, -3]} intensity={5} color={"#ffb600"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#ffbe0b"} />
      <pointLight position={[0, 0, 5]} intensity={5} color={"#fcbf49"} /> */}
      {/* <pointLight position={[0, -3, 0]} intensity={10} color={"#0a0908"} /> */}
      {/* <Environment preset="city" /> */}

      <pointLight position={[3, -1, 3]} intensity={5} color={"#00b4d8"} />
      <rectAreaLight
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -5, -1]}
        intensity={10}
        color={"#caf0f8"}
      />

      <Sparkles
        count={500}
        scale={[10, 5, 10]}
        size={1.5}
        speed={2}
        color={"#4cc9f0"}
      />
      <mesh
        scale={[4, 4, 4]}
        position={[0, 1.5, 0]}
        // rotation={[Math.PI / 6, Math.PI / 2, 0]}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={mTexture}
          normalMap={mnTexture}
          normalScale={[50, 50]}
          displacementMap={mdTexture}
          displacementScale={0.05}
          aoMap={maTexture}
          aoMapIntensity={1.5}
          //   bumpMap={sandBTexture}
          //   bumpScale={1.5}
          roughness={0}
        />
      </mesh>
    </>
  );
};

export default AuroraView;
