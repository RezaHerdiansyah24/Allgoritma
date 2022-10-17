import React, {useState, useEffect} from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import axios from "axios"
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const EditTeam = () => {
  const[title, setTitle] = useState("");
  const[tanggal_lahir, setTanggalLahir] = useState("");
  const[jabatan, setJabatan] = useState("");
  const[file, setFile] = useState("");
  const[preview, setPreview] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getTeamById();
  },[]);

  const getTeamById = async () =>{
    const response = await axios.get(`http://localhost:5000/team/${id}`);
    setTitle(response.data.name);
    setTanggalLahir(response.data.tanggal_lahir);
    setJabatan(response.data.jabatan);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) =>{
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateTeam = async(e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("tanggal_lahir", tanggal_lahir);
    formData.append("jabatan", jabatan);
    try {
      await axios.patch(`http://localhost:5000/team/${id}`, formData, {
        headers:{
          "Content-type": "multipart/form-data"
        }
      });
      navigate("/team")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="title mt-5">Update Team</div>
          <div className="columns is-centered mt-5">
            <div className="column is-half">
              <form onSubmit={updateTeam}>
                <div className="field">
                  <label className="label">Team Name</label>
                  <div className="control">
                    <input 
                        type="text" 
                        className="input" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Team Name" 
                      />
                  </div>
                </div>
                
                <div className="field">
                  <label className="tanggal_lahir">Tanggal Lahir</label>
                  <div className="control">
                    <input 
                        type="date" 
                        className="input" 
                        value={tanggal_lahir} 
                        onChange={(e) => setTanggalLahir(e.target.value)} 
                        placeholder="tanggal_lahir" 
                      />
                  </div>
                </div>

                <div className="field">
                  <label className="jabatan">Jabatan</label>
                  <div className="control">
                    <input 
                        type="text" 
                        className="input" 
                        value={jabatan} 
                        onChange={(e) => setJabatan(e.target.value)} 
                        placeholder="jabatan" 
                      />
                  </div>
                </div>

                <div className="field">
                  <label className="tanggal_lahir">Image</label>
                  <div className="control">
                    <div className="file">
                      <label className="file-label">
                        <input type="file" className="file-input" onChange={loadImage} />
                        <span className="file-cta">
                          <span className="file-label">Choose a file...</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {preview ? (
                  <figure className="image is-128x128">
                    <img src={preview} alt="Preview Image" />
                  </figure>
                ): (
                  ""
                  )}<br />

                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-success">Update</button>&nbsp;
                    <Link to="/team" className="button is-success">Back</Link>
                  </div>      
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default EditTeam