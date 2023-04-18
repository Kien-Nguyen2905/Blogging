import React, { Fragment } from "react";
import { useState } from "react";
import IconEyeClose from "../icon/IconEyeClose";
import IconEyeOpen from "../icon/IconEyeOpen";
import Input from "./Input";
const InputPassword = ({ control }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <Input
        name="password"
        type={toggle ? "text" : "password"}
        placeholder="Please enter your password"
        control={control}
        hasIcon
      >
        {!toggle ? (
          <IconEyeClose onClick={() => setToggle(true)}></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={() => setToggle(false)}></IconEyeOpen>
        )}
      </Input>
    </Fragment>
  );
};

export default InputPassword;
