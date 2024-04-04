import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// Internal imports
import PlanetLoader from "../components/PlanetLoader";

const SmallPlanetsViewer = ({ tex }) => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());

  useEffect(() => {
    sphere.current.visible = false;
  }, [tex]);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    setIsLoading(false);
    sphere.current.visible = true;
  };

  const texture = new THREE.TextureLoader(manager).load(tex);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        rotateSpeed={0.2}
        autoRotate
        autoRotateSpeed={0.2}
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

      <mesh scale={[2.25, 2.25, 2.25]} ref={sphere}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

export default SmallPlanetsViewer;
