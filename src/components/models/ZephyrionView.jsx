import React, { useMemo } from "react";
import * as THREE from "three";

// Internal imports
import { zephyrionMap, zephyrionNormal, zephyrionDisplacement, zephyrionAO, SCENE, PLANET_SCALE, PLANET_OFFSET_Y, SPHERE_GEOMETRY } from "@c";
import CommonViewer from "@/components/sections/CommonViewer";
import PlanetLoader from "@/components/sections/PlanetLoader";
import { usePlanetLoader } from "@/hooks/usePlanetLoader";

const ZephyrionView = () => {
  const { isLoading, meshRef, manager } = usePlanetLoader([zephyrionAO, zephyrionDisplacement, zephyrionMap, zephyrionNormal]);

  const scalingFactor = Math.min(Math.max(window.innerWidth / SCENE.REFERENCE_WIDTH, SCENE.MIN_SCALE_FACTOR), SCENE.MAX_SCALE_FACTOR);

  const texture = new THREE.TextureLoader(manager).load(zephyrionMap);
  const normal = new THREE.TextureLoader(manager).load(zephyrionNormal);
  const displacement = new THREE.TextureLoader(manager).load(zephyrionDisplacement);
  const aomap = new THREE.TextureLoader(manager).load(zephyrionAO);

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
      <CommonViewer sparkle={"#52b788"} rectAreaLight={"#52b69a"} />

      <pointLight position={[3, 0, 3]} intensity={5} color={"#d8f3dc"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#d8f3dc"} />

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
