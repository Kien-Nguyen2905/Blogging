import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import { toast } from "react-toastify";

const schema = yup.object({
  email: yup.string().required("Please enter your email address"),
  // .required("Please enter your email address"),
  password: yup.string().required("Please enter your password"),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login Page";
    // if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password).catch(
      function (error) {
        var errorUser = error.code;
        var errorPassword = error.message;
        if (errorUser === "auth/user-not-found") {
          createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          ).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == "email-already-in-use") {
              alert("You already have an account with that email.");
            } else if (errorCode == "auth/invalid-email") {
              alert("Please provide a valid email");
            } else if (errorCode == "auth/weak-password") {
              alert("The password is too weak.");
            } else {
              alert(errorMessage);
            }
            console.log(error);
          });
        }
      }
    );
    navigate("/");
  };

  return (
    <AuthenticationPage>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignIn)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            control={control}
          ></Input>
          {errors.email && (
            <p className=" text-[#E74C3C]">{errors.email.message}</p>
          )}
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputPasswordToggle control={control}></InputPasswordToggle>
          {errors.password && (
            <p className=" text-[#E74C3C]">{errors.password.message}</p>
          )}
        </Field>
        <div className="have-account">
          You have not had an account?{" "}
          <NavLink to={"/sign-up"}>Register an account</NavLink>{" "}
        </div>
        <Button
          type="submit"
          className="w-full max-w-[300px] mx-auto"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Login
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
