import React from "react";
import styled from "styled-components";
import Lable from "../components/lable/Lable";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import InputPassword from "../components/input/InputPassword";
import Button from "../components/button/Button";
import Field from "../components/field/Field";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup.string().required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at leat 8 characters")
    .required("Please enter your password"),
});
const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = (value) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };
  console.log(Object.values(errors));
  return (
    <SignUpPageStyles>
      <div className="container">
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
            <InputPassword control={control}></InputPassword>
          </Field>
          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
            style={{
              maxWidth: 350,
              margin: "0 auto",
            }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
