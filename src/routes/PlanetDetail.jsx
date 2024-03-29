import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { backImg, earthVd } from "../utils";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, View } from "@react-three/drei";
import Nav from "../components/Nav";
import EarthView from "../modelsComponent/EarthView";
import { planetDetailsLists } from "../constants";

const PlanetDetail = () => {
  const { id } = useParams();

  const back = useNavigate();
  const handleBack = () => {
    back("/planets");
  };

  const {
    title,
    des,
    diameter,
    gravity,
    area,
    vd,
    model: Model,
    color
  } = planetDetailsLists.find((planet) => planet.id === Number(id));

  return (
    // bg-planet-card-bg bg-cover
    <div
      className="w-screen h-full  px-20"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      {/* nav bar */}
      <Nav border={false} isBack={true} />

      {/* canvas for the planets */}
      <Canvas
        style={{
          width: "100vw",
          height: "60vh",
          position: "relative",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -15%)",
          // border: "1px solid red",
        }}
      >
        <Model />
      </Canvas>

      {/* Earth Text */}
      <div className="flex flex-col items-center -translate-y-14">
        <h1 className="font-sans text-8xl font-bold">{title}</h1>
        <div className="w-28 h-2 rounded-lg bg-skyBlue"></div>

        <p className="detail-sub-text mt-10">{des}</p>

        <div className="w-52 h-14 rounded-full bg-primary flexCenter mt-10">
          <p className="text-black font-semibold">SCROLL DOWN</p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 my-20">
          <div className="w-52 h-full flexCenter flex-col gap-1">
            <p className="info-sub-text">Diameters</p>
            <p className="font-sans text-3xl font-bold">{diameter} km</p>
          </div>
          <div className="w-52 h-full flexCenter flex-col gap-1">
            <p className="info-sub-text">Gravity</p>
            <p className="font-sans text-3xl font-bold">{gravity} g</p>
          </div>
          <div className="w-52 h-full flexCenter flex-col gap-1">
            <p className="info-sub-text">Surface Area</p>
            <p className="font-sans text-3xl font-bold">{area}M SM</p>
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
          src={vd}
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
          <Nav border={false} isBack={false} />
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
