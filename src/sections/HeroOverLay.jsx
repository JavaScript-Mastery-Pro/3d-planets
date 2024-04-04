import React from "react";
import Button from "../components/Button";

const HeroOverLay = () => {
  return (
    <div className="h-screen relative flex flex-col items-center">
      <p className="font-orbiton text-center tracking-[1rem] text-lg mt-32 md:mt-24 mb-8">
        PLANET
      </p>
      <h1 className="earth-title">Earth</h1>
      <div className="underline-div-div"></div>
      <p className="sub-text text-lg mt-10 tracking-wide text-center">
        Earth: A vibrant planet rich in life and natural beauty. Our home.
      </p>
      <Button text="LEARN MORE" />
    </div>
  );
};

export default HeroOverLay;
