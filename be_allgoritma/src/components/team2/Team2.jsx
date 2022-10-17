import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const Team2 = () => {
  const [team, setTeam] = useState([]);

  useEffect(()=>{
    getTeam();
  },[]);

  const getTeam = async() =>{
    const response = await axios.get("http://localhost:5000/team");
    setTeam(response.data);
  };

  const deleteTeam = async (teamId) => {
    try {
      await axios.delete(`http://localhost:5000/team/${teamId}`);
      getTeam();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="title mt-5">Team</div>
      <Link to="/team/new" className="button is-success">Add New</Link>
        <div className="columns is-multiline">
          {team.map((team)=>(
            <div className="column is-one-quarter" key={team.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={team.url}
                       alt="Image"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{team.name}</p>
                  </div>
                </div>                
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{team.tanggal_lahir}</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{team.jabatan}</p>
                  </div>
                </div>
              </div>
              
              <footer className='card-footer'>
                <Link to={`edit/${team.id}`} className="card-footer-item">Edit</Link>
                <a onClick={()=> deleteTeam(team.id)} className="card-footer-item">Delete</a>
              </footer>
            </div>            
          </div>
          ))}
        </div>
    </div>
  )
}

export default Team2