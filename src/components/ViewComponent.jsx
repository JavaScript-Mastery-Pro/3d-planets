import { Html, View } from "@react-three/drei";
import React, { useContext, useEffect, useRef, useState } from "react";
import Common from "./Common";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";

const ViewComponent = () => {
  // const { setClickId } = useContext(AllContext);

  const [clickId, setClickId] = useState(Number);

  const circ1Ref = useRef(new THREE.Mesh());
  const circ2Ref = useRef(new THREE.Mesh());
  const circ3Ref = useRef(new THREE.Mesh());
  const circ4Ref = useRef(new THREE.Mesh());

  const [isHover, setIsHover] = useState(false);

  const [hovered, spread] = useHover();

  const data = [
    {
      id: 1,
      width: "100%",
      height: "50%",
      top: "",
      right: "",
      left: "0",
      bottom: "0",
      position: [0, -7.9, 0],
      scale: [9, 9, 9],
      color: "red",
    },
    {
      id: 2,
      width: "16.67%",
      height: "30%",
      left: "-4rem",
      top: "16rem",
    },
    {
      id: 3,
      width: 0,
      height: 0,
      left: "43%",
      top: "5rem",
    },
    {
      id: 4,
      with: 0,
      height: 0,
      left: "87%",
      top: "16rem",
    },
  ];

  useGSAP(() => {
    switch (clickId) {
      case 4:
        gsap.to(".circ1", {
          width: "16.67%",
          height: "30%",
          left: "-4rem",
          top: "16rem",
          duration: 2,
          ease: "power2",
        });
        gsap.to(
          circ1Ref.current.scale,
          {
            x: 2,
            y: 2,
            z: 2,
            duration: 2,
            ease: "power2",
          },
          "<"
        );
        gsap.to(circ1Ref.current.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: "power2",
        });

        // id 2
        gsap.to(".circ2", {
          left: "43%",
          top: "5rem",
          scale: 0,
          duration: 2,
          ease: "power2",
        });

        // id 3
        gsap.to(".circ3", {
          left: "87%",
          transform: "translateX(0)",
          top: "16rem",
          duration: 2,
          ease: "power2",
        });

        // id 4
        gsap.to(".circ4", {
          width: "100%",
          height: "50%",
          left: "0",
          top: "50%",
          duration: 2,
          ease: "power2",
        });
        gsap.to(
          circ4Ref.current.scale,
          {
            x: 9,
            y: 9,
            z: 9,
            duration: 2,
            ease: "power2",
          },
          "<"
        );
        gsap.to(circ4Ref.current.position, {
          x: 0,
          y: -7.9,
          z: 0,
          duration: 2,
          ease: "power2",
        });

        break;

      case 3:
        gsap.to(".circ4", {
          width: "16.67%",
          height: "30%",
          left: "-4rem",
          top: "16rem",
          duration: 2,
          ease: "power2",
        });
        gsap.to(
          circ4Ref.current.scale,
          {
            x: 2,
            y: 2,
            z: 2,
            duration: 2,
            ease: "power2",
          },
          "<"
        );
        gsap.to(circ4Ref.current.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: "power2",
        });

        // id 2
        gsap.to(".circ1", {
          left: "43%",
          top: "5rem",
          scale: 0,
          duration: 2,
          ease: "power2",
        });

        // id 3
        gsap.to(".circ2", {
          left: "87%",
          transform: "translateX(0)",
          top: "16rem",
          duration: 2,
          ease: "power2",
        });

        // id 4
        gsap.to(".circ3", {
          width: "100%",
          height: "50%",
          left: "0",
          top: "50%",
          duration: 2,
          ease: "power2",
        });
        gsap.to(
          circ3Ref.current.scale,
          {
            x: 9,
            y: 9,
            z: 9,
            duration: 2,
            ease: "power2",
          },
          "<"
        );
        gsap.to(circ3Ref.current.position, {
          x: 0,
          y: -7.9,
          z: 0,
          duration: 2,
          ease: "power2",
        });

        break;

      case 2:
        gsap.to(".circ3", {
          width: "16.67%",
          height: "30%",
          left: "-4rem",
          top: "16rem",
          duration: 2,
          ease: "power2",
        });
        gsap.to(
          circ3Ref.current.scale,
          {
            x: 2,
            y: 2,
            z: 2,
            duration: 2,
            ease: "power2",
          },
          "<"
        );
        gsap.to(circ3Ref.current.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: "power2",
        });

        // id 2
        gsap.to(".circ4", {
          left: "43%",
          top: "5rem",
          scale: 0,
          duration: 2,
          ease: "power2",
        });

        // id 3
        gsap.to(".circ1", {
          left: "87%",
          transform: "translateX(0)",
          top: "16rem",
          duration: 2,
          ease: "power2",
        });

        // id 4
        gsap.to(".circ2", {
          width: "100%",
          height: "50%",
          left: "0",
          top: "50%",
          duration: 2,
          ease: "power2",
        });
        gsap.to(
          circ2Ref.current.scale,
          {
            x: 9,
            y: 9,
            z: 9,
            duration: 2,
            ease: "power2",
          },
          "<"
        );
        gsap.to(circ2Ref.current.position, {
          x: 0,
          y: -7.9,
          z: 0,
          duration: 2,
          ease: "power2",
        });

        break;

      case 1:
        gsap.to(".circ2", {
          width: "16.67%",
          height: "30%",
          left: "-4rem",
          top: "16rem",
          duration: 2,
          ease: "power2",
        });
        gsap.to(
          circ2Ref.current.scale,
          {
            x: 2,
            y: 2,
            z: 2,
            duration: 2,
            ease: "power2",
          },
          "<"
        );
        gsap.to(circ2Ref.current.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: "power2",
        });

        // id 2
        gsap.to(".circ3", {
          left: "43%",
          top: "5rem",
          scale: 0,
          duration: 2,
          ease: "power2",
        });

        // id 3
        gsap.to(".circ4", {
          left: "87%",
          transform: "translateX(0)",
          top: "16rem",
          duration: 2,
          ease: "power2",
        });

        // id 4
        gsap.to(".circ1", {
          width: "100%",
          height: "50%",
          left: "0",
          top: "50%",
          duration: 2,
          ease: "power2",
        });
        gsap.to(
          circ1Ref.current.scale,
          {
            x: 9,
            y: 9,
            z: 9,
            duration: 2,
            ease: "power2",
          },
          "<"
        );
        gsap.to(circ1Ref.current.position, {
          x: 0,
          y: -7.9,
          z: 0,
          duration: 2,
          ease: "power2",
        });

        break;
      default:
        break;
    }
  }, [clickId]);

  return (
    <div className="w-screen h-screen border border-violet-300 relative overflow-x-hidden">
      <View className="w-screen h-[50%] absolute bottom-0  border border-red-500 circ1">
        <Common isHover={isHover} />
        <Html>
          <h1>1</h1>
        </Html>
        <mesh
          {...spread}
          position={[0, -7.9, 0]}
          scale={[9, 9, 9]}
          rotation={[0, 0, 0]}
          onClick={() => (isHover ? setClickId(1) : setClickId(null))}
          onPointerEnter={() => setIsHover(true)}
          ref={circ1Ref}
        >
          <sphereGeometry />
          <meshStandardMaterial color={hovered ? "red" : "pink"} wireframe />
        </mesh>
      </View>

      <View className="w-1/6 h-[30%] absolute -left-16 top-64 border border-yellow-500 circ2">
        <Common isHover={isHover} />
        <Html>
          <h1>2</h1>
        </Html>
        <mesh
          position={[0, 0, 0]}
          scale={[2, 2, 2]}
          onClick={() => setClickId(2)}
          ref={circ2Ref}
        >
          <sphereGeometry />
          <meshStandardMaterial color={"yellow"} wireframe />
        </mesh>
      </View>

      <View className="w-1/6 h-[30%] absolute  left-[50%] top-20 -translate-x-[50%] border border-green-500 circ3">
        <Common isHover={isHover} />
        <Html>
          <h1>3</h1>
        </Html>
        <mesh
          position={[0, 0, 0]}
          scale={[2, 2, 2]}
          onClick={() => setClickId(3)}
          ref={circ3Ref}
        >
          <sphereGeometry />
          <meshStandardMaterial color={"green"} wireframe />
        </mesh>
      </View>

      <View className="w-1/6 h-[30%] absolute -right-16 top-64 border border-blue-500 circ4">
        <Common isHover={isHover} />
        <Html>
          <h1>4</h1>
        </Html>
        <mesh
          position={[0, 0, 0]}
          scale={[2, 2, 2]}
          onClick={() => setClickId(4)}
          ref={circ4Ref}
        >
          <sphereGeometry />
          <meshStandardMaterial color={"blue"} wireframe />
        </mesh>
      </View>
    </div>
  );
};

function useHover() {
  const [hovered, hover] = useState(false);
  return [
    hovered,
    { onPointerOver: (e) => hover(true), onPointerOut: () => hover(false) },
  ];
}

export default ViewComponent;
