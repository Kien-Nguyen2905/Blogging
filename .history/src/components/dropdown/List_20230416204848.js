import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute pb-[50%] left-0 w-full overflow-y-scroll bg-white shadow-sm top-full">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
