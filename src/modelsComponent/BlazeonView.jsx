import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import React, { useMemo, useState, useRef, useEffect } from "react";

// Internal imports
import { fa, fd, fm, fn } from "../utils";
import CommonViewer from "../components/CommonViewer";
import PlanetLoader from "../components/PlanetLoader";

const BlazeonView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());

  useEffect(() => {
    sphere.current.visible = false;
  }, [fa, fd, fm, fn]);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    setIsLoading(false);
    sphere.current.visible = true;
  };

  const texture = new THREE.TextureLoader(manager).load(fm);
  const normal = new THREE.TextureLoader(manager).load(fn);
  const displacement = new THREE.TextureLoader(manager).load(fa);
  const aomap = new THREE.TextureLoader(manager).load(fd);

  useMemo(() => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.setScalar(4);
  }, [texture]);

  useMemo(() => {
    normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
    normal.repeat.setScalar(4);
  }, [normal]);

  useMemo(() => {
    displacement.wrapS = displacement.wrapT = THREE.RepeatWrapping;
    displacement.repeat.setScalar(4);
  }, [displacement]);

  useMemo(() => {
    aomap.wrapS = aomap.wrapT = THREE.RepeatWrapping;
    aomap.repeat.setScalar(4);
  }, [aomap]);

  return (
    <>
      <CommonViewer />

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

      <PlanetLoader isLoading={isLoading} />

      <mesh scale={[4, 4, 4]} position={[0, 1.5, 0]} ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
        {/* you can play around here */}
        <meshStandardMaterial
          map={texture}
          normalMap={normal}
          normalScale={0.1}
          // displacementMap={displacement}
          // displacementScale={0.01}
          aoMap={aomap}
          aoMapIntensity={0.5}
          roughness={0}
        />
      </mesh>
    </>
  );
};

export default BlazeonView;
