import React from "react";
import styled from "styled-components";
const SignUpPageStyles = styled.div`
  .heading {
    color: ${(props) => props.theme.primary};
  }
`;
const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <img srcSet="/logo.png 2x" alt="" />
      <h1 class="heading">Monkey Blogging</h1>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
