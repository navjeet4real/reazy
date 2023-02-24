// import { Listings_icon } from "./icons";
import { User, Users, HouseSimple, Copy, Notepad, Gear } from "phosphor-react";

export const Nav_Buttons = [
  {
    index: 0,
    icon: <HouseSimple />,
    text: "PROPERTIES",
  },
  {
    index: 1,
    icon: <Copy />,
    text: "LISTINGS",
  },
  {
    index: 2,
    icon: <Users />,
    text: "TENANTS",
  },
  {
    index: 3,
    icon: <Notepad />,
    text: "APPLICATIONS",
  },
];

const Profile_Menu = [
  {
    index: 4,
    text: "Profile",
    icon: <User />,
  },
  {
    index: 5,
    text: "Settings",
    icon: <Gear />,
  },
];

export { Profile_Menu };
