import { Sparkles } from "@react-three/drei";
import React, { useEffect, useMemo, useState, useRef } from "react";
import * as THREE from "three";
// Internal imports
import { mm, mn, md, ma } from "../utils";
import CommonViewer from "../components/CommonViewer";
import PlanetLoader from "../components/PlanetLoader";

const AuroraView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());

  useEffect(() => {
    sphere.current.visible = false;
  }, [mm, mn, md, ma]);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    setIsLoading(false);
    sphere.current.visible = true;
  };

  const texture = new THREE.TextureLoader(manager).load(mm);
  const normal = new THREE.TextureLoader(manager).load(mn);
  const displacement = new THREE.TextureLoader(manager).load(md);
  const aomap = new THREE.TextureLoader(manager).load(ma);

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

      <PlanetLoader isLoading={isLoading} />

      <mesh scale={[4, 4, 4]} position={[0, 1.5, 0]} ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          normalMap={normal}
          normalScale={3}
          displacementMap={displacement}
          displacementScale={0.05}
          aoMap={aomap}
          aoMapIntensity={1.5}
          roughness={0}
        />
      </mesh>
    </>
  );
};

export default AuroraView;
