import React from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({ children }) => {
  return (
    <DropdownProvider>
      <div className="relative inline-block w-full">{children}</div>
    </DropdownProvider>
  );
};

export default Dropdown;
