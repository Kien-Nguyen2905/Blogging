import { Button } from "components/button";
import { auth } from "firebase-app/firebase-config";
import { useAuth } from "contexts/auth-context";
import React from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import styled from "styled-components";
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
  return (
    <HeaderStyles>
      <div className="container">
        <div className="flex justify-between header-main">
          <NavLink to="/">
            <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
          </NavLink>
          {!userInfo ? (
            <Button
              type="button"
              height="56px"
              className="header-button"
              to="/sign-in"
            >
              Login
            </Button>
          ) : (
            <div className="flex gap-4">
              <div className="header-auth">
                <Button
                  type="button"
                  height="56px"
                  className="header-button"
                  to="/dashboard"
                >
                  Dashboard
                </Button>
              </div>
              <div className="header-auth">
                <Button
                  type="button"
                  height="56px"
                  className="header-button"
                  onClick={() => signOut(auth)}
                >
                  Sign Out
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
