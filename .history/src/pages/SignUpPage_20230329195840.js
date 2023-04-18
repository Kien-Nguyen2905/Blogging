import React from "react";
import styled from "styled-components";
import Lable from "../components/lable/Lable";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import IconEyeOpen from "../components/icon/IconEyeOpen";
import IconEyeClose from "../components/icon/IconEyeClose";
import Field from "../components/field/Field";
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
  const {
    control,
    handleSubmit,
    formState: { error, isValid, isSubmitting },
    watch,
  } = useForm();
  const handleSignUp = (value) => {
    console.log(value);
  };
  return (
    <SignUpPageStyles>
      <img srcSet="/logo.png 2x" alt="" className="logo" />
      <h1 className="heading">Monkey Blogging</h1>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Lable htmlFor="fullname">Full Name</Lable>
          <Input
            name="fullname"
            type="text"
            placeholder="Please enter your fullname"
            control={control}
            hasIcon
          ></Input>
        </Field>
        <Field>
          <Lable htmlFor="email">Email address</Lable>
          <Input
            name="email"
            type="email"
            placeholder="Please enter your email address"
            control={control}
            hasIcon
          ></Input>
        </Field>
        <Field>
          <Lable htmlFor="password">Password</Lable>
          <Input
            name="passwrod"
            type="password"
            placeholder="Please enter your password"
            control={control}
            hasIcon
          >
            <IconEyeOpen></IconEyeOpen>
          </Input>
        </Field>
      </form>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
