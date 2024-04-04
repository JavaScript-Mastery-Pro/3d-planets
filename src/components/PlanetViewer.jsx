import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import CommonViewer from "./CommonViewer";
import PlanetLoader from "./PlanetLoader";

const PlanetViewer = ({
  txt,
  nor,
  dis,
  ao,
  rou,
  sparkle,
  rect,
  p1,
  p2,
  roughnessScale,
  normalScale,
  displacementScale,
  aoMapIntensity,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());

  const scalingFactor = Math.min(Math.max(window.innerWidth / 1500, 0.5), 0.97);

  useEffect(() => {
    sphere.current.visible = false;
    console.log(rou);
  }, [txt, nor, dis, ao, rou]);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    setIsLoading(false);
    sphere.current.visible = true;
  };

  const texture = new THREE.TextureLoader(manager).load(txt);
  const normal = new THREE.TextureLoader(manager).load(nor);
  const displacement = new THREE.TextureLoader(manager).load(ao);
  const aomap = new THREE.TextureLoader(manager).load(dis);
  const roughness = new THREE.TextureLoader(manager).load(rou);

  useMemo(() => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.setScalar(4);
  }, [texture]);

  useMemo(() => {
    normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
    normal.repeat.setScalar(4);
  }, [normal]);

  useMemo(() => {
    displacement.wrapS = displacement.wrapT = THREE.RepeatWrapping;
    displacement.repeat.setScalar(4);
  }, [displacement]);

  useMemo(() => {
    aomap.wrapS = aomap.wrapT = THREE.RepeatWrapping;
    aomap.repeat.setScalar(4);
  }, [aomap]);

  useMemo(() => {
    if (rou === null) return;
    roughness.wrapS = roughness.wrapT = THREE.RepeatWrapping;
    roughness.repeat.setScalar(4);
  }, [roughness]);

  return (
    <>
      <CommonViewer sparkle={sparkle} rectAreaLight={rect} p1={p1} p2={p2} />

      <PlanetLoader isLoading={isLoading} />

      <mesh
        scale={scalingFactor * 4}
        position={[0, scalingFactor * 1.5, 0]}
        ref={sphere}
      >
        <sphereGeometry args={[1, 32, 32]} />
        {/* you can play around here */}
        <meshStandardMaterial
          map={texture}
          normalMap={normal}
          normalScale={normalScale}
          displacementMap={displacement}
          displacementScale={displacementScale}
          aoMap={aomap}
          aoMapIntensity={aoMapIntensity}
          roughnessMap={roughness}
          roughness={roughnessScale}
        />
      </mesh>
    </>
  );
};

export default PlanetViewer;
