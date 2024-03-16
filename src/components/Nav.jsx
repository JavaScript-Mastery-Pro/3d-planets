import React from "react";
import { useNavigate } from "react-router-dom";
import { backImg } from "../utils";

const Nav = ({ border, isBack }) => {
  const home = useNavigate();
  const planet = useNavigate();
  const back = useNavigate();

  const handleHome = () => {
    home("/");
  };

  const handlePlanet = () => {
    planet("/planets"); 
  };

  const handleBack = () => {
    back("/planets");
  };

  return (
    <nav
      className={`flex justify-between py-7 border-b-dim ${
        border ? "border-b" : "border-0"
      } z-10`}
    >
      {isBack ? (
        <div className="flex cursor-pointer ">
          <img src={backImg} alt="back arrow" />
          <p
            className="sub-text ms-2 transition-all hover:text-primary"
            onClick={handleBack}
          >
            Back
          </p>
        </div>
      ) : (
        <h1 className="font-sans font-semibold text-xl">SpaceSystem</h1>
      )}

      <div className="flex gap-10">
        <p
          className="sub-text cursor-pointer transition-all hover:text-primary"
          onClick={handleHome}
        >
          Home
        </p>
        <p
          className="sub-text cursor-pointer transition-all hover:text-primary"
          onClick={handlePlanet}
        >
          Planets
        </p>
      </div>
    </nav>
  );
};

export default Nav;
