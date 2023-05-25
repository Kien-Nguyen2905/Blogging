import React from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({ children, ...props }) => {
  return <div className="relative inline-block w-full">{children}</div>;
};

export default Dropdown;
