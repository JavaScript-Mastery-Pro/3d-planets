import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import ViewComponent from "../components/ViewComponent";
import GroupComponent from "../components/GroupComponent";
import Implement2D from "../components/Implement2D";

const Hero = () => {
  return (
    <>
      <Canvas
        className="w-full h-full border border-blue-500"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
        eventSource={document.getElementById("root")}
      >
        <View.Port />
        {/* <GroupComponent /> */}
      </Canvas>
      {/* <ViewComponent /> */}
      <Implement2D />
    </>
  );
};

export default Hero;
