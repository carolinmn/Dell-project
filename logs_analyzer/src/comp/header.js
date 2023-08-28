import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <header className="header">
    
        <div className="leftheader">
          <h3>{props.pagename}</h3>
        </div>
        <div className="rightheader">
          <i class="fa-regular fa-bell"></i>
          <img src=""></img>
          <span>user name</span>
        </div>
    
    </header>
  );
};

export default Header;
