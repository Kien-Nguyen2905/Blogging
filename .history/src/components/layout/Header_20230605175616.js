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
    &-item {
      &:hover {
        color: ${(props) => props.theme.primary};
      }
    }
  }
  .active {
    color: ${(props) => props.theme.primary};
  }
  @media screen and (max-width: 950px) {
    .logo {
      max-width: 30px;
    }
    .menu {
      margin-left: 15px;
    }
    .header-auth {
      margin-left: 15px;
      gap: 5px;
    }
    .header-button {
      font-size: 14px;
      padding: 0 5px;
      height: 40px;
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
                <NavLink
                  to={item.url}
                  className="menu-link"
                  activeClassName="active"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            {!(userInfo && Number(userInfo?.status) !== userStatus.BAN) && (
              <Button
                type="button"
                height="56px"
                className="header-button"
                to="/sign-in"
              >
                Login
              </Button>
            )}
            {Number(userInfo?.status) === userStatus.BAN && (
              <p className="text-[#E74C3C]">Your account be baned</p>
            )}
            {/* {userInfo && Number(userInfo?.role) !== userRole.ADMIN && (
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
            )} */}
            {userInfo && Number(userInfo?.role) === userRole.ADMIN && (
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
            )}
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
