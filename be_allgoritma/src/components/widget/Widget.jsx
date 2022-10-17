import "./widget.scss";
import Button from 'react-bootstrap/Button';
import Foto from "./Foto.jpg";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const Widget = ({ type }) => {
  let data;

  //temporary
  const foto = require("./Foto.jpg");
  
  return (
  <div className="box">
    <br />  
    <br />
    <div className="widget">
      <div className="left">
        <img src={Foto} width="100" height="100" alt="" />
      </div>
    </div>
    <div className="right">
          <Link to="/screenshot/view" className="link">
            <button style={{width:'auto',backgroundColor:'#00ff00',marginTop:60 }} ><VisibilityIcon /></button>
          </Link>&nbsp;
            <button onClick={() => this.props.onDelete(this.props.id)} style={{width:'auto',backgroundColor:'#8b0000',marginTop:60 }} >
              <DeleteIcon />
            </button>
      </div>
  </div>
  );
};

export default Widget;
