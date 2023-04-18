import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const HeaderStyled = styled.div``;
const navlink = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
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
          <ul className="menu">
            {navlink.map((item) => (
              <li className="menu-item" key={item.title}>
                <NavLink to={item.url} className="menu-link">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
