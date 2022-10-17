import "./featured.scss";
import Chart from "../../components/chart/Chart";
import Foto from "./Foto.jpg";

const Featured = () => {
    const foto = require("./Foto.jpg");
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
