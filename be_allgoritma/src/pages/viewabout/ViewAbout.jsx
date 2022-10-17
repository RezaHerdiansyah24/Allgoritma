import "./viewabout.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import banner from "./banner.png";
import { Link } from "react-router-dom";

const ViewAbout = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const banner = require("./banner.png");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={banner} width="50" height="50" alt="banner" />
          </div>
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} disabled/>
                </div>
              ))}
              <Link to="/about">
                    <button>Back</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAbout;
