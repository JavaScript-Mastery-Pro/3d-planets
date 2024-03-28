import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  ScrollControls,
  Sparkles,
  View,
  useTexture,
} from "@react-three/drei";
import React, { useContext, useEffect, useRef, useState } from "react";
import Common from "./Common";
import gsap from "gsap";
import * as THREE from "three";
import { useLenis } from "@studio-freight/react-lenis";

import CardsContainer from "./CardsContainer";
import Nav from "./Nav";
import { AllContext } from "../context/All.context";
import Earth from "./planets/Earth";
import { earthColorTextureImg, earthTextureImg } from "../utils";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import EarthAo from "./planets/EarthAo";
import Sun from "./planets/Sun";

const Implement2D = () => {
  const [deg, setDeg] = useState(0);

  const circ1Ref = useRef(new THREE.Mesh());
  const circ2Ref = useRef(new THREE.Mesh());
  const circ3Ref = useRef(new THREE.Mesh());
  const circ4Ref = useRef(new THREE.Mesh());

  const [sphere, setSphere] = useState({
    prev: [circ4Ref, ".obj-4"],
    current: [circ1Ref, ".obj-1"],
    next: [circ2Ref, ".obj-2"],
    far: [circ3Ref, ".obj-3"],
  }); // sphere object

  const rotateLeft = (side) => {
    setDeg((prevDeg) => (side ? prevDeg - 90 : prevDeg + 90));
  };

  const handleOrbit = (event) => {
    if (event.target.classList.contains("object")) {
      // determines the direction (left or right)
      if (event.clientX < window.innerWidth * 0.25) {
        console.log("left", sphere.prev);
        rotateLeft(true);

        gsap.to(sphere.prev[0].current.scale, {
          x: 2,
          y: 2,
          z: 2,
          duration: 2,
        });
        gsap.to(sphere.current[0].current.scale, {
          x: 2,
          y: 2,
          z: 2,
          duration: 2,
        });
        gsap.to(
          sphere.next[0].current.scale,
          {
            x: 2,
            y: 2,
            z: 2,
            duration: 2,
          },
          "<"
        );
      } else if (event.clientX > window.innerWidth * 0.75) {
        console.log("right", sphere.next[1]);
        rotateLeft(false);

        if (sphere.next[1] == ".obj-3" || sphere.next[1] == ".obj-1") {
          console.log("obj-1/3");
          gsap.to(`${sphere.far[1]}`, {
            scale: 1,
            duration: 2,
          });
          gsap.to(`${sphere.prev[1]}`, {
            scale: 0,
            duration: 2,
          });
          gsap.to(`${sphere.current[1]}`, {
            width: "250px",
            height: "500px",
            duration: 2,
          });
          gsap.to(`${sphere.next[1]}`, {
            width: "50vw",
            height: "250vh",
            duration: 2,
          });
        } else {
          gsap.to(`${sphere.far[1]}`, {
            scale: 1,
            width: "500px",
            height: "250px",
            duration: 2,
          });
          gsap.to(`${sphere.prev[1]}`, {
            scale: 0,
            duration: 2,
          });
          gsap.to(`${sphere.current[1]}`, {
            width: "500px",
            height: "250px",
            duration: 2,
          });
          gsap.to(`${sphere.next[1]}`, {
            width: "250vh",
            height: "50vw",
            duration: 2,
          });
        }
      }
    }
  };

  useEffect(() => {
    gsap.to(".obj-1", {
      scrollTrigger: {
        trigger: ".first",
        scrub: 0.2,
        start: "-50% center",
        end: "bottom bottom",
        // markers: true,
      },
      // border: "3px solid red",
      width: "45vw",
      height: "200vh",
      right: "-60%",
      bottom: "-220%",
      duration: 5,
      immediateRender: false,
    });
  }, []);

  return (
    <div className="box">
      <div className="flex justify-center items-center -translate-y-52">
        <View className="w-screen h-full absolute">
          <Sparkles
            count={500}
            scale={[15, 15, 20]}
            size={1.5}
            speed={2}
            color={"#edf6f9"}
          />
        </View>
        <div
          className="orbit"
          style={{ transform: `rotateX(70deg) rotate(${deg}deg)` }}
          onClick={handleOrbit}
        >
          <div className="obj obj-1 obj-up  " deg="0">
            <View className="w-full h-full object  ">
              <Common />
              {/* <Sparkles
                count={1000}
                scale={[3, 3, 3]}
                size={1.5}
                speed={2}
                color={"cyan"}
              /> */}
              <Environment preset="forest" blur={1}>
                <Lightformer
                  rotation={[0, Math.PI / 2, 0]}
                  intensity={5}
                  color={"#03045e"}
                  scale={10}
                  position={[-5, -8, -5]}
                />
              </Environment>
              <mesh
                position={[0, 0, 0]}
                scale={[1.7, 1.7, 1.7]}
                rotation={[0, -Math.PI / 6, 0]}
                ref={circ1Ref}
                onClick={() =>
                  setSphere({
                    prev: [circ4Ref, ".obj-4"],
                    current: [circ1Ref, ".obj-1"],
                    next: [circ2Ref, ".obj-2"],
                    far: [circ3Ref, ".obj-3"],
                  })
                }
              >
                <sphereGeometry />
                <Earth />
              </mesh>
              <EarthAo />
            </View>
          </div>
          <div className="obj obj-2 " deg="90">
            <View className="w-full h-full object">
              <Common />
              <mesh
                position={[0, 0, 0]}
                scale={[2, 2, 2]}
                ref={circ2Ref}
                onClick={() =>
                  setSphere({
                    prev: [circ1Ref, ".obj-1"],
                    current: [circ2Ref, ".obj-2"],
                    next: [circ3Ref, ".obj-3"],
                    far: [circ4Ref, ".obj-4"],
                  })
                }
              >
                <sphereGeometry />
                <meshStandardMaterial color={"green"} wireframe />
              </mesh>
            </View>
          </div>
          <div className="obj obj-3 obj-up " deg="180">
            <View className="w-full h-full object">
              <Common />
              <mesh
                position={[0, 0, 0]}
                scale={[2, 2, 2]}
                ref={circ3Ref}
                onClick={() =>
                  setSphere({
                    prev: [circ2Ref, ".obj-2"],
                    current: [circ3Ref, ".obj-3"],
                    next: [circ4Ref, ".obj-4"],
                    far: [circ1Ref, ".obj-1"],
                  })
                }
              >
                <sphereGeometry />
                <meshStandardMaterial color={"red"} wireframe />
              </mesh>
            </View>
          </div>
          <div className="obj obj-4  " deg="270">
            <View className="w-full h-full object">
              <Common />
              {/* <Sparkles
                count={1000}
                scale={[3, 3, 3]}
                size={1.5}
                speed={2}
                color={"cyan"}
              /> */}
              <Environment preset="forest" blur={1}>
                <Lightformer
                  rotation={[Math.PI * 2, 0, 0]}
                  intensity={10}
                  color={"#03045e"}
                  scale={10}
                  position={[-5, -8, -5]}
                />
              </Environment>
              <mesh
                position={[0, 0, 0]}
                scale={[2, 2, 2]}
                ref={circ4Ref}
                onClick={() =>
                  setSphere({
                    prev: [circ3Ref, ".obj-3"],
                    current: [circ4Ref, ".obj-4"],
                    next: [circ1Ref, ".obj-1"],
                    far: [circ2Ref, ".obj-2"],
                  })
                }
              >
                <sphereGeometry />
                <Sun />
              </mesh>
            </View>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen px-20 first">SeparatePlanet</div>
      <CardsContainer />
      <Nav border={false} isBack={false} />
    </div>
  );
};

export default Implement2D;
