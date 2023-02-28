import React from "react";
import { Button, Link, Stack } from "@mui/material";
import "./AddAddress.css";

const AddAddress = () => {
  return (
    <>
      <div className="PropertyAddress">
        <div className=''>
          <div class="nav nav-pills">
            <div class="nav-item">
              <a class="nav-link " aria-current="page" href="#">Properties</a>
            </div>
            {'>'}
            <div class="nav-item">
              <a class="nav-link active" href="#">Create Property</a>
            </div>
          </div>


          <form>
            <h2>Property Address</h2>
            <p>Please provide the address of your property.</p>
            <div className="Street_Address">
              <div class="">
                <label for="StreetAddress" class="form-label">Street Address</label>
                <input type="text" class="form-control" id="StreetAddress" placeholder="e.g. Smith Street" />
              </div>
              <div class="">
                <label for="UnitNumber" class="form-label">Unit Number</label>
                <input type="text" class="form-control" id="UnitNumber" placeholder="e.g. Unit 1" />
              </div>
            </div>
            <div className="City_sec">
              <div class="mb-3">
                <label for="InputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="InputCity" placeholder="e.g. Sydney" />
              </div>
              <div class="mb-3">
                <label for="InputState" class="form-label">State</label>

                <div class="dropdown">
                  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    State
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">1</a></li>
                    <li><a class="dropdown-item" href="#">11</a></li>
                    <li><a class="dropdown-item" href="#">111</a></li>
                  </ul>
                </div>
              </div>
              <div class="mb-3">
                <label for="InputPostcode" class="form-label">Postcode</label>
                <input type="text" class="form-control" id="InputPostcode" placeholder="e.g. 2000" />
              </div>
            </div>

            <div className="">
              <div className="">
                <label for="Inputrepresent" class="form-label">I’m representing</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                <label className="form-check-label form-label" for="flexRadioDefault1">
                  The landlord <br /> <span>Lorem ipsum dolor sit amet</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label form-label" for="flexRadioDefault2">
                  Owners <br /> <span>Lorem ipsum dolor sit amet</span>
                </label>
              </div>
            </div>

          </form>
        </div>

        <div className='footer'>
          <Button variant="primary" className="btn3" type="submit">
            Skip for later
          </Button>
          <div className='footer_section'>
            <span className='Active_Dark_circle'>
              <i class="fa-solid fa-circle-check"></i>
            </span>
            <span className='light_circle'>
              <i class="fa-regular fa-circle-dot"></i>
            </span>
            <span className='light_circle'>
              <i class="fa-regular fa-circle-dot"></i>
            </span>
            <span className='light_circle'>
              <i class="fa-regular fa-circle-dot"></i>
            </span>
          </div>

          <Button variant="primary" className="btn" type="submit">
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddAddress;
