import { Html, View } from "@react-three/drei";
import React, { useRef } from "react";

import * as THREE from "three";
import Common from "./Common";

const GroupComponent = () => {
  const gpRef = useRef(new THREE.Group());

  return (
    <Html className="border border-yellow-500 w-screen h-screen -translate-x-[50%] ">
      <group ref={gpRef}>
        <View className="w-screen h-[50%] absolute bottom-0  border border-red-500 circ1">
          <Common />
          <mesh>
            <sphereGeometry />
            <meshStandardMaterial color={"yellow"} wireframe />
          </mesh>
        </View>
      </group>
    </Html>
  );
};

export default GroupComponent;
