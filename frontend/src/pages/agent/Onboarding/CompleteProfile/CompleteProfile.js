import React from "react";
import "./Profile.css";
import { Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CompleteProfileForm from "../../../../sections/auth/CompleteProfileForm";


function CompleteProfile() {
  return (
    <div className="RytAgentAccount">
      <div className="AgentCreateAcct updateAgentCreateAcct">
        <div className="agtCrtHead">
          <h2>Complete your profile</h2>
        </div>
          <CompleteProfileForm />
        <div className="skips text-center">
          <Link component={RouterLink} to="/app" className="">
            Skip for later
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompleteProfile;
