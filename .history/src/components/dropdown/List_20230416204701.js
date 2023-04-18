import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute h-[80px] left-0 w-full bg-white shadow-sm top-full snap-y">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
