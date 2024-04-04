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
let mobile = window.innerWidth < 768;

const EarthView = ({ view }) => {
  const [isLoading, setIsLoading] = useState(true);
  const earthMesh = useRef(new THREE.Mesh());
  const cloudMesh = useRef(new THREE.Mesh());

  const scalingFactor = Math.min(Math.max(window.innerWidth / 1200, 0.5), 1.01);

  useEffect(() => {
    earthMesh.current.visible = false;
  }, [es, eb, ec, em, en]);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    setIsLoading(false);
    earthMesh.current.visible = true;
  };

  const texture = new THREE.TextureLoader(manager).load(em);
  const normal = new THREE.TextureLoader(manager).load(en);
  const bump = new THREE.TextureLoader(manager).load(eb);
  const cloud = new THREE.TextureLoader(manager).load(ec);
  const spec = new THREE.TextureLoader(manager).load(es);

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
          enableRotate={mobile ? false : true}
          enableZoom={false}
          rotateSpeed={0.2}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          makeDefault
        />
        <PerspectiveCamera position={[0, 0, 0.0001]} />

        <mesh
          scale={scalingFactor * 2.5}
          position={[0, scalingFactor * -0.5, 0]}
          ref={earthMesh}
          rotation={[0, -1, 0]}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={texture}
            metalness={0}
            roughness={1}
            bumpMap={bump}
            bumpScale={1.3}
            normalMap={normal}
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
        <meshPhongMaterial map={map} transparent={true} />
      </mesh>
    </>
  );
};
