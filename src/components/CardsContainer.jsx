import React from "react";
import { useNavigate } from "react-router-dom";

import { planetCardLists } from "../constants";
import { arrowImg } from "../utils";

const CardsContainer = () => {
  const nav = useNavigate();

  const handleClick = (id) => {
    nav(`/planets/${id}`);
  };

  return (
    <div className="h-[90vh] flexCenter gap-10">
      {planetCardLists.map((list) => (
        <div className={`w-96 h-96`} key={list.id}>
          <div className="relative h-full bg-rectangle-card-bg bg-center bg-contain">
            <img
              src={list.img}
              alt={list.title}
              className="absolute w-full h-full object-contain -translate-x-32 -translate-y-32 scale-110"
            />
            <img
              src={arrowImg}
              alt="arrow"
              className="absolute right-16 top-16 cursor-pointer z-10"
              onClick={() => handleClick(list.id)}
            />

            {/* info texts */}
            <div className="flex flex-col h-full justify-end">
              <p className="text-center font-sans font-semibold text-3xl">
                {list.title}
              </p>
              <p className="text-center sub-text mb-10">{list.subtitle}</p>
              <div className="flex justify-center gap-10 mb-24">
                <span>
                  <p className="font-sans text-center">{list.km}</p>
                  <p className="sub-text text-center">Radius</p>
                </span>
                <span>
                  <p className="font-sans text-center">{list.g}</p>
                  <p className="sub-text text-center">Gravity</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
