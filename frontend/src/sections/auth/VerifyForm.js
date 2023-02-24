import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import FormProvider from "../../component/hook-form/FormProvider";
import RHFCodes from "../../component/hook-form/RHFCodes";
import { VerifyEmail } from "../../redux/slices/auth";

const VerifyForm = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);
  
  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required("Code is required"),
    code2: Yup.string().required("Code is required"),
    code3: Yup.string().required("Code is required"),
    code4: Yup.string().required("Code is required"),
  });

  const defaultValues = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  };

  const methods = useForm({
    mode: "onchange",
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      dispatch(
        VerifyEmail({
          email,
          otp: `${data.code1}${data.code2}${data.code3}${data.code4}`,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="agtCrtHead">
          <h2>Let’s verify your account</h2>
        </div>
        <div className="send_code">
          <h6>
            We’ve sent a code to <span>0400 000 000.</span>
          </h6>
        </div>
        <div class="Verify_Code mt-4">
          <RHFCodes
            keyName="code"
            inputs={["code1", "code2", "code3", "code4"]}
          />
        </div>
        <div className="dont_receive mt-3">
          <h6>
            Didn’t receive a code?{" "}
            <span>
              <a to="#">Request again.</a>
            </span>{" "}
          </h6>
        </div>

        <div className="AgentLogButton">
          <Button type="submit" className="MainBTN">
            Continue
          </Button>
        </div>
      </FormProvider>
    </>
  );
};

export default VerifyForm;
