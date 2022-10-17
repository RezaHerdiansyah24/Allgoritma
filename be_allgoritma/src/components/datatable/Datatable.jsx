import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom"

const Datatable = () => {

  const [features, setFeatures] = useState([]);

  useEffect(()=>{
    getFeatures();
  },[]);

  const getFeatures = async () => {
    const response = await axios.get('http://localhost:5000/features');
    setFeatures(response.data);
  };

  const deleteFeatures = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/features/${id}`);
      getFeatures();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
          <div className="title mt-5"><h1>Features</h1></div>
            <div className="columns mt-5 is-centered">
                <div className="column is-half">
                  <div>
                    <Link to={`add`} style={{ textDecoration: 'none'}} className="button is-success" width="230">
                      Add New Features
                    </Link>
                  </div><br />
                    <table className="table is-striped is-fullwidth is-bordered">
                      <thead>
                        <tr>&nbsp;
                          <th width="20">No</th>
                          <th width="200">Name Feature</th>
                          <th width="200">Description</th>
                          <th width="120">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {features.map((features, index) =>(
                          <tr key={features.id}>&nbsp;
                            <td>{index + 1}</td>
                            <td>{features.name}</td>
                            <td>{features.description}</td>
                            <td>
                              <Link to={`edit/${features.id}`} 
                                    style={{ textDecoration: 'none'}} 
                                    className="button is-small is-info">
                                      Edit
                              </Link>&nbsp;
                              <Link onClick={() => deleteFeatures(features.id)} 
                                    style={{ textDecoration: 'none'}} 
                                    className="button is-small is-danger">
                                      Delete
                              </Link>
                            </td>
                          </tr>
                        ))}                        
                      </tbody>
                    </table>
                </div>
            </div>
          </div>
  )
}

export default Datatable;