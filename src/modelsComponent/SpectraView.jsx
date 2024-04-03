import React, { useMemo, useEffect, useState, useRef } from "react";
import CommonViewer from "../components/CommonViewer";
import { Sparkles } from "@react-three/drei";

// Internal imports
import { sa, sd, sm, sn, sr } from "../utils";
import * as THREE from "three";
import PlanetLoader from "../components/PlanetLoader";

const SpectraView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());

  useEffect(() => {
    sphere.current.visible = false;
  }, [sa, sd, sm, sn, sr]);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    setIsLoading(false);
    sphere.current.visible = true;
  };

  const texture = new THREE.TextureLoader(manager).load(sm);
  const normal = new THREE.TextureLoader(manager).load(sn);
  const displacement = new THREE.TextureLoader(manager).load(sd);
  const aomap = new THREE.TextureLoader(manager).load(sa);
  const roughness = new THREE.TextureLoader(manager).load(sr);

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

  useMemo(() => {
    roughness.wrapS = roughness.wrapT = THREE.RepeatWrapping;
    roughness.repeat.setScalar(4);
  }, [roughness]);

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

      <PlanetLoader isLoading={isLoading} />

      <mesh scale={[4, 4, 4]} position={[0, 1.5, 0]} ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          normalMap={normal}
          normalScale={[1, 1]}
          // displacementMap={ldTexture}
          // displacementScale={0.05}
          aoMap={aomap}
          aoMapIntensity={0.9}
          roughnessMap={roughness}
          roughness={0}
        />
      </mesh>
    </>
  );
};

export default SpectraView;
