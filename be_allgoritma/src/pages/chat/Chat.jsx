import "./chat.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import banner from "./banner.png";
import { Link } from "react-router-dom";

const Chat = ({ inputs, title }) => {
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
          <img className="img-fluid" src={banner} width="50" height="50" alt="banner.png"/>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
              <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}/>
                </div>
              ))}
              <button>Update</button>
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

export default Chat;
