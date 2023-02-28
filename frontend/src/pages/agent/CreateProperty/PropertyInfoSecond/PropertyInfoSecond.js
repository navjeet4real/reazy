import React from 'react'
import { Button, Link, Stack } from "@mui/material";
import "./PropertyInfoSecond.css";
import "../../common.css"

const PropertyInfoSecond = () => {
  return (
    <>
      <div className="PropertyInfoSecond">
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
              <label for="InputState" class="form-label">Description</label>
                <textarea class="form-control" placeholder="Please provide a description about your property" rows="5"></textarea>
            </div>
            <div className="Price_bond">
              <div class="mb-3">
                <label for="InputState" class="form-label">Date Available</label>
                <div class="dropdown">
                  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select date
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">1</a></li>
                    <li><a class="dropdown-item" href="#">11</a></li>
                    <li><a class="dropdown-item" href="#">111</a></li>
                  </ul>
                </div>
              </div>
              <div class="mb-3">
                <label for="InputState" class="form-label">Lease Duration</label>

                <div class="dropdown">
                  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select duration
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

export default PropertyInfoSecond
