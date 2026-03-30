import React from "react";

const Button = ({ text }) => {
  return (
    <div className="w-48 h-14 rounded-full bg-primary flex-center mt-10">
      <p className="text-black font-semibold">{text}</p>
    </div>
  );
};

export default Button;
