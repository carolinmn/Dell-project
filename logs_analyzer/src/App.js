import "./App.css";
import AdminHome from "./AdminDashboard/page/AdminHome";
import { useState } from "react";
import ReportsHome from "./Reports/page/Home";
import RoleManagmentsHome from "./RoleManagment/page/Home";
import FileHome from "./Files/page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTable from "./AdminDashboard/page/UserTable";
import Logs from "./AdminDashboard/page/Logs";
import Rules from "./AdminDashboard/page/Rules";

//<AdminHome openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <BrowserRouter>
    <Routes>
      {/*     <Route path="/" element={<ReportsHome />} />*/} 
    <Route path="/" element={<AdminHome />} />
    <Route path="/user" element={<UserTable />} />
    <Route path="/logs" element={<Logs />} />
    <Route path="/rules" element={<Rules />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
