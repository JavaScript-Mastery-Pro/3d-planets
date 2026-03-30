import React from "react";
import { useNavigate } from "react-router-dom";

// Import internals
import { backImg, NAV_LINKS } from "@c";

const Nav = ({ border, isBack }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/planets");
  };

  return (
    <nav
      className={`flex justify-between py-7 border-b-dim relative z-50 ${
        border ? "border-b" : "border-0"
      } z-10`}
    >
      {isBack ? (
        <div className="flex cursor-pointer ">
          <img src={backImg} alt="back arrow" />
          <p
            className={`sub-text ms-2 transition-all ${
              isBack ? "nav-hover-text-isBack" : "nav-hover-text-notBack"
            }`}
            onClick={handleBack}
          >
            Back
          </p>
        </div>
      ) : (
        <h1 className="font-orbiton font-semibold text-xl">SpaceSystem</h1>
      )}

      <div className="flex gap-10">
        {NAV_LINKS.map((link) => (
          <p
            key={link.path}
            className={`nav-text ${
              isBack ? "nav-hover-text-isBack" : "nav-hover-text-notBack"
            }`}
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </p>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
