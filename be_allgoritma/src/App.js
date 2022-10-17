import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import View from "./pages/view/View";
import Team from "./pages/team/Team";
import EditTeam from "./pages/team/EditTeam";
import Test from "./pages/test/Test";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Chat from "./pages/chat/Chat";
import ViewAbout from "./pages/viewabout/ViewAbout";
import ViewFeatures from "./pages/viewfeatures/ViewFeatures";
import ViewTeam from "./pages/viewteam/ViewTeam";
import Screenshot from "./pages/screenshot/Screenshot";
import NewScreenshot from "./pages/newscreenshot/NewScreenshot";
import NewFeatures from "./pages/newfeatures/NewFeatures";
import EditFeatures from "./pages/editfeatures/EditFeatures";
import ContactUsList from "./pages/contact/ContactUsList";
import AddContactUs from "./pages/contact/AddContactUs";
import EditContactUs from "./pages/contact/EditContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs, screenshotInputs, teamInputs, chatInputs, viewInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="about">
              <Route index element={<About />} />
              <Route path=":userId" element={<Single />} />
              <Route path="edit" element={<Chat inputs={chatInputs} title="Update Keterangan" />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              <Route path="view" element={<ViewAbout inputs={chatInputs} title="View About" />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="add" element={<NewFeatures title="Add New Features" />} />
              <Route path="view" element={<ViewFeatures inputs={viewInputs} title="View Features" />} />
              <Route path="edit/:id" element={<EditFeatures />} />
            </Route>
            <Route path="screenshot">
              <Route index element={<Screenshot />} />
              <Route path="new" element={<NewScreenshot inputs={screenshotInputs} title="Add New" />} />
              <Route path="view" element={<View inputs={screenshotInputs} title="View Screenshot" />} />
            </Route>
            <Route path="team">
              <Route index element={<Team inputs={teamInputs} title="Team" />} />
              <Route path="new" element={<New title="Add New" />} />
              <Route path="view" element={<ViewTeam inputs={teamInputs} title="View Team" />} /> 
              <Route path="edit/:id" element={<EditTeam inputs={teamInputs} title="Update" />} /> 
            </Route>
            <Route path="contact">
              <Route index element={<Contact inputs={teamInputs} title="Contact Us" />} />
              <Route path="view" element={<Test title="View" />} /> 
            </Route>
            <Route path="contactlist">
              <Route index element={<ContactUsList title="Contact Us List" />} />
              <Route path="add" element={<AddContactUs title="Add New" />} /> 
              <Route path="edit/:id" element={<EditContactUs title="Update Contact Us" />} /> 
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
