import React from "react";
import { useForm } from "react-hook-form";
import MainPage from "./MainPage";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import InputPassword from "../components/input/InputPassword";
import Button from "../components/button/Button";
import Field from "../components/field/Field";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-app/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});
const SignInPage = () => {
  const navigate = useNavigate();
  const userInfo = useAuth();
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) navigate("/");
  }, [userInfo]);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };
  useEffect(() => {
    const arrayErrors = Object.values(errors);
    if (arrayErrors.length > 0) {
      toast.error(arrayErrors[0]?.message);
    }
  }, [errors]);
  return (
    <MainPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            name="email"
            type="email"
            placeholder="Please enter your email address"
            control={control}
            hasIcon
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputPassword control={control}></InputPassword>
        </Field>
        <div className="have-account">
          You haven't had an account ?{" "}
          <NavLink to={"/sign-up"}>Register</NavLink>
        </div>
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
