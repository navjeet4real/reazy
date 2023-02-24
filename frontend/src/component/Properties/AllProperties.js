import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
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
import Card from "react-bootstrap/Card";
import home_icon from "../../Images/icons/home_icon.png";
import card_profile from "../../Images/card_profile.png";
import user from "../../Images/user.png";

const AllProperties = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="Search_Filters">
        <InputGroup className="">
          <InputGroup.Text id="basic-addon1">
            <i class="fa-solid fa-magnifying-glass"></i>
          </InputGroup.Text>
          <Form.Control
            placeholder="Search for properties"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          <i class="fa-solid fa-bars-filter"></i> Filters
        </Button>
      </div>
      <div className="table_section">
        <div className="">
          <div className="table_tab">
            <Tabs
              value={value}
              onChange={handleChange}
              left
              sx={{ pt: 2, pb: 2 }}
            >
              <Tab label="All" />
              <Tab label="Published" />
              <Tab label="Occupied" />
              <Tab label="Townhouse" />
              <Tab label="Drafts" />
            </Tabs>
            {(() => {
              switch (value) {
                case 0:
                  return <All />;
                case 1:
                  return <Published />;
                case 2:
                  return <Occupied />;
                case 3:
                  return <TownHouseSub />;
                case 4:
                  return <Drafts />;

                default:
                  break;
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
};
const Published = () => {
  return (
    <>
      <h3>Published later ...</h3>
    </>
  );
};
const Occupied = () => {
  return (
    <>
      <h3>Occupied later ...</h3>
    </>
  );
};
const TownHouseSub = () => {
  return (
    <>
      <h3>TownHouseSub later ...</h3>
    </>
  );
};
const Drafts = () => {
  return (
    <>
      <h3>Drafts later ...</h3>
    </>
  );
};

const All = () => {
  return (
    <>
      <thead>
        <tr>
          <td>
            <Form.Check aria-label="option 1" />
          </td>
          <th>Property/Address</th>
          <th>Rent (p/w)</th>
          <th>Features</th>
          <th>Status</th>
          <th>Created by</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Form.Check aria-label="option 1" />
          </td>
          <td className="table_card">
            <Card>
              <Card.Header>
                <img src={card_profile} />
              </Card.Header>
              <Card.Body>
                <Card.Title>Unit 1 / 123 Smith Street</Card.Title>
                <Card.Text>Sydney, NSW, 2000</Card.Text>
              </Card.Body>
            </Card>
          </td>
          <td>$500</td>
          <td>
            <div className="card_info">
              <img src={home_icon} />
              <p>2</p>
              <img src={home_icon} />
              <p>2</p>
              <img src={home_icon} />
              <p>1</p>
            </div>
          </td>
          <td>
            <div className="listed">
              <span>.</span> Listed
            </div>
          </td>
          <td>
            <img className="Created_img" src={user} /> Olivia Rhye
          </td>
          <td>
            <a href="/">Edit</a>
          </td>
        </tr>
        <tr>
          <td>
            <Form.Check aria-label="option 1" />
          </td>
          <td className="table_card">
            <Card>
              <Card.Header>
                <img src={card_profile} />
              </Card.Header>
              <Card.Body>
                <Card.Title>Unit 1 / 123 Smith Street</Card.Title>
                <Card.Text>Sydney, NSW, 2000</Card.Text>
              </Card.Body>
            </Card>
          </td>
          <td>$500</td>
          <td>
            <div className="card_info">
              <img src={home_icon} />
              <p>2</p>
              <img src={home_icon} />
              <p>2</p>
              <img src={home_icon} />
              <p>1</p>
            </div>
          </td>
          <td>
            <div className="listed">
              <span>.</span> Listed
            </div>
          </td>
          <td>
            <img className="Created_img" src={user} /> Olivia Rhye
          </td>
          <td>
            <a href="/">Edit</a>
          </td>
        </tr>
      </tbody>
    </>
  );
};
export { AllProperties, All, TownHouseSub, Drafts, Occupied, Published };
