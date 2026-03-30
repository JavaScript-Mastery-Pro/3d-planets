import { OrbitControls } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

// Internal imports
import { SCENE, PLANET_SCALE, SPHERE_GEOMETRY } from "@c";
import PlanetLoader from "@/components/sections/PlanetLoader";
import { usePlanetLoader } from "@/hooks/usePlanetLoader";

const SmallPlanetsViewer = ({ tex }) => {
  const { isLoading, meshRef, manager } = usePlanetLoader([tex]);

  const texture = new THREE.TextureLoader(manager).load(tex);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        rotateSpeed={SCENE.ORBIT_ROTATE_SPEED}
        autoRotate
        autoRotateSpeed={SCENE.ORBIT_AUTO_ROTATE_SPEED}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <ambientLight intensity={2} />

      <rectAreaLight
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -3, -1]}
        intensity={5}
        color={"#f8f9fa"}
      />

      <PlanetLoader isLoading={isLoading} />

      <mesh scale={[PLANET_SCALE.SMALL, PLANET_SCALE.SMALL, PLANET_SCALE.SMALL]} ref={meshRef}>
        <sphereGeometry args={SPHERE_GEOMETRY.SMALL} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

export default SmallPlanetsViewer;
