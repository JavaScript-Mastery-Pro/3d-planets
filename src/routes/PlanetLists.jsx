import React from "react";
import Nav from "../components/Nav";
import CardsContainer from "../components/CardsContainer";

const PlanetLists = () => {
  return (
    <div className="w-screen h-screen bg-planet-card-bg bg-cover bg-no-repeat px-20 overflow-hidden">
      <Nav border={true}  isBack={false} />

      <CardsContainer />
    </div>
  );
};

export default PlanetLists;
