import React from "react";
import Hero from "./Hero";
import SeparatePlanet from "./SeparatePlanet";
import RealHero from "./RealHero";

const Home = () => {
  return (
    <div className="w-screen h-full overflow-hidden bg-planet-card-bg bg-cover">
      {/* <Hero /> */}
      <RealHero />
      {/* <SeparatePlanet /> */}
    </div>
  );
};

export default Home;
