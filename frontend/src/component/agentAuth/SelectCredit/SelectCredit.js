import React from "react";
import "./SelectCredit.css";
import WhiteMainLogo from "../../../Images/WhiteMainLogo.png";
import SimpleLogo from "../../../Images/SimpleLogo.png";

function SelectCredit() {
  return (
    <section>
      <div className="AgentSelectCredits">
        <div className="agtSelectData">
          <div className="Agtselect_logo">
            <img src={WhiteMainLogo} alt="" />
          </div>
          <div className="AgetSelctCardbox">
            <div className="Reazy_Credits">
              <img src={SimpleLogo} alt="SimpleLogo" />
              <div className="reazyCreditsData">
                <h2>Reazy Credits</h2>
                <p>
                  You’ll need credits in your account to reveal pre-approved
                  tenants for your property listings.
                </p>
                <h4>Learn more</h4>
              </div>
            </div>

            <div className="selectCard">
              <div className="creditcard">
                <div className="rates">
                  <h2>500</h2>
                  <h2>Credits</h2>
                </div>
                <div className="recomd">
                  <p className="recordHide">Recommended</p>
                  <p>Billed once</p>
                </div>
                <div className="teans">
                  <i class="fa-regular fa-circle-check"></i>
                  <h6>500 tenants</h6>
                </div>
              </div>

              <div className="creditcard">
                <div className="rates">
                  <h2>1000</h2>
                  <h2>Credits</h2>
                </div>
                <div className="recomd">
                  <p className="recordHide">Recommended</p>
                  <p>Billed once</p>
                </div>
                <div className="teans">
                  <i class="fa-regular fa-circle-check"></i>
                  <h6>1000 tenants</h6>
                </div>
              </div>

              <div className="creditcard">
                <div className="rates">
                  <h2>1500</h2>
                  <h2>Credits</h2>
                </div>
                <div className="recomd">
                  <p className="recordHide">Recommended</p>
                  <p>Billed once</p>
                </div>
                <div className="teans">
                  <i class="fa-regular fa-circle-check"></i>
                  <h6>1500 tenants</h6>
                </div>
              </div>
            </div>

            <div className="selct_contact">
              <div className="slctChat">
                <a className="MainBTNPink" href="#">
                  <i class="fa-regular fa-comments"></i> Chat to us
                </a>
              </div>
              <div className="selct_button">
                <a className="MainBTN2" href="#">
                  Purchase later
                </a>
                <a className="MainBTN" href="#">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectCredit;
