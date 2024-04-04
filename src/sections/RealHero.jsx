import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Import internals
import Nav from "../components/Nav";
import HeroOverLay from "./HeroOverLay";
import EarthDetail from "./EarthDetail";
import EarthView from "../PlanetsComponents/EarthView";
import CardsContainer from "../components/CardsContainer";
import EarthInfo from "../components/EarthInfo";

let mobile = window.innerWidth < 768;

const RealHero = () => {
  useEffect(() => {
    gsap.to(".view", {
      scrollTrigger: {
        trigger: ".detail",
        scrub: 0.2,
        start: "-50% center",
        end: "bottom bottom",
        // markers: true,
      },
      top: mobile ? "130%" : "110%",
      left: mobile ? "0%" : "45%",
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
        top: mobile ? "225%" : "205%",
        left: mobile ? "0%" : "5%",
        transform: "translateX(0%)",
        duration: 10,
        ease: "power1.in",
        immediateRender: false,
      },
      "<"
    );
  }, []);

  return (
    <div className="w-screen px-10 lg:px-20 ">
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
      <EarthView view={"view"} />

      <HeroOverLay />
      <div className="h-screen relative flex justify-start items-center detail">
        <EarthDetail />
      </div>
      <div className="md:h-screen h-full relative flex justify-end items-center info">
        <EarthInfo />
      </div>
      <div className="md:my-32">
        <h1 className="text-lg font-extrabold md:text-5xl text-center font-orbiton tracking-wider">
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
