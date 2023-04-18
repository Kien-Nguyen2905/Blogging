import React from "react";
import { useForm } from "react-hook-form";
import MainPage from "./MainPage";
import Lable from "../components/lable/Lable";
import Input from "../components/input/Input";
import InputPassword from "../components/input/InputPassword";
import Button from "../components/button/Button";
import Field from "../components/field/Field";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isLoading, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
  });
  const handleSignIn = (values) => {
    console.log(values);
  };
  return (
    <MainPage>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
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
    </MainPage>
  );
};

export default SignInPage;
