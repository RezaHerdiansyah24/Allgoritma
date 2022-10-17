import "./team.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Team2 from "../../components/team2/Team2"

const Team = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Team2 />
      </div>
    </div>
  )
}

export default Team