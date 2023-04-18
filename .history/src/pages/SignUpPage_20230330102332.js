import React, { Fragment } from "react";
import Lable from "../components/lable/Lable";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import InputPassword from "../components/input/InputPassword";
import Button from "../components/button/Button";
import Field from "../components/field/Field";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import MainPage from "./MainPage";
const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});
const SignUpPage = () => {
  const navigate = useNavigate();
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
  const handleSignUp = async (values) => {
    if (!isValid) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    const colRef = collection(db, "users");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Successfull");
    navigate("/");
  };
  useEffect(() => {
    const arrayErrors = Object.values(errors);
    if (arrayErrors.length > 0) {
      toast.error(arrayErrors[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);
  console.log(Object.values(errors));
  return (
    <Fragment>
      <MainPage>
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
      </MainPage>
    </Fragment>
  );
};

export default SignUpPage;
