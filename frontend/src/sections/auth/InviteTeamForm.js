import React, { useCallback } from "react";
import FormProvider from "../../component/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFTextField } from "../../component/hook-form";
import { useDispatch, useSelector } from "react-redux";
import { InviteTeam } from "../../redux/slices/auth";
import { Button } from "@mui/material";

const InviteTeamForm = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);

  const InviteMemberSchema = Yup.object().shape({
    team1: Yup.string().required("Team Member is required"),
    team2: Yup.string().required("Team Member is required"),
    team3: Yup.string().required("Team Member is required"),
  });
  const defaultValues = {
    team1: "",
    team2: "",
    team3: "",
  };
  const methods = useForm({
    resolver: yupResolver(InviteMemberSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(
        { team1: data.team1, team3: data.team3, team2: data.team2 },
        "data"
      );
      dispatch(
        InviteTeam({
          team1: data.team1,
          team3: data.team3,
          team2: data.team2,
          email
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
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group AdminLogForm">
          <RHFTextField name="team1" label="Team Member 1" />
        </div>
        <div className="form-group AdminLogForm">
          <RHFTextField name="team2" label="Team Member 2" />
        </div>
        <div className="form-group AdminLogForm">
          <RHFTextField name="team3" label="Team Member 3" />
        </div>
        <div className="AgentLogButton agentBTN ">
          <a className="MainBTN2" href="#">
            <i className="fa-regular fa-envelope"></i> Send invites
          </a>
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

export default InviteTeamForm;
