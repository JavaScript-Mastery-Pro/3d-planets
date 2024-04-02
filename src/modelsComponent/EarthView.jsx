import {
  CubeCamera,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Sparkles,
  View,
  useScroll,
  useTexture,
} from "@react-three/drei";
import React, { Suspense, useEffect, useRef } from "react";
import { jm, ndm } from "../utils";
import { useFrame } from "@react-three/fiber";

const EarthView = ({ camera, earth, view }) => {
  return (
    <>
      <View
        className={`w-[50vw] h-[90vh] absolute -translate-x-[50%] left-[50%] top-96 z-[100] ${view}`}
      >
        <ambientLight intensity={2} />
        <Sparkles
          count={500}
          scale={[15, 10, 10]}
          size={1.5}
          speed={2}
          color={"#caf0f8"}
        />
        <OrbitControls
          enableZoom={false}
          rotateSpeed={0.2}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          makeDefault
          ref={camera}
        />
        <PerspectiveCamera ref={camera} position={[0, 0, 0.0001]} />
        <mesh
          scale={[2.6, 2.6, 2.6]}
          position={[0, -0.5, 0]}
          // rotation={[3.2, 0, 0]}
          ref={earth}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={"pink"} wireframe />
        </mesh>
      </View>
    </>
  );
};

export default EarthView;
