import React from 'react';
import "../../styles/Home.css";
import ConfiquratorSidebar from "../comp/ConfiquratorSidebar";
import {Link } from "react-router-dom";
import AdminHeader from '../../AdminDashboard/comp/AdminHeader';


const ConfiquratorHome = () => {
  return (
    <div className="App">
    <ConfiquratorSidebar/>

    <div className="App2">
      <AdminHeader role="Confiqurator"/>

      <main className="main-content">
        <div className="main-title">
          <h3>DASHBOARD</h3>
        </div>
        <hr />

        <div className="main-cards">

        <Link to="/confiqurator/uploadfile" className="card-btn">
            <div className="card">
            <i class="fa-solid fa-upload card-icon"></i>
              <h1>Upload</h1>
            </div>
          </Link>


          <Link to="/confiqurator/logs" className="card-btn">
            <div className="card">
              <i class="fa-regular fa-file card-icon"></i>
              <h1>Logs</h1>
            </div>
          </Link>

          <Link to="/confiqurator/rules" className="card-btn">
            <div className="card">
            <i class="fa-solid fa-scale-balanced card-icon"></i>
              <h1>Rules</h1>
            </div>
          </Link>

          <Link to="/confiqurator/reports" className="card-btn">
            <div className="card">
            <i class="fa-solid fa-flag card-icon"></i>
              <h1>Reports</h1>
            </div>
          </Link>
        </div>
      </main>
    </div>
  </div>
  );
}

export default ConfiquratorHome;
