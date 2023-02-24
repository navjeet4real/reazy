import React from "react";
import "./InviteTeam.css"
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import InviteTeamForm from "../../../sections/auth/InviteTeamForm";

function InviteTeam() {
    
  return (
        <div className="RytAgentAccount">
          <div className="AgentCreateAcct updateAgentCreateAcct">
            <div className="agtCrtHead">
              <h2>Invite your team</h2>
            </div>
            <InviteTeamForm />
            <div className="skips text-center">
              <Link className="" component={RouterLink} to="/app">
                Skip for later
              </Link>
            </div>
          </div>
        </div>
  );
}

export default InviteTeam;
