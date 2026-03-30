import React from "react";

/**
 * PlanetStatRow — displays a single label/value stat for a planet.
 * @param {string} label  - Stat label (e.g. "Diameters", "Gravity").
 * @param {string} value  - Stat value (e.g. "12,742 km", "0.376 g").
 * @param {string} [className] - Optional extra class names for the wrapper.
 */
const PlanetStatRow = ({ label, value, className = "" }) => {
  return (
    <div className={`info-text ${className}`}>
      <p className="info-sub-text">{label}</p>
      <p className="info-number">{value}</p>
    </div>
  );
};

export default PlanetStatRow;
