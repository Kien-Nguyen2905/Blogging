import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
const HeaderStyled = styled.div`
  padding-top: 10px;
  .header-main {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 43px;
    flex-shrink: 0;
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
  .search {
    padding: 18px 21px;
    border: 1px solid gray;
    border-radius: 8px;
    width: 320px;
    position: relative;
    margin-left: auto;
    display: flex;
  }
  .input-search {
    padding-right: 45px;
    flex: 1;
    font-weight: 400;
  }
  .icon-search {
    position: absolute;
    top: 50%;
    right: 21px;
    transform: translateY(-50%);
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
          <div className="search">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search posts..."
              className="input-search"
            />
            <span className="icon-search">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          <Button height={"62px"}></Button>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
