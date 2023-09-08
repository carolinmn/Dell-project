import React from 'react';
import "../../styles/Sidebar.css";
import {NavLink } from "react-router-dom";

const ConfiquratorSidebar = () => {
  return (
    <aside id="sidebar">
    <div className="sidebar-title">
      <div className="sidebar-brand">Log Analyzer</div>

    </div>

    <ul className="sidebar-list">

      <NavLink className="a-sidebar dashboard" to="/confiqurator">
        <li className="sidebar-list-item">
          <i class="fa-solid fa-table-columns"></i> Dashboard
        </li>
      </NavLink>

      <NavLink className="a-sidebar " to="/confiqurator/uploadfile">
        <li className="sidebar-list-item">
        <i class="fa-solid fa-upload"></i> Upload File
        </li>
      </NavLink>


      <NavLink className="a-sidebar" to="/confiqurator/logs">
        <li className="sidebar-list-item">
          <i class="fa-regular fa-file"></i> Logs
        </li>
      </NavLink>
      
      <NavLink className="a-sidebar" to="/confiqurator/rules">
        <li className="sidebar-list-item">
        <i class="fa-solid fa-scale-balanced"></i> Rules
        </li>
      </NavLink>

            
      <NavLink className="a-sidebar" to="/confiqurator/reports">
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

export default ConfiquratorSidebar;
