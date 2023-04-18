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
        name="passwrod"
        type={toggle ? "text" : "password"}
        placeholder="Please enter your password"
        control={control}
        hasIcon
      >
        {toggle ? (
          <IconEyeOpen onClick={() => setToggle(true)}></IconEyeOpen>
        ) : (
          <IconEyeClose onClick={() => setToggle(false)}></IconEyeClose>
        )}
      </Input>
    </Fragment>
  );
};

export default InputPassword;
