import React from "react";
import styled from "styled-components";
import Lable from "../components/lable/Lable";
import Input from "../components/input/Input";
const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
  }
`;
const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <img srcSet="/logo.png 2x" alt="" className="logo" />
      <h1 className="heading">Monkey Blogging</h1>
      <form className="form">
        <Lable htmlFor="fullname">Full Name</Lable>
        <Input id="fullname" type="text" placeholder="Enter your name"></Input>
      </form>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
