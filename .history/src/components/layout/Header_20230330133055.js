import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const HeaderStyled = styled.div`
  .header-main {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .logo {
    width: 43px;
    height: 56px;
  }
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 40px;
    list-style: none;
    font-weight: 500;
  }
`;
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
            <img srcSet="/logo.png 2x" alt="logo" className="logo" />
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
