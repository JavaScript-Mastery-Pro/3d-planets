import React, { useMemo } from "react";
import * as THREE from "three";

// Internal imports
import { auroraMap, auroraNormal, auroraDisplacement, auroraAO, SCENE, PLANET_SCALE, PLANET_OFFSET_Y, SPHERE_GEOMETRY } from "@c";
import CommonViewer from "@/components/sections/CommonViewer";
import PlanetLoader from "@/components/sections/PlanetLoader";
import { usePlanetLoader } from "@/hooks/usePlanetLoader";

const AuroraView = () => {
  const { isLoading, meshRef, manager } = usePlanetLoader([auroraMap, auroraNormal, auroraDisplacement, auroraAO]);

  const scalingFactor = Math.min(Math.max(window.innerWidth / SCENE.REFERENCE_WIDTH, SCENE.MIN_SCALE_FACTOR), SCENE.MAX_SCALE_FACTOR);

  const texture = new THREE.TextureLoader(manager).load(auroraMap);
  const normal = new THREE.TextureLoader(manager).load(auroraNormal);
  const displacement = new THREE.TextureLoader(manager).load(auroraDisplacement);
  const aomap = new THREE.TextureLoader(manager).load(auroraAO);

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
      <CommonViewer sparkle={"#4cc9f0"} rectAreaLight={"#caf0f8"} />

      <pointLight position={[3, -1, 3]} intensity={5} color={"#00b4d8"} />

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
