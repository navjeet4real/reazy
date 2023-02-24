import { Button, Link, Stack } from "@mui/material";
import React from "react";
import "../../common.css";
import copy_icon from "../../../Images/copy_icon.png";
import { Link as RouterLink } from "react-router-dom";


const CreateManual = () => {

  
  return (
    <>
      <div className="Listings">
        <div class="nav nav-pills">
          <div class="nav-item">
            <a class="nav-link " aria-current="page" href="#">
              Properties
            </a>
          </div>
          {">"}
          <div class="nav-item">
            <a class="nav-link active" href="#">
              Create Property
            </a>
          </div>
        </div>

        <form>
          <h2>Create your Property</h2>
          <div class="mb-3">
            <label for="InputMagic" class="form-label">
              Magic Link
            </label>
            <div className="Magic_Linkinput">
              <input
                type="text"
                class="form-control"
                id="InputMagic"
                placeholder="Paste your Magic Link"
              />
              <img src={copy_icon} />
            </div>
            <div class="form-text">
              This can be added from any Real Estate website
            </div>
          </div>
          <div className="or">
            <p>OR</p>
          </div>
          <Button
            variant="outlined"
            className="btn2"
            component={RouterLink}
            to="/add_address"
          >
            Create manually
          </Button>
          <div className="Form_continue">
            <Button
              variant="outlined"
              className="btn"
              component={RouterLink}
              to="/add_address"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>

      {/* <div className="heading_section">
          <Button variant="outlined" component={RouterLink} to="/add_address">
            Create Manually
          </Button>
        </div> */}
      {/* <Stack justifyContent={'center'} alignContent={'center'}>
      <Button variant="outlined" component={RouterLink} to="/add_address">Create Manually</Button>
      </Stack> */}
    </>
  );
};

export default CreateManual;
