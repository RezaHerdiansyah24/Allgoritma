import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./screenshot.scss";
import Widget from "../../components/widget/Widget";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

const Screenshot = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <br />
        <div className="title">&nbsp;
            <h1>&nbsp;&nbsp;SCREENSHOT</h1>
        </div>
        <div className="text-end">
          <Link to="/screenshot/new" style={{ display: "flex", justifyContent:'center', alignItems:'center'}}>
            <button style={{backgroundColor:'#99004d',marginTop:20, width:200,}}>
              <AddIcon />
            </button>
          </Link>
        </div>
        <div className="widgets">      
          <Widget type="user" />
          <Widget type="order" />
        </div>
        <div style={{ display: "flex" }}>
    </div>
      </div>
    </div>
  );
};

export default Screenshot;
