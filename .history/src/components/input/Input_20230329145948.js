import React from "react";
import styled from "styled-components";
const InputStyled = styled.div``;
const Input = ({ id, type = " ", placeholder = "" }) => {
  return (
    <InputStyled id={id} type={type} placeholder={placeholder}></InputStyled>
  );
};

export default Input;
