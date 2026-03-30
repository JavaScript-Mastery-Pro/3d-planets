import React, { useMemo } from "react";
import * as THREE from "three";

// Internal imports
import { verdantiaMap, verdantiaNormal, verdantiaDisplacement, verdantiaAO, SCENE, PLANET_SCALE, PLANET_OFFSET_Y, SPHERE_GEOMETRY } from "@c";
import CommonViewer from "@/components/sections/CommonViewer";
import PlanetLoader from "@/components/sections/PlanetLoader";
import { usePlanetLoader } from "@/hooks/usePlanetLoader";

const VerdantiaView = () => {
  const { isLoading, meshRef, manager } = usePlanetLoader([verdantiaAO, verdantiaDisplacement, verdantiaMap, verdantiaNormal]);

  const scalingFactor = Math.min(Math.max(window.innerWidth / SCENE.REFERENCE_WIDTH, SCENE.MIN_SCALE_FACTOR), SCENE.MAX_SCALE_FACTOR);

  const texture = new THREE.TextureLoader(manager).load(verdantiaMap);
  const normal = new THREE.TextureLoader(manager).load(verdantiaNormal);
  const displacement = new THREE.TextureLoader(manager).load(verdantiaDisplacement);
  const aomap = new THREE.TextureLoader(manager).load(verdantiaAO);

  useMemo(() => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.setScalar(SCENE.TEXTURE_REPEAT);
  }, [texture]);

  useMemo(() => {
    normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
    normal.repeat.setScalar(SCENE.TEXTURE_REPEAT);
  }, [normal]);

  useMemo(() => {
    displacement.wrapS = displacement.wrapT = THREE.RepeatWrapping;
    displacement.repeat.setScalar(SCENE.TEXTURE_REPEAT);
  }, [displacement]);

  useMemo(() => {
    aomap.wrapS = aomap.wrapT = THREE.RepeatWrapping;
    aomap.repeat.setScalar(SCENE.TEXTURE_REPEAT);
  }, [aomap]);

  return (
    <>
      <CommonViewer sparkle={"#ffd60a"} rectAreaLight={"#ffd60a"} />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#fdc500"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#ff7b00"} />

      <PlanetLoader isLoading={isLoading} />

      <mesh
        scale={scalingFactor * PLANET_SCALE.DETAIL}
        position={[0, scalingFactor * PLANET_OFFSET_Y.DETAIL, 0]}
        ref={meshRef}
      >
        <sphereGeometry args={SPHERE_GEOMETRY.DETAIL} />
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
