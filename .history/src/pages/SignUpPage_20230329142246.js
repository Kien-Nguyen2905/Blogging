import React from "react";
import styled from "styled-components";
const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
  }
  .heading {
    color: ${(props) => props.theme.primary};
  }
`;
const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <img srcSet="/logo.png 2x" alt="" className="logo" />
      <h1 className="heading">Monkey Blogging</h1>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
