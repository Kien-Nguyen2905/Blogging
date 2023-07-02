import React from "react";

const Skeleton = ({ className = "" }) => {
  return <div className={`${className} skeleton-light`}></div>;
};

export default Skeleton;
