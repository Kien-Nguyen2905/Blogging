import React from "react";
import styled from "styled-components";
import LoadingSpinner from "../loading/LoadingSpinner";
import PropTypes, { string } from "prop-types";
import { NavLink } from "react-router-dom";
const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 0 25px;
  height: ${(props) => props.height || "65px"};
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
  to,
  type = "button",
  children,
  onClick = () => {},
  ...props
}) => {
  const { isLoading } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to}>
        <ButtonStyled type={type} {...props}>
          {child}
        </ButtonStyled>
      </NavLink>
    );
  }
  return (
    <ButtonStyled type={type} onClick={onClick} {...props}>
      {child}
    </ButtonStyled>
  );
};
Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
