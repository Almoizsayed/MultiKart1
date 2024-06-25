import React from "react";
import Sidebar from "./Components/Sidebar";
import NavBar from "./Components/NavBar";
import UserList from "./Components/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Components/AddUser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import EditUser from "./Components/EditUser";

// import UserWidget from "./Components/UserWidget";
// import Functionality from "./Components/Functionality";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="font-poppins">
          <Sidebar />
          <div className="hidden md:block md:ml-64">
            <NavBar />
          </div>
          <div className="md:ml-64">
            <ToastContainer />
            <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/edit-user/:userId" element={<EditUser />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
