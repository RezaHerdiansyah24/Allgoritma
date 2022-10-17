import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from '@mui/icons-material/Settings';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BuildIcon from '@mui/icons-material/Build';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Allgoritma</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>
              <SettingsIcon className="icon" />
              <span>About Allgoritma</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <BuildIcon className="icon" />
              <span>Features</span>
            </li>
          </Link>
          <Link to="/screenshot" style={{ textDecoration: "none" }}>
            <li>
              <ContentCutIcon className="icon" />
              <span>Screenshot</span>
            </li>
          </Link>
          <Link to="/team" style={{ textDecoration: "none" }}>
            <li>
              <Diversity3Icon className="icon" />
              <span>Team</span>
            </li>
          </Link>
          <Link to="/contactlist" style={{ textDecoration: "none" }}>
            <li>
              <PhonePausedIcon className="icon" />
              <span>Contact Us List</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
