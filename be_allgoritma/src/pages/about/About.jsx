import "./about.scss";
import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import getnotified from "./getnotified.png";
import miniworld from "./miniworld.png";
import stayconnected from "./stayconnected.png";
import stayupdated from "./stayupdated.png";
import banner from "./banner.png";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import VisibilityIcon from '@mui/icons-material/Visibility';


const About = () => {
    const getnotified = require("./getnotified.png");
    const miniworld = require("./miniworld.png");
    const stayconnected = require("./stayconnected.png");
    const stayupdated = require("./stayupdated.png");
    const banner = require("./banner.png");
  return (
    <div className="home">
      <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">&nbsp;&nbsp;
                                <h2>&nbsp;&nbsp;&nbsp;&nbsp; About Allgoritma</h2>
                                <div class="line"></div>
                            </div>&nbsp;
                        </div>
                        <div className="col-md-12 about-box">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 about-border">
                                <div className="chat-box">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src={stayconnected} width="50" height="50" alt=""/>                          
                                    <text className="title" style={{ marginTop:20}}>                                         
                                        Stay Connected
                                    </text>
                                    <img src={getnotified} width="50" height="50" alt=""/>
                                    <text className="title" style={{ marginTop:20,}}>                                        
                                        Get Notified
                                    </text>
                                    <img src={stayupdated} width="50" height="50" alt=""/>
                                    <text className="title" style={{ marginTop:20,}}>                                         
                                        Stay Updated
                                    </text>
                                    <img src={miniworld} width="50" height="50" alt=""/>
                                    <text className="title" style={{ marginTop:20,}}>                                         
                                        Mini World
                                    </text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br />
                    <div className="container" >
                        <img className="img-fluid" src={banner} width="700" height="280" alt="banner.png"/>
                    </div><br />
                    <form className="container" >
                            <div className="center">
                                <h3 className="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                    Connect with People all over the world , with your small device
                                </h3>
                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                            
                            <Link to="/about/edit" className="link">
                                <button style={{width:'20',backgroundColor:'#00ffff',marginTop:40 }} ><BorderColorIcon /></button>
                            </Link>&nbsp;
                            <Link to="/about/view" className="link">
                                <button style={{width:'20',backgroundColor:'#7cfc00',marginTop:40 }} ><VisibilityIcon /></button>
                            </Link>
                    </form>
                </div>
            </div> 
        </div>       
    </div>
  )
}

export default About