import React from "react";
import "./Logs.css";
import Header from "../comp/AdminHeader";
import Sidebar from "../comp/AdminSidebar";

const Logs = ({ OpenSidebar, openSidebarToggle }) => {
  const logsData = [
    {
      _id: 1,
      user_name: "User1",
      file_name: "file1.txt",
      file_date: "2023-08-31",
      process: [
        { rules: "Rule 1", rank: 1, message: "Message 1", date: "2023-08-31" },
        { rules: "Rule 2", rank: 2, message: "Message 2", date: "2023-08-30" },
      ],
    },
  ];

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
            <h3>Logs</h3>
          </div>
          <hr />
          <div className="logs-page">
            <table className="logs-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>File Name</th>
                  <th>File Date</th>
                </tr>
              </thead>
              <tbody>
                {logsData.map((log) => (
                  <tr key={log._id}>
                    <td>{log._id}</td>
                    <td>{log.user_name}</td>
                    <td>{log.file_name}</td>
                    <td>{log.file_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Logs;
