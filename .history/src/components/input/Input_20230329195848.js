import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
const InputStyled = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) =>
      props.hasIcon ? "16px 60px 16px 20px" : "16px 20px"};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.grayf1};
    border-radius: 8px;
    transition: all 0.2sl inear;
    color: ${(props) => props.theme.black};
    font-size: 14px;
  }
  input::-webkit-input-placeholder {
    color: #b2b3bd;
  }
  input::-moz-input-placeholder {
    color: #b2b3bd;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const Input = ({ name = "", type = "text", control, children, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyled
      id={name}
      {...field}
      {...props}
      hasIcon={children ? true : false}
    >
      <input id={name} type={type} {...field} {...props} />
      {children ? <div className="input-icon">{children}</div> : null}
    </InputStyled>
  );
};

export default Input;
