import React, { useMemo, useState, useEffect, useRef } from "react";
import * as THREE from "three";

// Internal imports
import CommonViewer from "../components/CommonViewer";
import { im, inn, idd, ia, ir } from "../utils";
import PlanetLoader from "../components/PlanetLoader";

const IgnisMajorView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());

  useEffect(() => {
    sphere.current.visible = false;
  }, [im, inn, idd, ia, ir]);

  const scalingFactor = Math.min(Math.max(window.innerWidth / 1200, 0.5), 1.01);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    setIsLoading(false);
    sphere.current.visible = true;
  };

  const texture = new THREE.TextureLoader(manager).load(im);
  const normal = new THREE.TextureLoader(manager).load(inn);
  const displacement = new THREE.TextureLoader(manager).load(idd);
  const aomap = new THREE.TextureLoader(manager).load(ia);
  const roughness = new THREE.TextureLoader(manager).load(ir);

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
      <CommonViewer sparkle={"#ffffff"} rectAreaLight={"#edf2f4"} />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#d8f3dc"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#d8f3dc"} />

      <PlanetLoader isLoading={isLoading} />

      <mesh
        scale={scalingFactor * 4}
        position={[0, scalingFactor * 1.5, 0]}
        ref={sphere}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          normalMap={normal}
          normalScale={0.5}
          aoMap={aomap}
          aoMapIntensity={0.5}
          displacementMap={displacement}
          displacementScale={0.05}
          roughnessMap={roughness}
          roughness={0.5}
        />
      </mesh>
    </>
  );
};

export default IgnisMajorView;
