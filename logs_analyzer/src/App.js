import './App.css';
import AdminHome from './AdminDashboard/page/AdminHome';
import { useState } from "react";
import ReportsHome from './Reports/page/Home';
import RoleManagmentsHome from './RoleManagment/page/Home';
import FileHome from './Files/page/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTable from './AdminDashboard/page/UserTable';




//<AdminHome openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<AdminHome />} />
  <Route path="/usertable" element={<UserTable />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
