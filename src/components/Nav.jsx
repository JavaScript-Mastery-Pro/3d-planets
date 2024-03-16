import React from "react";

const Nav = ({ border }) => {
  return (
    <nav className={`flex justify-between py-7 border-b-dim ${border ? "border-b" : "border-0"}`}>
      <h1 className="font-sans font-semibold text-xl">SpaceSystem</h1>
      <div className="flex gap-10">
        <p className="sub-text">Home</p>
        <p className="sub-text">Planets</p>
      </div>
    </nav>
  );
};

export default Nav;
