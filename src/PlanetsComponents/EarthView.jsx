import {
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
  View,
} from "@react-three/drei";
import React, { useState, useMemo, useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

// Internal imports
import { eb, ec, em, en, es } from "../utils";
import PLanetLoader from "../components/PlanetLoader";
let mobile = window.innerWidth < 768; // let know the mobile device

const EarthView = ({ view }) => {
  const [isLoading, setIsLoading] = useState(true);
  const earthMesh = useRef(new THREE.Mesh()); // the earth sphere
  const cloudMesh = useRef(new THREE.Mesh()); // the cloud sphere

  const scalingFactor = Math.min(Math.max(window.innerWidth / 1200, 0.5), 1.01); // auto scale accordingly to the screen size

  useEffect(() => {
    earthMesh.current.visible = false; // hide the earth sphere
  }, [es, eb, ec, em, en]);

  // https://threejs.org/docs/#api/en/loaders/managers/LoadingManager
  // we will use the loading manager to know when the textures are loaded
  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    setIsLoading(false);
    earthMesh.current.visible = true;
  };

  // load the textures
  // https://threejs.org/docs/?q=texture#api/en/loaders/TextureLoader
  // we will use the texture loader to load the textures, and we will use the manager to know when the textures are loaded
  // this has more control than the useTexture hook from drei
  const texture = new THREE.TextureLoader(manager).load(em);
  const normal = new THREE.TextureLoader(manager).load(en);
  const bump = new THREE.TextureLoader(manager).load(eb);
  const cloud = new THREE.TextureLoader(manager).load(ec);
  const spec = new THREE.TextureLoader(manager).load(es);

  // wrap the textures with useMemo to avoid re-rendering
  useMemo(() => {
    bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
    bump.repeat.setScalar(4);
  }, [bump]);

  useMemo(() => {
    normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
    normal.repeat.setScalar(4);
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
          enableRotate={mobile ? false : true} // to prevent the user from rotating the earth on mobile for the scrolling
          enableZoom={false}
          rotateSpeed={0.2}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2} // to prevent the user from rotating the earth upside down
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          makeDefault
        />
        <PerspectiveCamera position={[0, 0, 0.0001]} />
        {/* show the loader when the textures are loading */}
        <PLanetLoader isLoading={isLoading} />
        <mesh
          scale={scalingFactor * 2.5}
          position={[0, scalingFactor * -0.5, 0]}
          ref={earthMesh}
          rotation={[0, -1, 0]}
        >
          <sphereGeometry args={[1, 32, 32]} />
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
          mobile={mobile}
        />
      </View>
    </>
  );
};

export default EarthView;

export const Cloud = ({ cloudMesh, map, scalingFactor }) => {
  useFrame(() => {
    cloudMesh.current.rotation.y += -0.0002; // I want the clouds move to different direction but if you want to move it to the same direction as the earth, you can change the sign to positive
  });

  return (
    <>
      <mesh
        scale={scalingFactor * 2.52}
        position={[0, scalingFactor * -0.5, 0]}
        ref={cloudMesh}
      >
        <sphereGeometry args={[1, 32, 32]} />
        {/* https://threejs.org/docs/?q=mesh#api/en/materials/MeshPhongMaterial */}
        <meshPhongMaterial map={map} transparent={true} />
      </mesh>
    </>
  );
};
