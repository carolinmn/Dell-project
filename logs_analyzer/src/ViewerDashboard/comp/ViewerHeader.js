import React from 'react';
import "../../styles/header.css";


const ViewerHeader = () => {
  return (
    <header className="header">
      <div className="leftheader">
        <h3>Viewer Dashboard </h3>
      </div>
      <div className="rightheader">
        <i class="fa-regular fa-bell"></i>
        <img src=""></img>
        <span>Ahmad Agbaria</span>
      </div>
    </header>
  );
}

export default ViewerHeader;
