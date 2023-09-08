import React from "react";
import "../../../styles/Table.css";
import AdminSidebar from "../../../AdminDashboard/comp/AdminSidebar";
import ConfiquratorSidebar from "../../../ConfiquratorDashboard/comp/ConfiquratorSidebar";
import AdminHeader from "../../../AdminDashboard/comp/AdminHeader";
import ConfiquratorHeader from "../../../ConfiquratorDashboard/comp/ConfiquratorHeader";
import ViewerSidebar from "../../../ViewerDashboard/comp/ViewerSidebar";
import ViewerHeader from "../../../ViewerDashboard/comp/ViewerHeader";

const ReportsHome = (props) => {
  return (
    <div className="App">
      {props.role === "admin" ? (
        <AdminSidebar />
      ) : props.role === "configurator" ? (
        <ConfiquratorSidebar />
      ) : (
        <ViewerSidebar />
      )}{" "}
      <div className="App2">
        {props.role === "admin" ? (
          <AdminHeader />
        ) : props.role === "confiqurator" ? (
          <ConfiquratorHeader />
        ) : (
          <ViewerHeader />
        )}
        <main className="main-content">
          <div className="main-title">
            <h3>Reports</h3>
          </div>
          <hr />
          <div className="logs-page"></div>
        </main>
      </div>
    </div>
  );
};

export default ReportsHome;
