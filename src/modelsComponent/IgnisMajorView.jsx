import React, { useMemo } from "react";
import CommonViewer from "../components/CommonViewer";
import { useTexture } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { im, inn, idd, ia, ir } from "../utils";
import { Perf } from "r3f-perf";

const IgnisMajorView = () => {
  const imTexture = useTexture(im);
  const innTexture = useTexture(inn);
  const iddTexture = useTexture(idd);
  const iaTexture = useTexture(ia);
  const irTexture = useTexture(ir);

  useMemo(() => {
    imTexture.wrapS = imTexture.wrapT = THREE.RepeatWrapping;
    imTexture.repeat.setScalar(4);
  }, [im]);

  useMemo(() => {
    innTexture.wrapS = innTexture.wrapT = THREE.RepeatWrapping;
    innTexture.repeat.setScalar(4);
  }, [inn]);

  useMemo(() => {
    iddTexture.wrapS = iddTexture.wrapT = THREE.RepeatWrapping;
    iddTexture.repeat.setScalar(4);
  }, [idd]);

  useMemo(() => {
    iaTexture.wrapS = iaTexture.wrapT = THREE.RepeatWrapping;
    iaTexture.repeat.setScalar(4);
  }, [ia]);

  useMemo(() => {
    irTexture.wrapS = irTexture.wrapT = THREE.RepeatWrapping;
    irTexture.repeat.setScalar(4);
  }, [ir]);

  return (
    <>
      <CommonViewer />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#d8f3dc"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#d8f3dc"} />
      <rectAreaLight
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -5, -1]}
        intensity={10}
        color={"#edf2f4"}
      />

      <Sparkles
        count={500}
        scale={[15, 5, 10]}
        size={1.5}
        speed={2}
        color={"#ffffff"}
      />
      <mesh scale={[4, 4, 4]} position={[0, 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={imTexture}
          normalMap={innTexture}
          normalScale={0.5}
          aoMap={iaTexture}
          aoMapIntensity={0.5}
          displacementMap={iddTexture}
          displacementScale={0.05}
          roughnessMap={irTexture}
          roughness={0}
        />
      </mesh>
    </>
  );
};

export default IgnisMajorView;
