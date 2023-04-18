import { Button } from "components/button";
import { Radio } from "components/checkbox";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { categoryStatus } from "utils/constants";
const CategoryAddNew = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 1,
      createAt: new Date(),
    },
  });
  const [loading, setLoading] = useState(false);
  const handleAddNewCategory = (values) => {
    setLoading(true);
    const cloneCategory = { ...values };
    cloneCategory.slug = slugify(values.title || values.slug, { lower: true });
    cloneCategory.status = Number(values.status);
    console.log(cloneCategory);
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
