import { Button } from "components/button";
import { Radio } from "components/checkbox";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import { db } from "firebase-app/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { categoryStatus } from "utils/constants";
import { useAuth } from "contexts/auth-context";
import { toast } from "react-toastify";
const CategoryAddNew = () => {
  const { userInfo } = useAuth();
  const {
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      slug: "",
      status: 1,
      createAt: new Date(),
    },
  });
  const [loading, setLoading] = useState(false);
  const handleAddNewCategory = async (values) => {
    setLoading(true);
    try {
      const cloneCategory = { ...values };
      cloneCategory.slug = slugify(values.name || values.slug, { lower: true });
      cloneCategory.status = Number(values.status);
      await addDoc(collection(db, "categories"), {
        ...cloneCategory,
        userId: userInfo.uid,
        createAt: serverTimestamp(),
      });
      toast.success("Create new category successfully!");

      setLoading(false);
      console.log(cloneCategory);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    } finally {
      reset({
        name: "",
        slug: "",
        status: 1,
        createAt: new Date(),
      });
    }
  };
  const watchCategory = watch("status");

  return (
    <div>
      <DashboardHeading
        title="New category"
        desc="Add new category"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleAddNewCategory)}>
        <div className="form-layout">
          <Field>
            <Label>Name</Label>
            <Input
              control={control}
              name="name"
              placeholder="Enter your category name"
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              name="slug"
              placeholder="Enter your slug"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <div className="flex flex-wrap gap-x-5">
              <Radio
                name="status"
                control={control}
                checked={Number(watchCategory) === categoryStatus.APPROVED}
                value={categoryStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchCategory) === categoryStatus.UNAPPROVED}
                value={categoryStatus.UNAPPROVED}
              >
                Unapproved
              </Radio>
            </div>
          </Field>
        </div>
        <Button
          kind="primary"
          className="mx-auto"
          type="submit"
          isLoading={loading}
          disabled={loading}
        >
          Add new category
        </Button>
      </form>
    </div>
  );
};

export default CategoryAddNew;
