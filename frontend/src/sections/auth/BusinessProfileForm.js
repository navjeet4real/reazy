import React, { useCallback } from "react";
import FormProvider from "../../component/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFTextField, RHFUploadAvatar } from "../../component/hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BusinessProfile } from "../../redux/slices/auth";
import { Button } from "@mui/material";
import RHFSelect from "../../component/hook-form/RHFSelect";

const BusinessProfileForm = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);

  const BusinessProfileSchema = Yup.object().shape({
    businessName: Yup.string().required("Business Name is required"),
    logo: Yup.string().required("Logo is required").nullable(true),
    address: Yup.string().required("Address is required"),
    suburb: Yup.string().required("Suburb is required"),
    postCode: Yup.string().required("Post Code is required"),
    state: Yup.object().required("State is required"),
  });
  const defaultValues = {
    businessName: "",
    logo: "",
    address: "",
    suburb: "",
    postCode: "",
    state: "",
  };
  const methods = useForm({
    resolver: yupResolver(BusinessProfileSchema),
    defaultValues,
  });

  const {
    reset,
    setValue,
    setError,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(
        {
          businessName: data.businessName,
          email,
          logo: data.logo,
          address: data.address,
          suburb: data.suburb,
          postCode: data.postCode,
          state: data.state.value,
        },
        "data"
      );
      dispatch(
        BusinessProfile({
          businessName: data.businessName,
          email,
          logo: data.logo,
          address: data.address,
          suburb: data.suburb,
          postCode: data.postCode,
          state: data.state.value
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
        setValue("logo", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );
  return (
    <div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group AdminLogForm">
          <RHFTextField name="businessName" label="Business Name" />
        </div>
        <div className="form-group AdminLogForm">
          <RHFUploadAvatar
            name="logo"
            maxSize={3145728}
            onDrop={handleDrop}
            label="Business Logo"
          />
        </div>
        <div className="form-group AdminLogForm">
          <RHFTextField name="address" label="Address" />
        </div>
        <div className="streetAdress">
          <div className="form-group AdminLogForm">
            <RHFTextField name="suburb" label="Suburb" />
          </div>
          <div className="form-group AdminLogForm">
            <RHFTextField name="postCode" label="Postcode" />
          </div>
        </div>
        <div className="form-group AdminLogForm">
          <RHFSelect
            name="state"
            label="State"
            options={[ 
              { value: "chocolate", label: "Chocolate" }, 
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
          {/* <label className="" for="exampleInputEmail1">
            State
          </label>
          <select
            className="form-select mt-2"
            aria-label="Default select example"
          >
            <option selected>Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select> */}
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
    </div>
  );
};

export default BusinessProfileForm;
