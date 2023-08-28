import React from "react";
import "./Home.css";
import Header from "../../comp/header";
import Sidebar from "../../comp/Sidebar";

const Home = (OpenSidebar, openSidebarToggle) => {

  
  return (
    
    <div className="App">
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <div className="App2">
        <Header OpenSidebar={OpenSidebar} pagename="File Page"  />

        <main className="main-content">
            
          Hello there
          {/*change the name of file and start Work  */}


        </main>


      </div>
    </div>
  );
};

export default Home;
