import React from 'react';
import "../../styles/Sidebar.css";
import {NavLink } from "react-router-dom";

const ViewerSidebar = () => {
  return (
    <aside id="sidebar">
    <div className="sidebar-title">
      <div className="sidebar-brand">Log Analyzer</div>

    </div>

    <ul className="sidebar-list">

      <NavLink className="a-sidebar dashboard" to="/viewer">
        <li className="sidebar-list-item">
          <i class="fa-solid fa-table-columns"></i> Dashboard
        </li>
      </NavLink>

            
      <NavLink className="a-sidebar" to="/viewer/reports">
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

export default ViewerSidebar;
