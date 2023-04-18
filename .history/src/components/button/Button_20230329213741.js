import React from "react";
import styled from "styled-components";
const ButtonStyled = styled.div`
  cursor: pointer;
  padding: 0 25px;
  height: ${(props) => props.height || "70px"};
  line-height: 1;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
`;
const Button = () => {
  return <ButtonStyled>Sign up</ButtonStyled>;
};

export default Button;
