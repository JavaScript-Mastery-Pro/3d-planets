import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import {
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  Sparkles,
  View,
  useProgress,
  useTexture,
} from "@react-three/drei";
import Info from "./HeroOverLay";
import HeroOverLay from "./HeroOverLay";
import gsap from "gsap";
import EarthDetail from "./EarthDetail";
import { jm } from "../utils";
import EarthView from "../modelsComponent/EarthView";
import * as THREE from "three";
import CardsContainer from "../components/CardsContainer";
import EarthInfo from "../components/EarthInfo";

const RealHero = () => {
  const [loaded, setLoaded] = useState(false);

  const earth = useRef(new THREE.Mesh());
  const camera = useRef(new THREE.Camera());

  const { active, progress } = useProgress();

  useEffect(() => {
    // gsap.to(earth.current.scale, {
    //   scrollTrigger: {
    //     trigger: ".detail",
    //     scrub: 0.2,
    //     start: "-50% center",
    //     end: "bottom bottom",
    //     markers: true,
    //   },
    //   // border: "3px solid red",
    //   x: 1,
    //   y: 1,
    //   z: 1,
    //   duration: 5,
    //   immediateRender: false,
    // });
    // gsap.to(earth.current.position, {
    //   scrollTrigger: {
    //     trigger: ".detail",
    //     scrub: 0.2,
    //     start: "-50% center",
    //     end: "bottom bottom",
    //     markers: true,
    //   },
    //   // border: "3px solid red",
    //   x: 3,
    //   duration: 5,
    //   immediateRender: false,
    // });
    // gsap.to(camera.current.position, {
    //   scrollTrigger: {
    //     trigger: ".detail",
    //     scrub: 0.2,
    //     start: "-50% center",
    //     end: "bottom bottom",
    //     markers: true,
    //   },
    //   // border: "3px solid red",
    //   x: 3,
    //   duration: 5,
    //   immediateRender: false,
    // });
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
      transform: "translateX(0%)",
      // border: "1px solid red",
      duration: 5,
      ease: "power1.out",
      immediateRender: false,
    });
    gsap.to(".view", {
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
      // border: "1px solid red",
      duration: 5,
      ease: "power1.in",
      immediateRender: false,
    }, "<");
  }, []);

  return (
    <div className="w-screen px-20">
      <Nav border={true} isBack={false} />
      <Canvas
        className="w-screen h-screen border-2 border-red-500 z-50"
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
      <EarthView camera={camera} earth={earth} view={"view"} />

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
