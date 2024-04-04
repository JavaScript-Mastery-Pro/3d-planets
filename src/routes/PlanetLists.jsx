import React from "react";
import Nav from "../components/Nav";
import CardsContainer from "../components/CardsContainer";

const PlanetLists = () => {
  return (
    <div className="bg-planet-card-bg bg-cover bg-no-repeat px-10 md:px-20 pb-20 overflow-hidden">
      <Nav border={true} isBack={false} />

      <CardsContainer restrict={false} />
    </div>
  );
};

export default PlanetLists;
