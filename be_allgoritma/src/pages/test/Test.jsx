import "./test.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Foto from "./Foto.jpg";
import { Link } from "react-router-dom";

const Test = () => {
    const foto = require("./Foto.jpg");
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
            <img src={Foto} width="100" height="100" alt="" />
              <div className="details">
                <h1 className="itemTitle">Reza Herdiansyah</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">reza@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Message:</span>
                  <span className="itemValue">Very Good</span>
                </div>
                <Link to="/contact">
                    <button>Back</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Comments ( Last 6 Months)" />
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Test;
