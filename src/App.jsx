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
        <div className="flex">
          <Sidebar />
          <div className="w-full h-18 flex  flex-col">
            <NavBar />
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
