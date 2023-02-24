import React from "react";
import "./Register.css";
import "../../../App.css"
import RegisterForm from "../../../sections/auth/RegisterForm";

function Register() {
  return (
    <div className="RytAgentAccount">
      <div className="AgentCreateAcct">
        <div className="agtCrtHead">
          <h2>Create your account</h2>
        </div>
        <div className="f">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Register;
