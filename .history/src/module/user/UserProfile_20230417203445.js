import { Button } from "components/button";
import { Field } from "components/field";
import ImageUpload from "components/image/ImageUpload";
import { Input } from "components/input";
import { Label } from "components/label";
import { Textarea } from "components/textarea";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect } from "react";
import useFirebaseImage from "hooks/useFirebaseImage";
import { updatePassword } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import SignInPage from "pages/SignInPage";
import { toast } from "react-toastify";
import { useAuth } from "contexts/auth-context";
import { useState } from "react";
const UserProfile = () => {
  const {
    control,
    handleSubmit,
    register,
    reset,
    getValues,
    setValue,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
  });
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const [newPass, setNewPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [params] = useSearchParams();
  const userId = params.get("id");
  const imageUrl = getValues("avatar");
  const imageRegex = /%2F(\S+)\?/gm.exec(imageUrl);
  const imageName = imageRegex?.length > 0 ? imageRegex[1] : "";
  const { image, setImage, progress, handleSelectImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues, imageName, deleteAvatar);
  const handleUpdateUser = async (values) => {
    if (!isValid) return;
    if (confirmPass !== newPass) {
      toast.error("Password do not match");
      return;
    }
    // if (userInfo?.role !== userRole.ADMIN) {
    //   Swal.fire("Failed", "You have no right to do this action", "warning");
    //   return;
    // }
    try {
      const colRef = doc(db, "users", userId);
      await updateDoc(colRef, {
        ...values,
        avatar: image,
        password: newPass,
      });

      updatePassword(auth.currentUser, newPass)
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          console.log("fail");
        });

      toast.success("Update user information successfully!");
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
      toast.error("Update user failed!");
    }
  };
  async function deleteAvatar() {
    const colRef = doc(db, "users", userId);
    await updateDoc(colRef, {
      avatar: "",
    });
  }
  useEffect(() => {
    setImage(imageUrl);
  }, [imageUrl, setImage]);
  useEffect(() => {
    async function fetchData() {
      if (!userId) return;
      const colRef = doc(db, "users", userId);
      const docData = await getDoc(colRef);
      const { fullname, email, username, avatar, description } = docData.data();
      console.log(docData.data());
      reset(
        docData && {
          fullname,
          email,
          username,
          avatar,
          description,
        }
      );
    }
    fetchData();
  }, [userId, reset]);
  console.log(auth.currentUser);
  if (!userId) return null;
  return (
    <div>
      <DashboardHeading
        title="Account information"
        desc="Update your account information"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleUpdateUser)}>
        <div className="mb-10 text-center w-[200px] h-[200px] rounded-full mx-auto">
          <ImageUpload
            onChange={handleSelectImage}
            handleDeleteImage={handleDeleteImage}
            progress={progress}
            image={image}
            className="!rounded-full h-full mx-auto"
          ></ImageUpload>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Fullname</Label>
            <Input
              control={control}
              name="fullname"
              placeholder="Enter your fullname"
            ></Input>
          </Field>
          <Field>
            <Label>Username</Label>
            <Input
              control={control}
              name="username"
              placeholder="Enter your username"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Email</Label>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="Enter your email address"
            ></Input>
          </Field>
          <Field></Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Description</Label>
            <Textarea name="description" control={control}></Textarea>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>New Password</Label>
            <Input
              control={control}
              name="password"
              type="password"
              placeholder="Enter your new password"
              onChange={(e) => setNewPass(e.target.value)}
            ></Input>
          </Field>
          <Field>
            <Label>Confirm Password</Label>
            <Input
              control={control}
              name="confirmPassword"
              type="password"
              placeholder="Enter your confirm password"
              onChange={(e) => setConfirmPass(e.target.value)}
            ></Input>
          </Field>
        </div>
        <Button
          kind="primary"
          type="submit"
          className="mx-auto w-[200px]"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default UserProfile;
