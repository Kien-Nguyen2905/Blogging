import React from "react";

const Dropdown = ({ children, ...props }) => {
  return <div className="relative inline-block w-full">{children}</div>;
};

export default Dropdown;
