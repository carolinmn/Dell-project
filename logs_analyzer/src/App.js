import './App.css';
import AdminHome from './AdminDashboard/page/AdminHome';
import { useState } from "react";
import ReportsHome from './Reports/page/Home';
import RoleManagmentsHome from './RoleManagment/page/Home';
import FileHome from './Files/page/Home';



//<AdminHome openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
  <div>
    <AdminHome  />      
  </div>
  );
}

export default App;
