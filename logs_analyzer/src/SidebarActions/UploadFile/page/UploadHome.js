import React from "react";
import "../../../styles/Table.css";
import AdminSidebar from "../../../AdminDashboard/comp/AdminSidebar";
import ConfiquratorSidebar from "../../../ConfiquratorDashboard/comp/ConfiquratorSidebar";
import AdminHeader from "../../../AdminDashboard/comp/AdminHeader";
import ConfiquratorHeader from "../../../ConfiquratorDashboard/comp/ConfiquratorHeader";

const UploadHome = (props) => {
  return (
    <div className="App">
      {props.role === "admin" ? <AdminSidebar /> : <ConfiquratorSidebar />}
      <div className="App2">
        {props.role === "admin" ? <AdminHeader /> : <ConfiquratorHeader />}
        <main className="main-content">
          <div className="main-title">
            <h3>Upload File</h3>
          </div>
          <hr />
          <div className="logs-page"></div>
        </main>
      </div>
    </div>
  );
};

export default UploadHome;
