import { IconEyeClose, IconEyeOpen } from "components/icon";
import useToggle from "hooks/useToggle";
import React, { Fragment, useState } from "react";
import Input from "./Input";

const InputPasswordToggle = ({ control }) => {
  const { value: togglePassword, handleToggle } = useToggle;
  if (!control) return null;
  return (
    <Fragment>
      <Input
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        control={control}
      >
        {!togglePassword ? (
          <IconEyeClose
            eClose
            onClick={() => handleToggle(true)}
          ></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={() => handleToggle(false)}></IconEyeOpen>
        )}
      </Input>
    </Fragment>
  );
};

export default InputPasswordToggle;
