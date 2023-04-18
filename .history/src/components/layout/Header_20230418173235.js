import { Button } from "components/button";
import { useAuth } from "contexts/auth-context";
import React from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import styled from "styled-components";
import { userRole, userStatus } from "utils/constants";
const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
];

const HeaderStyles = styled.header`
  padding: 20px 0;
  .header-main {
    display: flex;
    align-items: center;
  }
  .header-auth {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .logo {
    display: block;
    max-width: 50px;
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
    margin-left: auto;
    padding: 15px 25px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 20px;
  }
  .search-input {
    flex: 1;
    padding-right: 45px;
    font-weight: 500;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
  }
  @media screen and (max-width: 1023.98px) {
    .logo {
      max-width: 30px;
    }
    .menu,
    .search,
    .header-button,
    .header-auth {
      display: none;
    }
  }
`;
const Header = () => {
  const { userInfo } = useAuth();
  const handleOut = () => {
    const auth = getAuth();
    signOut(auth);
  };
  return (
    <HeaderStyles>
      <div className="container">
        <div className="flex justify-between header-main">
          <NavLink to="/">
            <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
          </NavLink>
          <ul className="menu">
            {menuLinks.map((item) => (
              <li className="menu-item" key={item.title}>
                <NavLink to={item.url} className="menu-link">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          {Number(userInfo?.status) === userStatus.BAN && (
            <p className="">Your account be baned</p>
          )}
          {userInfo && Number(userInfo?.status) !== userStatus.BAN ? (
            Number(userInfo?.role) !== userRole.ADMIN ? (
              <div className="header-auth">
                <Button
                  type="button"
                  height="56px"
                  className="header-button"
                  to="/add-post"
                >
                  Write new post
                </Button>
                <Button
                  type="button"
                  height="56px"
                  className="header-button"
                  onClick={handleOut}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="header-auth">
                <Button
                  type="button"
                  height="56px"
                  className="header-button"
                  to="/manage/post"
                >
                  Dashboard
                </Button>
                <Button
                  type="button"
                  height="56px"
                  className="header-button"
                  onClick={handleOut}
                >
                  Sign Out
                </Button>
              </div>
            )
          ) : (
            <Button
              type="button"
              height="56px"
              className="header-button"
              to="/sign-in"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
