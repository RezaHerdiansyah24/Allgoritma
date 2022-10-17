import React, { useState, useEffect } from 'react'
import axios from "axios"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import {Link} from "react-router-dom"

const EditFeatures = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getFeaturesById();
    }, []);

    const updateFeatures = async (e) =>{
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/features/${id}`,{
                name,
                description
            });
            navigate("/products")
        } catch (error) {
            console.log(error);
        }
    };

    const getFeaturesById = async () => {
        const response = await axios.get(`http://localhost:5000/features/${id}`);
        setName(response.data.name);
        setDescription(response.data.description);
    }

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="title mt-5"><h1>Update Features</h1></div>
            <div className="columns mt-5 is-centered">            
                <div className="column is-half">
                    <form onSubmit={updateFeatures}>
                        <div className="field">
                            <div className="label">Name</div>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    placeholder="name" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="label">Description</div>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    placeholder="description" />
                            </div>
                        </div><br />
                        <div className="field">
                            <button type="submit" className="button is-success" style={{ backgroundColor:'#00ff00'}}>
                                <b>Update</b>
                            </button>&nbsp;
                            <Link to={`/products`}>
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

export default EditFeatures