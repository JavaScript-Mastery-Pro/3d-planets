import { Environment, Lightformer, Sparkles, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

// external
import ViewComponent from "../components/ViewComponent";
import GroupComponent from "../components/GroupComponent";
import Implement2D from "../components/Implement2D";
import Nav from "../components/Nav";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const Hero = () => {
  return (
    // bg-planet-card-bg bg-cover
    <div className="w-screen bg-planet-card-bg bg-cover px-20">
      <Nav border={true} isBack={false} />
      <Canvas
        className="w-screen h-screen"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
        eventSource={document.getElementById("root")}
        // flat={true}
      >
        <View.Port />
      </Canvas>
      {/* <GroupComponent /> */}
      {/* <ViewComponent /> */}
      <Implement2D />
    </div>
  );
};

export default Hero;
