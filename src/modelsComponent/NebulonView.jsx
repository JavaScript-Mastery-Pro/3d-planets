import React, { useMemo } from "react";
import CommonViewer from "../components/CommonViewer";
import { useTexture } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { ndm, ndn, ndd, nda } from "../utils";
import { Perf } from "r3f-perf";

const NebulonView = () => {
  const ndTexture = useTexture(ndm);
  const ndnTexture = useTexture(ndn);
  const nddTexture = useTexture(ndd);
  const ndaTexture = useTexture(nda);

  useMemo(() => {
    ndTexture.wrapS = ndTexture.wrapT = THREE.RepeatWrapping;
    ndTexture.repeat.setScalar(4);
  }, [ndm]);

  useMemo(() => {
    ndnTexture.wrapS = ndnTexture.wrapT = THREE.RepeatWrapping;
    ndnTexture.repeat.setScalar(4);
  }, [ndn]);

  useMemo(() => {
    nddTexture.wrapS = nddTexture.wrapT = THREE.RepeatWrapping;
    nddTexture.repeat.setScalar(4);
  }, [ndd]);

  useMemo(() => {
    ndaTexture.wrapS = ndaTexture.wrapT = THREE.RepeatWrapping;
    ndaTexture.repeat.setScalar(4);
  }, [nda]);
  return (
    <>
      <CommonViewer />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#d8f3dc"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#d8f3dc"} />
      <rectAreaLight
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -5, -1]}
        intensity={10}
        color={"#52b69a"}
      />

      <Sparkles
        count={500}
        scale={[15, 5, 10]}
        size={1.5}
        speed={2}
        color={"#52b788"}
      />
      <mesh scale={[4, 4, 4]} position={[0, 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={ndTexture}
          normalMap={ndnTexture}
          normalScale={[1, 1]}
          // displacementMap={nddTexture}
          // displacementScale={0.05}
          aoMap={ndaTexture}
          aoMapIntensity={0.9}
          //   bumpMap={sandBTexture}
          //   bumpScale={1.5}
          roughness={0}
          //   color={"yellow"}
        />
      </mesh>
    </>
  );
};

export default NebulonView;
