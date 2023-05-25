import useFirebaseImage from "hooks/useFirebaseImage";
import Toggle from "components/toggle/Toggle";
import slugify from "slugify";
import React, { useEffect, useState } from "react";
import ImageUpload from "components/image/ImageUpload";
import DashboardHeading from "module/dashboard/DashboardHeading";
import { useForm } from "react-hook-form";
import { useAuth } from "contexts/auth-context";
import { toast } from "react-toastify";
import { Label } from "components/label";
import { Input } from "components/input";
import { Field } from "components/field";
import { Dropdown } from "components/dropdown";
import { db } from "firebase-app/firebase-config";
import { Button } from "components/button";
import ReactQuill from "react-quill";
import Quill from "quill";
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.snow.css";
import { useMemo } from "react";
import axios from "axios";
import { imgbbAPI } from "config/apiConfig";
import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
const PostAddNew = () => {
  Quill.register("modules/imageUploader", ImageUploader);
  const {
    control,
    watch,
    setValue,
    formState: { isSubmitting, isValid },
    handleSubmit,
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      category: {},
      hot: false,
      image: "",
      user: "",
      content: "",
    },
  });
  const { userInfo } = useAuth();
  const watchHot = watch("hot");
  const {
    image,
    handleResetUpload,
    progress,
    handleSelectImage,
    handleDeleteImage,
  } = useFirebaseImage(setValue, getValues);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    async function fetchUserData() {
      if (!userInfo.uid) return;
      const colRef = doc(db, "users", userInfo.uid);
      const docData = await getDoc(colRef);
      setValue("user", {
        id: docData.id,
        ...docData.data(),
      });
    }
    fetchUserData();
  }, []);
  const addPostHandler = async (values) => {
    if (!isValid) return;
    try {
      const cloneValues = { ...values };
      const { name } = cloneValues.category;
      cloneValues.slug = slugify(values.slug || values.title, { lower: true });
      cloneValues.status = Number(values.status);
      cloneValues.categoryName = name;
      const colRef = collection(db, "posts");
      await addDoc(colRef, {
        ...cloneValues,
        image,
        content,
        categoryId: cloneValues.category.id,
        userId: cloneValues.user.id,
        createdAt: serverTimestamp(),
      });
      toast.success("Create new post successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      reset({
        title: "",
        slug: "",
        status: 2,
        category: {},
        hot: false,
        image: "",
        user: "",
        content: "",
      });
      setContent({});
      handleResetUpload();
      setSelectCategory({});
    }
  };
  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "categories");
      const q = query(colRef, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(result);
    }
    getData();
  }, []);
  useEffect(() => {
    document.title = "Add new post";
  }, []);
  const handleClickOption = async (item) => {
    const colRef = doc(db, "categories", item.id);
    const docData = await getDoc(colRef);
    setValue("category", {
      id: docData.id,
      ...docData.data(),
    });
    setSelectCategory(item);
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI, // Replace with your image upload API URL
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          return response.data.data.url;
        },
      },
    }),
    []
  );
  return (
    <>
      <DashboardHeading title="Add post" desc="Add new post"></DashboardHeading>
      <form onSubmit={handleSubmit(addPostHandler)}>
        <div className="form-layout">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
              required
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Image</Label>
            <ImageUpload
              onChange={handleSelectImage}
              handleDeleteImage={handleDeleteImage}
              className="h-[250px]"
              progress={progress}
              image={image}
            ></ImageUpload>
          </Field>
          <Field>
            <Label>Category</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                {categories.length > 0 &&
                  categories.map((item) => (
                    <Dropdown.Option
                      key={item.id}
                      onClick={() => handleClickOption(item)}
                    >
                      {item.name}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
            {selectCategory?.name && (
              <Dropdown.Select
                placeholder={selectCategory.name}
              ></Dropdown.Select>
            )}
          </Field>
        </div>
        <div className="mb-10">
          <Field>
            <Label>Content</Label>
            <div className="w-full entry-content">
              <ReactQuill
                modules={modules}
                theme="snow"
                value={content}
                onChange={setContent}
              />
            </div>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Feature post</Label>
            <Toggle
              on={watchHot === true}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle>
          </Field>
        </div>
        <Button
          type="submit"
          className="mx-auto w-[250px]"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Add new post
        </Button>
      </form>
    </>
  );
};

export default PostAddNew;
