import React from "react";
import "../../comp/header.css";

const AdminHeader = () => {
  return (
    <header className="header">
      <div className="leftheader">
        <h3>Admin Dashboard </h3>
      </div>
      <div className="rightheader">
        <i class="fa-regular fa-bell"></i>
        <img src=""></img>
        <span>Ahmad Agbaria</span>
      </div>
    </header>
  );
};

export default AdminHeader;
