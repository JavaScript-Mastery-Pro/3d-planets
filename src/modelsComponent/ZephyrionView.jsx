import { Sparkles } from "@react-three/drei";
import React, { useMemo, useState, useEffect, useRef } from "react";
import * as THREE from "three";

// Internal imports
import { ja, jd, jm, jn } from "../utils";
import CommonViewer from "../components/CommonViewer";
import PlanetLoader from "../components/PlanetLoader";

const ZephyrionView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());

  useEffect(() => {
    sphere.current.visible = false;
  }, [ja, jd, jm, jn]);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    setIsLoading(false);
    sphere.current.visible = true;
  };

  const texture = new THREE.TextureLoader(manager).load(jm);
  const normal = new THREE.TextureLoader(manager).load(jn);
  const displacement = new THREE.TextureLoader(manager).load(jd);
  const aomap = new THREE.TextureLoader(manager).load(ja);

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

      <PlanetLoader isLoading={isLoading} />

      <mesh scale={[4, 4, 4]} position={[0, 1.5, 0]} ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          normalMap={normal}
          normalScale={1}
          displacementMap={displacement}
          displacementScale={0.05}
          aoMap={aomap}
          aoMapIntensity={0.5}
          roughness={1}
        />
      </mesh>
    </>
  );
};

export default ZephyrionView;
