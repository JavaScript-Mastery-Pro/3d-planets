import React from "react";
import Nav from "../components/Nav";
import CardsContainer from "../components/CardsContainer";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Perf } from "r3f-perf";

const PlanetLists = () => {
  return (
    <div className="w-screen h-full bg-planet-card-bg bg-cover bg-no-repeat px-20 overflow-x-hidden">
      <Nav border={true} isBack={false} />

      <CardsContainer restrict={false} />
    </div>
  );
};

export default PlanetLists;
