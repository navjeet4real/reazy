import { yupResolver } from "@hookform/resolvers/yup";
import {
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import '../../App.css'
import { Eye, EyeSlash } from "phosphor-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { RHFTextField } from "../../component/hook-form";
import FormProvider from "../../component/hook-form/FormProvider";
import { RegisterUser } from "../../redux/slices/auth";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),

    email: Yup.string()
      .required("Email is required")
      .email("Email must be valid email address"),
    password: Yup.string().required("Password is required"),
    mobileNumber: Yup.string().required("Mobile Number is required"),
  });

  const defaultValues = {
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      dispatch(RegisterUser(data));
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group AdminLogForm">
        <RHFTextField name="fullName" label="Full Name" />
      </div>
      <div className="form-group AdminLogForm">
        <RHFTextField name="email" label="Email Address" />
      </div>
      <div className="form-group AdminLogForm">
        <RHFTextField name="mobileNumber" label="Mobile Number" />
      </div>
      <div className="form-group AdminLogForm">
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="AgentLogButton">
        <Button 
        className="MainBTN" 
        type="submit" 
        // component={RouterLink} 
        // to="/auth/verify-otp"
        >
          Continue
        </Button>
      </div>
    </FormProvider>
  );
};

export default RegisterForm;
