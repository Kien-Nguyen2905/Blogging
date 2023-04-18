import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const HeaderStyled = styled.div``;
const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <NavLink to={"/"}>
          <img srcSet="/logo.png 2x" alt="" />
        </NavLink>
      </div>
    </HeaderStyled>
  );
};

export default Header;
