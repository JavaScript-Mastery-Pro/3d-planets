import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Sparkles, View } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";

// Import internals
import Nav from "../components/Nav";
import HeroOverLay from "./HeroOverLay";
import EarthDetail from "./EarthDetail";
import EarthView from "../modelsComponent/EarthView";
import CardsContainer from "../components/CardsContainer";
import EarthInfo from "../components/EarthInfo";

const RealHero = () => {
  const earth = useRef(new THREE.Mesh());
  const camera = useRef(new THREE.Camera());

  useEffect(() => {
    gsap.to(".view", {
      scrollTrigger: {
        trigger: ".detail",
        scrub: 0.2,
        start: "-50% center",
        end: "bottom bottom",
        // markers: true,
      },
      top: "110%",
      left: "45%",
      transform: "translateX(0%)  ",
      duration: 5,
      ease: "power1.out",
      immediateRender: false,
    });
    gsap.to(
      ".view",
      {
        scrollTrigger: {
          trigger: ".info",
          scrub: 0.2,
          start: "-50% center",
          end: "bottom 110%",
          // markers: true,
        },
        top: "200%",
        left: "5%",
        transform: "translateX(0%)",
        duration: 5,
        ease: "power1.in",
        immediateRender: false,
      },
      "<"
    );
  }, []);

  return (
    <div className="w-screen px-20">
      <Nav border={true} isBack={false} />
      <Canvas
        className="w-screen h-screen z-50 "
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
      </Canvas>
      <EarthView camera={camera} earth={earth} view={"view"} detail={true} />

      <HeroOverLay />
      <div className="h-screen relative flex justify-start items-center detail">
        <EarthDetail />
      </div>
      <div className="h-screen relative flex justify-end items-center info">
        <EarthInfo />
      </div>
      <div className="my-32">
        <h1 className="text-5xl text-center font-sans tracking-wider">
          EXPLORE OTHER PLANETS
        </h1>
        <CardsContainer restrict={true} />
      </div>
      <div>
        <Nav border={false} isBack={false} />
      </div>
    </div>
  );
};

export default RealHero;
