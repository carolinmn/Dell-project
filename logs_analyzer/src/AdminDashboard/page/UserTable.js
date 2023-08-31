import React from "react";
import Sidebar from "../comp/AdminSidebar";
import Header from "../comp/AdminHeader";
import "./UserTable.css";

const UserTable = (OpenSidebar, openSidebarToggle) => {
  const data = [
    {
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      Email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      Email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      Email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
  ];

  return (
    <div className="App">
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <div className="App2">
        <Header />

        <main className="main-content">
          <div className="main-title">
            <h3>Users Table</h3>
          </div>
          <hr />

          <table>
            <tr className="head">
              <th>User name</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>role</th>
              <th>action</th>
            </tr>

            {data.length &&
              data.map((user) => (
                <tr>
                  <td>ahmad</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.Email}</td>
                  <td>{user.Phone}</td>
                  <td>{user.role}</td>
                  <td><i class="fa-regular fa-pen-to-square"></i>  <i class="fa-solid fa-trash"></i></td>
                </tr>
              ))}
          </table>
        </main>
      </div>
    </div>
  );
};

export default UserTable;
