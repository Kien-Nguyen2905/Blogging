import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="py-[12px] px-[25px] cursor-pointer flex items-center justify-between hover:bg-slate-200 transition-all"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
