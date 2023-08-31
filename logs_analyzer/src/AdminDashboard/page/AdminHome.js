import React from "react";
import "./AdminHome.css";
import Header from "../comp/AdminHeader";
import Sidebar from "../comp/AdminSidebar";

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
            <a href="/usertable" className="card-btn">
              <div className="card">
                <i class="fas fa-users card-icon"></i>
                <h1>Users</h1>
                <h2>300</h2>
              </div>
            </a>

            <a href="/Logs" className="card-btn">
              <div className="card">
                <i class="fa-regular fa-file card-icon"></i>
                <h1>Logs</h1>
                <h2>12</h2>
              </div>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
