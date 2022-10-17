import React, {useState} from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const New = () => {
  const[title, setTitle] = useState("");
  const[tanggal_lahir, setTanggalLahir] = useState("");
  const[jabatan, setJabatan] = useState("");
  const[file, setFile] = useState("");
  const[preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) =>{
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveTeam = async(e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("tanggal_lahir", tanggal_lahir);
    formData.append("jabatan", jabatan);
    try {
      await axios.post("http://localhost:5000/team", formData, {
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
        <div className="title mt-5">Add Team</div>
          <div className="columns is-centered mt-5">
            <div className="column is-half">
              <form onSubmit={saveTeam}>
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
                  )}

                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-success">Save</button>&nbsp;
                    <Link to="/team" className="button is-success">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default New