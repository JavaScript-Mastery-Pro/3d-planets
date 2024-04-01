import React from "react";
import CommonViewer from "../components/CommonViewer";

const IgnisMajorView = () => {
  return (
    <>
      <CommonViewer />
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default IgnisMajorView;
