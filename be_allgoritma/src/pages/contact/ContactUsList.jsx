import React, {useState, useEffect} from 'react'
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import {Link} from "react-router-dom"

const ContactUsList = () => {

  const [contact, setContact] = useState([]);

  useEffect(()=>{
    getContactUs();
  },[]);

  const getContactUs = async () => {
    const response = await axios.get('http://localhost:5000/contactus');
    setContact(response.data);
  };

  const deleteContactUs = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contactus/${id}`);
      getContactUs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
            <div className="title mt-5"><h1>Contact Us</h1></div>
            <div className="columns mt-5 is-centered">
                <div className="column is-half">
                  <div>
                    <Link to={`add`} style={{ textDecoration: 'none'}} className="button is-success" width="230">
                      Add New
                    </Link>
                  </div><br />
                    <table className="table is-striped is-fullwidth is-bordered">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Message</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contact.map((contact, index) =>(
                          <tr key={contact.id}>
                            <td>{index + 1}</td>
                            <td>{contact.username}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                            <td>{contact.status}</td>
                            <td>
                              <Link to={`edit/${contact.id}`} 
                                    className="button is-small is-info">
                                      Edit
                              </Link>
                              <Link onClick={() => deleteContactUs(contact.id)}
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
    </div>
  )
}

export default ContactUsList