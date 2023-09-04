import React from "react";
import "./AdminHome.css";
import Header from "../comp/AdminHeader";
import Sidebar from "../comp/AdminSidebar";
import {Link } from "react-router-dom";


const AdminHome = (OpenSidebar, openSidebarToggle) => {
  return (
    <div className="App">
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <div className="App2">
        <Header OpenSidebar={OpenSidebar} />

        <main className="main-content">
          <div className="main-title">
            <h3>DASHBOARD</h3>
          </div>
          <hr />

          <div className="main-cards">
            <Link to="/user" className="card-btn">
              <div className="card">
                <i class="fas fa-users card-icon"></i>
                <h1>Users</h1>
                <h2>12</h2>
              </div>
            </Link>

            <Link to="/logs" className="card-btn">
              <div className="card">
                <i class="fa-regular fa-file card-icon"></i>
                <h1>Logs</h1>
                <h2>3</h2>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
