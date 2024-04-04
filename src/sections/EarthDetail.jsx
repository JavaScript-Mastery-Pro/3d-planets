import React from "react";

const EarthDetail = () => {
  return (
    <div className="w-screen h-screen lg:h-[30vh] lg:w-[35vw]">
      <p className="font-orbiton tracking-wide text-lg">PLANET</p>
      <h1 className="earth-title">Earth</h1>
      <div className="underline-div"></div>
      <p className="sub-text text-lg mb-5 mt-10 tracking-wide ">
        Earth, our home planet, has a diameter of about 12,742 KM. It completes
        one orbit around the Sun in approximately 365.25 days and rotates about
        its axis every 24 hours.
      </p>
      <p className="sub-text text-lg mb-5 tracking-wide">
        The atmosphere, mainly composed of nitrogen and oxygen, sustains life,
        while iconic features like Mount Everest and the Pacific Ocean add to
        its natural beauty.
      </p>
    </div>
  );
};

export default EarthDetail;
