import React from "react";
import styled from "styled-components";
const ButtonStyled = styled.div`
  cursor: pointer;
  padding: 25px;
  line-height: 1;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
`;
const Button = () => {
  return <ButtonStyled></ButtonStyled>;
};

export default Button;
