import React from "react";
import "./BuisenessDetail.css";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import BusinessProfileForm from "../../../sections/auth/BusinessProfileForm";

function BusinessDetail() {
  return (
    <div className="RytAgentAccount">
      <div className="AgentCreateAcct updateAgentCreateAcct">
        <div className="agtCrtHead">
          <h2>Business Details</h2>
        </div>
        <BusinessProfileForm />
        <div className="skips text-center">
          <Link className="" component={RouterLink} to="/app">
            Skip for later
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BusinessDetail;
