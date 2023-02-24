import React from "react";
import "./Listings.css";
import Nav from "react-bootstrap/Nav";
// import Tab from "react-bootstrap/Tab";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import home_icon from "../../../Images/icons/home_icon.png";
import Card from "react-bootstrap/Card";
import card_profile from "../../../Images/card_profile.png";
import user from "../../../Images/user.png";
import {
  Box,
  Grid,
  IconButton,
  Button,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { AllProperties } from "../../Properties/AllProperties";
import Apartment from "../../Properties/Apartment";
import House from "../../Properties/House";
import TownHouse from "../../Properties/TownHouse";
import Villa from "../../Properties/Villa"

const Listings = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="Listings">
        <div className="heading_section">
          <div className="">
            <h2>Properties</h2>
            <p>View your team's properties.</p>
          </div>
          <Button variant="primary" type="submit">
            Export
          </Button>
          <Button variant="primary" type="submit">
            + Create Listing
          </Button>
        </div>
        <Tabs value={value} onChange={handleChange} left sx={{ pt: 2, pb: 2 }}>
          <Tab label="All Properties" />
          <Tab label="House" />
          <Tab label="Apartment" />
          <Tab label="Townhouse" />
          <Tab label="Villa" />
          <Tab label="Other" />
        </Tabs>
        {(() => {
          switch (value) {
            case 0:
              return <AllProperties />;
            case 1:
              return <House />;
            case 2:
              return <Apartment />;
            case 3:
              return <TownHouse />;
            case 4:
              return <Villa />;

            default:
              break;
          }
        })()}
      </div>
    </>
  );
};

export default Listings;
