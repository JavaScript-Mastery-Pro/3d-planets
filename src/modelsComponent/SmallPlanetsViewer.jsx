import {
  Html,
  OrbitControls,
  Outlines,
  Sparkles,
  useTexture,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { progress } from "framer-motion";
import { Perf } from "r3f-perf";
import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { loaderVd } from "../utils";

const SmallPlanetsViewer = ({ tex }) => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());

  // const texture = useTexture(tex, (loader) => {
  //   console.log("loaded", loaded);
  //   setLoaded(false);
  // });
  // const texture = new THREE.TextureLoader().load(
  //   tex,
  //   (load) => {
  //     console.log(load);
  //   },
  //   (progress) => {
  //     console.log(progress);
  //   }
  // );

  useEffect(() => {
    sphere.current.visible = false;
  }, [tex]);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    console.log("Loading complete!");
    setIsLoading(false);
    sphere.current.visible = true;
  };
  manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    console.log(
      "Loading file: " +
        url +
        ".\nLoaded " +
        itemsLoaded +
        " of " +
        itemsTotal +
        " files."
    );
  };
  const texture = new THREE.TextureLoader(manager).load(
    tex
    // (load) => {
    //   console.log(load);
    // },
    // (progress) => {
    //   console.log(progress);
    // }
  );
  const [hovered, hover] = useState(false);
  const ref = useRef();
  return (
    <>
      {/* <Perf position={"bottom-left"} /> */}
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
      {isLoading && (
        // <mesh>
        //   <boxGeometry args={[1, 1, 1]} />
        //   <meshStandardMaterial color={"pink"} />
        // </mesh>
        <Html className="absolute w-96 h-60 -left-10 -top-28">
          <div className="w-60 h-60 absolute -left-20 flexCenter">
            {/* <p className="text-white">Loading...</p> */}
            <img src={loaderVd} width={100} height={100} />
          </div>
        </Html>
      )}
      <mesh
        scale={[2.25, 2.25, 2.25]}
        // onPointerOver={() => hover(true)}
        // onPointerOut={() => hover(false)}
        ref={sphere}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial map={texture} />
        {/* <Outlines thickness={0.025} color={hovered ? "#80ffdb" : "black"} /> */}
      </mesh>
    </>
  );
};

export default SmallPlanetsViewer;
