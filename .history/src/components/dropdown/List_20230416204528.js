import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute top-full left-0 w-[80px] bg-white shadow-sm">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
