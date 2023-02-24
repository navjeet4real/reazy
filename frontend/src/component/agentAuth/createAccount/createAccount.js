import React from "react";
import "./createAccount.css";
import WhiteMainLogo from "../../../Images/WhiteMainLogo.png";

function createAccount() {
  return (
    <section>
      <div className="Agent_bgg_data">
        <SideForm />
        <div className="RytAgentAccount">
          <div className="AgentCreateAcct">
            <div className="agtCrtHead">
              <h2>Create your account</h2>
            </div>
            <div className="f">
              <form>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Full Name{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="e.g. John Smith"
                  />
                </div>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="e.g. john@smith.com"
                  />
                </div>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputmobile1">
                    Mobile Number
                  </label>
                  <input
                    type="mobile"
                    className="form-control"
                    id="exampleInputmobile1"
                    placeholder="e.g. 0400 000 000"
                  />
                </div>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputPassword1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="********"
                  />
                </div>

                <div className="AgentLogButton">
                  <a className="MainBTN" href="#">
                    Continue
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createAccount;
export function SideForm() {
  return (
    <div className="LeftAgentAccount">
      <div className="TopAgentLogin">
        <img src={WhiteMainLogo} alt="" />
      </div>
      <div className="Agent_account_Data">
        <ul id="progressbar" class="text-center">
          <li class="active step0">
            <a href="#">
              <div className="OpenAccount">
                <h4>Create your account</h4>
                <h6>Let’s get your account setup</h6>
              </div>
            </a>
          </li>

          <li class=" step0">
            <a href="#">
              <div className="OpenAccount">
                <h4>Let’s verify your account</h4>
                <h6>We’ll send you a code</h6>
              </div>
            </a>
          </li>

          <li class=" step0">
            <a href="#">
              <div className="OpenAccount">
                <h4>Complete your profile</h4>
                <h6>Let’s get your profile looking good</h6>
              </div>
            </a>
          </li>

          <li class=" step0">
            <a href="#">
              <div className="OpenAccount">
                <h4>Business Details</h4>
                <h6>Tell us more about your business</h6>
              </div>
            </a>
          </li>

          <li class=" step0">
            <a href="#">
              <div className="OpenAccount">
                <h4>Invite your team</h4>
                <h6>Start collaborating with your team</h6>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="creatAgentLogin">
        <h6>© Reazy 2022</h6>
        <div className="support">
          <i className="fa-regular fa-envelope"></i>
          <h6>support@reazy.com</h6>
        </div>
      </div>
    </div>
  );
}
