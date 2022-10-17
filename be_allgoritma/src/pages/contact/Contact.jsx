import "./contact.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Contactus from "../../components/contactus/Contactus"

const Contact = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Contactus/>
      </div>
    </div>
  )
}

export default Contact