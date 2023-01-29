import React from "react";
import "../styles/settings.css";
import { Link, NavLink, Outlet } from "react-router-dom";
// import SettingDropdown from "../components/TopNav/SettingDropdown";

const Settings = () => {

  return (
    <div className="settings">
        <h1 className="settings__title">Settings</h1>
      <div className="settings__wrapper">
        <Outlet/>
      </div>
    </div>
  );
};

export default Settings;