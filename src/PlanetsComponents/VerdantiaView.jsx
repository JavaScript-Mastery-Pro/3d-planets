import React, { useMemo, useState, useRef, useEffect } from "react";
import * as THREE from "three";

// Internal imports
import { la, ld, lm, ln } from "../utils";
import CommonViewer from "../components/CommonViewer";
import PlanetLoader from "../components/PlanetLoader";

const VerdantiaView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());

  useEffect(() => {
    sphere.current.visible = false;
  }, [la, ld, lm, ln]);

  const scalingFactor = Math.min(Math.max(window.innerWidth / 1200, 0.5), 1.01);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    setIsLoading(false);
    sphere.current.visible = true;
  };

  const texture = new THREE.TextureLoader(manager).load(lm);
  const normal = new THREE.TextureLoader(manager).load(ln);
  const displacement = new THREE.TextureLoader(manager).load(ld);
  const aomap = new THREE.TextureLoader(manager).load(la);

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
      <CommonViewer sparkle={"#ffd60a"} rectAreaLight={"#ffd60a"} />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#fdc500"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#ff7b00"} />

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
          normalScale={[1, 1]}
          // displacementMap={ldTexture}
          // displacementScale={0.05}
          aoMap={aomap}
          aoMapIntensity={0.9}
          roughness={1}
        />
      </mesh>
    </>
  );
};

export default VerdantiaView;
