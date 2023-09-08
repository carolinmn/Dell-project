import "../../styles/Sidebar.css";
import {NavLink } from "react-router-dom";


function AdminSidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">Log Analyzer</div>

      </div>

      <ul className="sidebar-list">

        <NavLink className="a-sidebar dashboard" to="/admin">
          <li className="sidebar-list-item">
            <i class="fa-solid fa-table-columns"></i> Dashboard
          </li>
        </NavLink>

        <NavLink className="a-sidebar " to="/admin/uploadfile">
          <li className="sidebar-list-item">
          <i class="fa-solid fa-upload"></i> Upload File
          </li>
        </NavLink>

        <NavLink className="a-sidebar" to="/admin/users">
          <li className="sidebar-list-item">
            <i class="fas fa-users"></i> Users
          </li>
        </NavLink>

        <NavLink className="a-sidebar" to="/admin/logs">
          <li className="sidebar-list-item">
            <i class="fa-regular fa-file"></i> Logs
          </li>
        </NavLink>
        
        <NavLink className="a-sidebar" to="/admin/rules">
          <li className="sidebar-list-item">
          <i class="fa-solid fa-scale-balanced"></i> Rules
          </li>
        </NavLink>

              
        <NavLink className="a-sidebar" to="/admin/reports">
          <li className="sidebar-list-item">
          <i class="fa-solid fa-flag"></i> Reports
          </li>
        </NavLink>

        

        <a className="a-sidebar" href="/">
          <li className="sidebar-list-item signout">
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign out
          </li>
        </a>

        

      </ul>
    </aside>
  );
}

export default AdminSidebar;
