import React, { useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../redux/slices/auth";
import "./Sidebar.css";
// import {Properties_icon, Listings_icon,setting, user_icon, logout, Tenants_icon, Applications_icon} from "../../Images/icons"
import logo from "../../Images/Logo-blue.png";
import logofooter from "../../Images/Logo_footer.png";
import user from "../../Images/user.png";
import Properties_icon from "../../Images/icons/Properties_icon.png";
import Listings_icon from "../../Images/icons/Listings_icon.png";
import Tenants_icon from "../../Images/icons/Tenants_icon.png";
import Applications_icon from "../../Images/icons/Applications_icon.png";
import user_icon from "../../Images/icons/user_icon.png";
import setting from "../../Images/icons/setting.png";
import logout from "../../Images/icons/logout.png";
import { useNavigate } from "react-router-dom";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { faker } from "@faker-js/faker";
import { SignOut } from "phosphor-react";

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/app";
    case 1:
      return "/listings";
    case 2:
      return "/tenants";
    case 3:
      return "/applications";
    case 4:
      return "/profile";
    case 5:
      return "/settings";
    default:
      break;
  }
};

const Sidebar = () => {
  let navigate = useNavigate();
  const [selected, setSelected] = useState(0);

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      <div class="sidebar">
        <div className="sidebar_sec">
          <div className="sidebar_layout">
            <header>
              {/* <div onClick={navigate('/app')}> */}
              <img alt={logo} src={logo} />
              {/* </div> */}
            </header>
            <div class="sidebar_content">
              {Nav_Buttons.map((item) =>
                item.index === selected ? (
                  <a class="active">
                    <i>{item.icon}</i>
                    <span>{item.text}</span>
                  </a>
                ) : (
                  <a
                    onClick={() => {
                      setSelected(item.index);
                      navigate(getPath(item.index));
                    }}
                  >
                    <i>{item.icon}</i>
                    <span>{item.text}</span>
                  </a>
                )
              )}
            </div>

            <div class="SidebarFooter">
              {Profile_Menu.map((item) =>
                item.index === selected ? (
                  <a class="active">
                    <i>{item.icon}</i>
                    <span>{item.text}</span>
                  </a>
                ) : (
                  <a
                    onClick={() => {
                      setSelected(item.index);
                      console.log(item.index,"item index")
                      navigate(getPath(item.index));
                    }}
                  >
                    <i>{item.icon}</i>
                    <span>{item.text}</span>
                  </a>
                )
              )}
              <div class="Purchase_Credits">
                <div class="Reazy_Credits">
                  <img src={logofooter} alt={logofooter} />
                  <h5>Reazy Credits</h5>
                </div>
                <p>1400 remaining</p>
                <Button type="button" class="btn btn-primary">
                  Purchase Credits
                </Button>
              </div>
              <div class="user_details">
                <img src={faker.image.avatar()} alt={faker.name.firstName()} />
                <h5>
                  Olivia Rhye
                  <br />
                  <span>Ray White</span>
                </h5>
                {/* <i><SignOut  /></i> */}
                <IconButton
                  onClick={() => {
                    dispatch(LogoutUser());
                  }}
                >
                  <SignOut />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar----------------------
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(LogoutUser());
          }}
        >
          Logout User
        </Button> */}
    </>
  );
};

export default Sidebar;
