import React,{ useState } from "react";
import FormProvider from "../../component/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFTextField } from "../../component/hook-form";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/slices/auth";
import {
  InputAdornment,
  IconButton,
  Link,
  Button,
} from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import google from "../../Images/Google.png";
import RHFCheckBox from "../../component/hook-form/RHFCheckBox";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be valid email address"),
    password: Yup.string().required("Password is required"),
    rememberMe: Yup.boolean()
  });

  const defaultValues = {
    email: "",
    password: "",
    rememberMe: false
  };
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(data, "login data")
      dispatch(LoginUser(data));
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
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group AdminLogForm">
          <RHFTextField name="email" label="Email address" />
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
        <div className="form-group AgentForgetData">
          <div class="form-check AgentCheckt">
            <RHFCheckBox
              name="rememberMe"
              label="Remember for 30 days"
              className="form-check-input"
            />
          </div>
          <div className="AgentForget">
            <Link to="/forgot" component={RouterLink} className="">
              Forgot Password
            </Link>
          </div>
        </div>
        <div className="AgentLogButton">
          <Button className="MainBTN"  type="submit" >
            Sign in
          </Button>
          <a className="MainBTN2" href="">
            <img src={google} alt="" /> Sign in with Google
          </a>
        </div>
        <div class="AgentSign">
          <span className="txt1"> Don&rsquo;t have an account? </span>
          <Link component={RouterLink} className="txt2" to="/auth/register">
            {" "}
            Sign up - it’s FREE!{" "}
          </Link>
        </div>
      </FormProvider>
    </>
  );
};

export default LoginForm;
