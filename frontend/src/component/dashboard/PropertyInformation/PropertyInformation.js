import React from 'react'
import { Button, Link, Stack } from "@mui/material";
import "./PropertyInformation.css";
import "../../common.css"

const PropertyInformation = () => {
  return (
    <>
      <div className="PropertyInformation">
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
            <h2>Property Information</h2>
            <p>Please make sure you have completed all the necessary fields.</p>
            <div className="Property_type mb-3">
              <label for="InputState" class="form-label">Property Type</label>

              <div class="dropdown">
                <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select type
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">1</a></li>
                  <li><a class="dropdown-item" href="#">11</a></li>
                  <li><a class="dropdown-item" href="#">111</a></li>
                </ul>
              </div>
            </div>
            <div className="Price_bond">
              <div class="mb-3">
                <label for="InputState" class="form-label">Price (per week)</label>
                <input type="text" class="form-control" id="InputPostcode" placeholder="e.g. $500" />
              </div>
              <div class="mb-3">
                <label for="InputState" class="form-label">Bond</label>
                <input type="text" class="form-control" id="InputPostcode" placeholder="e.g. $500" />
              </div>
            </div>
            <div className="City_sec">
              <div class="mb-3">
                <label for="InputState" class="form-label">Bedrooms</label>

                <div class="dropdown">
                  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">1</a></li>
                    <li><a class="dropdown-item" href="#">11</a></li>
                    <li><a class="dropdown-item" href="#">111</a></li>
                  </ul>
                </div>
              </div>
              <div class="mb-3">
                <label for="InputState" class="form-label">Baths</label>

                <div class="dropdown">
                  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">1</a></li>
                    <li><a class="dropdown-item" href="#">11</a></li>
                    <li><a class="dropdown-item" href="#">111</a></li>
                  </ul>
                </div>
              </div>
              <div class="mb-3">
                <label for="InputState" class="form-label">Car Spaces</label>

                <div class="dropdown">
                  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">1</a></li>
                    <li><a class="dropdown-item" href="#">11</a></li>
                    <li><a class="dropdown-item" href="#">111</a></li>
                  </ul>
                </div>
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
  )
}

export default PropertyInformation
