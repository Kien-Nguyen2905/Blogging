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
  font-size: 19px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
const Button = ({
  type = "button",
  children,
  onClick = () => {},
  ...props
}) => {
  return (
    <ButtonStyled type={type} onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
