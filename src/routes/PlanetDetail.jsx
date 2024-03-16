import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { backImg, earthVd } from "../utils";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, View } from "@react-three/drei";
import Nav from "../components/Nav";

const PlanetDetail = () => {
  const { id } = useParams();

  const back = useNavigate();
  const handleBack = () => {
    back("/planets");
  };

  return (
    <div className="w-screen h-full bg-planet-card-bg bg-cover px-20">
      {/* nav bar */}
      <nav className="flex justify-between pt-10">
        <div className="flex cursor-pointer ">
          <img src={backImg} alt="back arrow" />
          <p
            className="sub-text ms-2 transition-all hover:text-primary"
            onClick={handleBack}
          >
            Back
          </p>
        </div>
        <div className="flex gap-10">
          <p className="sub-text">Home</p>
          <p className="sub-text">Planets</p>
        </div>
      </nav>

      {/* canvas for the planets */}
      <Canvas
        style={{
          width: "80vw",
          height: "60vh",
          position: "relative",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -13%) ",
        }}
      >
        <OrbitControls
          enableZoom={false}
          rotateSpeed={0.2}
          autoRotate
          autoRotateSpeed={0.2}
        />
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <mesh scale={[4, 4, 4]} position={[0, 1.5, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color={"#D3E7FF"} wireframe />
        </mesh>
      </Canvas>

      {/* Earth Text */}
      <div className="flex flex-col items-center -translate-y-14">
        <h1 className="font-sans text-8xl font-bold">Earth</h1>
        <div className="w-28 h-2 rounded-lg bg-skyBlue"></div>

        <p className="detail-sub-text mt-10">
          Earth, our home planet, has a diameter of about 12,742 kilometers. It
          completes one orbit around the Sun in approximately 365.25 days and
          rotates about its axis every 24 hours.
        </p>

        <div className="w-52 h-14 rounded-full bg-primary flexCenter mt-10">
          <p className="text-black font-semibold">SCROLL DOWN</p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 my-20">
          <div className="w-52 h-full flexCenter flex-col gap-1">
            <p className="info-sub-text">Diameters</p>
            <p className="font-sans text-3xl font-bold">12,742 km</p>
          </div>
          <div className="w-52 h-full flexCenter flex-col gap-1">
            <p className="info-sub-text">Gravity</p>
            <p className="font-sans text-3xl font-bold">0.376 g</p>
          </div>
          <div className="w-52 h-full flexCenter flex-col gap-1">
            <p className="info-sub-text">Surface Area</p>
            <p className="font-sans text-3xl font-bold">510.1M SM</p>
          </div>
        </div>

        <p className="detail-sub-text mb-8">
          Orbiting the Sun every 365.25 days, Earth boasts a varied topography,
          from towering mountain peaks to the depths of its oceans. Enveloped in
          an atmosphere primarily composed of nitrogen and oxygen, it nurtures
          life in every corner
        </p>
        <p className="detail-sub-text mb-8">
          Home to iconic landmarks like Mount Everest and the Pacific Ocean,
          Earth is a testament to the wonders of the universe, offering a haven
          for exploration and discovery.
        </p>
        <p className="detail-sub-text mb-16">
          Earth, our home planet, has a diameter of about 12,742 kilometers. It
          completes one orbit around the Sun in approximately 365.25 days and
          rotates about its axis every 24 hours. With a diverse surface, Earth
          is home to over 7.9 billion people and various ecosystems.
        </p>

        <video
          src={earthVd}
          autoPlay
          muted
          loop
          className="rounded-3xl w-[50vw] h-full"
        ></video>

        <p className="detail-sub-text mt-16 mb-8">
          The atmosphere, mainly composed of nitrogen and oxygen, sustains life,
          while iconic features like Mount Everest and the Pacific Ocean add to
          its natural beauty.
        </p>

        <p className="detail-sub-text mb-8">
          Geographically, Earth showcases awe-inspiring features, including the
          vast Pacific Ocean, the towering heights of Mount Everest at 8,848
          meters above sea level, and the profound depths of Challenger Deep in
          the Mariana Trench, reaching about 10,994 meters below sea.
        </p>

        <div className="w-48 h-14 rounded-full bg-primary flexCenter mt-10">
          <p className="text-black font-semibold">READ MORE</p>
        </div>

        <div className="w-full h-full mt-24">
          <Nav border={false} />
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
