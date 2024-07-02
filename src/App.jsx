// import React from "react";
// import NavBar from "./Components/NavBar";
// import UserList from "./Components/UserList";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AddUser from "./Components/AddUser";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import EditUser from "./Components/EditUser";
// import Dashboard from "./Components/Dashboard";
// import Sidebar from "./Components/Sidebar";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div className="font-poppins">
//           <div className="hidden md:block md:ml-64">
//             <NavBar />

//           </div>
//           <div className="md:ml-64">
//             <ToastContainer />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/users" element={<UserList />} />
//               <Route path="/add-user" element={<AddUser />} />
//               <Route path="/edit-user/:userId" element={<EditUser />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthenticatedApp from "./Components/AuthenticatedApp";
import UnauthenticatedApp from "./Components/unAuthenticatedApp";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <ToastContainer />
      {isAuthenticated ? (
        <AuthenticatedApp setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <UnauthenticatedApp setIsAuthenticated={setIsAuthenticated} />
      )}
    </Router>
  );
};

export default App;
