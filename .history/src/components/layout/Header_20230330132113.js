import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const HeaderStyled = styled.div``;
const navlink = [
  {
    url: "/",
    content: "Home",
  },
  {
    url: "/blog",
    content: "Blog",
  },
  {
    url: "/contact",
    content: "Contact",
  },
];
const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="header-main">
          <NavLink to={"/"}>
            <img srcSet="/logo.png 2x" alt="" />
          </NavLink>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
