import React from "react";

const HeroOverLay = () => {
  return (
    <div className="h-screen relative flex flex-col items-center">
      <p className="font-sans text-center tracking-[1rem] text-lg mt-24 mb-8">
        PLANET
      </p>
      <h1 className="font-sans text-8xl font-bold">Earth</h1>
      <div className="w-28 h-2 rounded-lg bg-skyBlue"></div>
      <p className="sub-text text-lg my-10 tracking-wide">
        Earth: A vibrant planet rich in life and natural beauty. Our home.
      </p>
      <div className="w-48 h-14 rounded-full bg-primary flexCenter ">
        <p className="text-black font-semibold">LEARN MORE</p>
      </div>
    </div>
  );
};

export default HeroOverLay;
