import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Contactus from "../../components/contactus/Contactus";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <Featured />
        </div>
        <div className="listContainer">
          <Contactus />
        </div>
      </div>
    </div>
  );
};

export default Home;
