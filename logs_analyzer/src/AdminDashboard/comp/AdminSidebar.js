import "../../comp/Sidebar.css";
import {NavLink } from "react-router-dom";


function AdminSidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">Log Analyzer</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <NavLink className="a-sidebar" to="/">
          <li className="sidebar-list-item">
            <i class="fa-solid fa-table-columns"></i> Dashboard
          </li>
        </NavLink>

        <NavLink className="a-sidebar" to="/user">
          <li className="sidebar-list-item">
            <i class="fas fa-users"></i> Users
          </li>
        </NavLink>

        <NavLink className="a-sidebar" to="/logs">
          <li className="sidebar-list-item">
            <i class="fa-regular fa-file"></i> Logs
          </li>
        </NavLink>
        
        <NavLink className="a-sidebar" to="/rules">
          <li className="sidebar-list-item">
          <i class="fa-solid fa-scale-balanced"></i> Rules
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
