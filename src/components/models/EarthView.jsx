import {
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
  View,
} from "@react-three/drei";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

// Internal imports
import { earthBump, earthCloud, earthMap, earthNormal, earthSpec, SCENE, PLANET_SCALE, PLANET_OFFSET_Y, SPHERE_GEOMETRY, CLOUD_ROTATION_SPEED, MOBILE_BREAKPOINT } from "@c";
import PLanetLoader from "@/components/sections/PlanetLoader";
import { usePlanetLoader } from "@/hooks/usePlanetLoader";

const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

const EarthView = ({ view }) => {
  const { isLoading, meshRef: earthMesh, manager } = usePlanetLoader([earthSpec, earthBump, earthCloud, earthMap, earthNormal]);
  const cloudMesh = useRef(new THREE.Mesh());

  const scalingFactor = Math.min(Math.max(window.innerWidth / SCENE.REFERENCE_WIDTH, SCENE.MIN_SCALE_FACTOR), SCENE.MAX_SCALE_FACTOR);

  // Load Earth textures
  const texture = new THREE.TextureLoader(manager).load(earthMap);
  const normal = new THREE.TextureLoader(manager).load(earthNormal);
  const bump = new THREE.TextureLoader(manager).load(earthBump);
  const cloud = new THREE.TextureLoader(manager).load(earthCloud);
  const spec = new THREE.TextureLoader(manager).load(earthSpec);

  // Configure bump map wrapping
  useMemo(() => {
    bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
    bump.repeat.setScalar(SCENE.TEXTURE_REPEAT);
  }, [bump]);

  useMemo(() => {
    normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
    normal.repeat.setScalar(SCENE.TEXTURE_REPEAT);
  }, [normal]);

  return (
    <>
      {/* for the whole canvas sparkles */}
      <View
        className={`w-screen h-[300vh] lg:h-[380vh] absolute -translate-x-[50%] left-[50%]`}
      >
        <Sparkles
          count={200}
          scale={[5, 15, 10]}
          size={1.5}
          speed={1}
          color={"#caf0f8"}
        />
      </View>
      <View
        className={`w-screen h-screen lg:w-[50vw] lg:h-[90vh] absolute -translate-x-[50%] left-[50%] top-96 z-[100] ${view}`}
      >
        <ambientLight intensity={3} />

        {/* rectAreaLight is used to give the earth some light from the left side */}
        <rectAreaLight
          scale={[5, 5, 5]}
          color={"#007f5f"}
          position={[-5, 3, 3]}
          intensity={2}
        />

        <rectAreaLight
          scale={[5, 5, 5]}
          color={"#f8f9fa"}
          position={[-4, -4, 3]}
          intensity={2}
        />

        <Sparkles
          count={100}
          scale={[5, 5, 10]}
          size={1.5}
          speed={1}
          color={"#caf0f8"}
        />
        <OrbitControls
          enableRotate={!isMobile}
          enableZoom={false}
          rotateSpeed={SCENE.ORBIT_ROTATE_SPEED}
          autoRotate
          autoRotateSpeed={SCENE.ORBIT_AUTO_ROTATE_SPEED}
          maxPolarAngle={Math.PI / 2} // to prevent the user from rotating the earth upside down
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          makeDefault
        />
        <PerspectiveCamera position={[0, 0, 0.0001]} />
        {/* show the loader when the textures are loading */}
        <PLanetLoader isLoading={isLoading} />
        <mesh
          scale={scalingFactor * PLANET_SCALE.EARTH}
          position={[0, scalingFactor * PLANET_OFFSET_Y.EARTH, 0]}
          ref={earthMesh}
          rotation={[0, -1, 0]}
        >
          <sphereGeometry args={SPHERE_GEOMETRY.DETAIL} />
          <meshStandardMaterial
            map={texture} // the texture is used to give the earth its color
            metalness={0}
            roughness={1}
            bumpMap={bump} // the bump map is used to give the earth some texture
            bumpScale={1.3}
            normalMap={normal} // the normal map is used to give the earth some depth
            normalScale={[3, 3]}
          />
        </mesh>

        <Cloud
          cloudMesh={cloudMesh}
          map={cloud}
          scalingFactor={scalingFactor}
        />
      </View>
    </>
  );
};

export default EarthView;

export const Cloud = ({ cloudMesh, map, scalingFactor }) => {
  useFrame(() => {
    cloudMesh.current.rotation.y += CLOUD_ROTATION_SPEED;
  });

  return (
    <>
      <mesh
        scale={scalingFactor * PLANET_SCALE.EARTH_CLOUD}
        position={[0, scalingFactor * PLANET_OFFSET_Y.EARTH, 0]}
        ref={cloudMesh}
      >
        <sphereGeometry args={SPHERE_GEOMETRY.DETAIL} />
        {/* https://threejs.org/docs/?q=mesh#api/en/materials/MeshPhongMaterial */}
        <meshPhongMaterial map={map} transparent={true} />
      </mesh>
    </>
  );
};
