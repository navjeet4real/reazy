import React from "react";
import "./creditPayment.css";
import WhiteMainLogo from "../../../Images/WhiteMainLogo.png";
import PayIcon from "../../../Images/pay.png";
import MasterCard from "../../../Images/Mastercard.png";

function creditPayment() {

    
  return (
    <section>
      <div className="AgentSelectCredits">
        <div className="agtSelectData">
          <div className="Agtselect_logo">
            <img src={WhiteMainLogo} alt="" />
          </div>
          <div className="AgetSelctPaymentsbox">
            <div className="SelctPayments">
              <div className="sltpaymethd">
                <img src={PayIcon} alt="SimpleLogo" />
              </div>
              <div className="SelctPaymentsData">
                <h2>Add your Payment Method</h2>
                <p>
                  Let’s add your credit/debit card so you can purchase your
                  credits.
                </p>
              </div>
            </div>

            <div className="selectPayCard">
              <div className="selectCradPayments">
                <form>
                  <div className="form1 mb-3">
                    <div className="form-group SelctPaycards wt">
                      <label className="mb-2" for="exampleInputEmail1">
                        Name on card{" "}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="e.g. John Smith"
                      />
                    </div>
                    <div className="form-group SelctPaycards wst">
                      <label className="mb-2" for="exampleInputEmail1">
                        Expiry{" "}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="06 / 2024"
                      />
                    </div>
                  </div>
                  <div className="form1">
                    <div className="form-group SelctPaycards wt cardForm">
                      <label className="mb-2" for="exampleInputmobile1">
                        Card number
                      </label>
                      <input
                        type="mobile"
                        className="form-control"
                        id="exampleInputmobile1"
                        placeholder="  1234 1234 1234 1234"
                      />
                      <div className="msCard">
                        <img src={MasterCard} alt="" />
                      </div>
                    </div>
                    <div className="form-group SelctPaycards wst">
                      <label className="mb-2" for="exampleInputPassword1">
                        CVV
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="****"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="selct_contact">
              <div className="">
                <a className="MainBTN2" href="#">
                  Back
                </a>
              </div>
              <div className="">
                <a className="MainBTN" href="#">
                  Purchase credits
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default creditPayment;
