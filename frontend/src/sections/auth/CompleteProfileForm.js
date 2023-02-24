import React, { useCallback } from "react";
import FormProvider from "../../component/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFTextField, RHFUploadAvatar } from "../../component/hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CompleteProfile } from "../../redux/slices/auth";
import { Button } from "@mui/material";

const CompleteProfileForm = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);

  const UserProfileSchema = Yup.object().shape({
    position: Yup.string().required("Position is required"),
    avatarUrl: Yup.string().required("Avatar is required").nullable(true),
  });
  const defaultValues = {
    position: "",
    avatarUrl: "",
  };
  const methods = useForm({
    resolver: yupResolver(UserProfileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    setError,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(
        { position: data.position, email, avatarUrl: data.avatarUrl },
        "data"
      );
      dispatch(
        CompleteProfile({
          position: data.position,
          email,
          avatarUrl: data.avatarUrl,
        })
      );
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group AdminLogForm">
          <RHFTextField name="position" label="Position" />
        </div>
        <div className="form-group AdminLogForm">
          <RHFUploadAvatar
            name="avatarUrl"
            maxSize={3145728}
            onDrop={handleDrop}
            label="Your Photo"
          />
        </div>
        <div className="AgentLogButton agentBTN ">
          <Button
            className="MainBTN"
            // to="/auth/business-details"
            // component={RouterLink}
            type="submit"
          >
            Continue
          </Button>
        </div>
      </FormProvider>
    </>
  );
};

export default CompleteProfileForm;
