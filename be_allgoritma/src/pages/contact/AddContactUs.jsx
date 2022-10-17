import React, { useState } from 'react'
import axios from "axios"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useNavigate } from "react-router-dom"
import {Link} from "react-router-dom"

const AddContactUs = () => {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("Aktif");
    const navigate = useNavigate();

    const saveContactUs = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/contactus',{
                username,
                email,
                message,
                status
            });
            navigate("/contactlist")
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="title mt-5"><h1>Add Contact Us</h1></div>
            <div className="columns mt-5 is-centered">
                <div className="column is-half">
                    <form onSubmit={saveContactUs}>
                        <div className="field">
                            <div className="label">Name</div>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    value={username} 
                                    onChange={(e) => setUserName(e.target.value)} 
                                    placeholder="name" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="label">Email</div>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="email" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="label">Message</div>
                            <div className="control">
                                <textarea 
                                    className="input" 
                                    type="text" 
                                    value={message} 
                                    onChange={(e) => setMessage(e.target.value)} 
                                    placeholder="message">
                            </textarea>
                            </div>
                        </div>
                        <div className="field">
                            <div className="label">Status</div>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select value={status} 
                                    onChange={(e) => setStatus(e.target.value)} >
                                        <option value="aktif">Aktif</option>
                                        <option value="non_aktif">Non Aktif</option>
                                    </select>
                                </div>
                            </div>
                        </div><br />
                        <div className="field">
                            <button type="submit" className="button is-success" style={{backgroundColor:'#00ff00'}}>
                                <b>Save</b>
                            </button>&nbsp;
                            <Link to={`/contactlist`}>
                                <button type="submit" className="button is-success" style={{textDecoration: 'none', backgroundColor:'#ff00ff'}}>
                                    <b>Back</b>
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddContactUs