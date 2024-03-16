import { View } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import Common from "./Common";
import gsap from "gsap";
import * as THREE from "three";

const Implement2D = () => {
  const [deg, setDeg] = useState(0);
  const [isBigSphere, setIsBigSphere] = useState(false);
  const [right, setRight] = useState();
  const [left, setLeft] = useState();

  const circ1Ref = useRef(new THREE.Mesh());
  const circ2Ref = useRef(new THREE.Mesh());
  const circ3Ref = useRef(new THREE.Mesh());
  const circ4Ref = useRef(new THREE.Mesh());

  const [sphere, setSphere] = useState({
    prev: [circ4Ref, ".obj-4"],
    current: [circ1Ref, ".obj-1"],
    next: [circ2Ref, ".obj-2"],
  });

  const rotateLeft = (side) => {
    setDeg((prevDeg) => (side ? prevDeg - 90 : prevDeg + 90));
  };

  const handleOrbit = (event) => {
    if (event.target.classList.contains("object")) {
      // determines the direction (left or right)
      if (event.clientX < window.innerWidth * 0.25) {
        console.log("left", event.target);
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
        if (sphere.next[1] === ".obj-3" || sphere.next[1] === ".obj-1") {
          gsap.to(`${sphere.next[1]}`, {
            width: "50vw",
            height: "250vh",
            duration: 1,
          });
        } else {
          gsap.to(`${sphere.next[1]}`, {
            height: "50vw",
            width: "250vh",
            // border: "3px solid violet",
          });
        }
        gsap.to(`${sphere.current[1]}`, {
          width: "200px",
          height: "500px",
          // border: "5px solid brown",
          duration: 1,
        });

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
      }
    }
  };

  return (
    <div className="box">
      <div
        className="orbit"
        style={{ transform: `rotateX(70deg) rotate(${deg}deg)` }}
        onClick={handleOrbit}
      >
        <div className="obj obj-1 obj-up" deg="0">
          <View className="w-full h-full object  ">
            <Common />
            <mesh
              position={[0, 0, 0]}
              scale={[2, 2, 2]}
              ref={circ1Ref}
              onClick={() =>
                setSphere({
                  prev: [circ4Ref, ".obj-4"],
                  current: [circ1Ref, ".obj-1"],
                  next: [circ2Ref, ".obj-2"],
                })
              }
            >
              <sphereGeometry />
              <meshStandardMaterial color={"blue"} wireframe />
            </mesh>
          </View>
        </div>
        <div className="obj obj-2" deg="90">
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
                })
              }
            >
              <sphereGeometry />
              <meshStandardMaterial color={"green"} wireframe />
            </mesh>
          </View>
        </div>
        <div className="obj obj-3 obj-up" deg="180">
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
                })
              }
            >
              <sphereGeometry />
              <meshStandardMaterial color={"red"} wireframe />
            </mesh>
          </View>
        </div>
        <div className="obj obj-4" deg="270">
          <View className="w-full h-full object">
            <Common />
            <mesh
              position={[0, 0, 0]}
              scale={[2, 2, 2]}
              ref={circ4Ref}
              onClick={() =>
                setSphere({
                  prev: [circ3Ref, ".obj-3"],
                  current: [circ4Ref, ".obj-4"],
                  next: [circ1Ref, ".obj-1"],
                })
              }
            >
              <sphereGeometry />
              <meshStandardMaterial color={"orange"} wireframe />
            </mesh>
          </View>
        </div>
      </div>
    </div>
  );
};

export default Implement2D;
