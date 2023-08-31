import React, { useState } from "react";
import "./Logs.css";
import Header from "../comp/AdminHeader";
import Sidebar from "../comp/AdminSidebar";

const Logs = ( OpenSidebar, openSidebarToggle) => {
  const data = [
    {
      _id: 1,
      user_name: "User1",
      file_name: "file1.txt",
      file_date: "2023-08-31",
      process: [
        { rules: "Rule 1", rank: "low", message: "Message 1", date: "2023-08-31" },
        { rules: "Rule 2", rank: "hight", message: "Message 2", date: "2023-08-30" },
      ], 
    },

    {
      _id: 1,
      user_name: "User1",
      file_name: "file1.txt",
      file_date: "2023-08-31",
      process: [
        { rules: "Rule 1", rank: "low", message: "Message 1", date: "2023-08-31" },
        { rules: "Rule 2", rank: "hight", message: "Message 2", date: "2023-08-30" },
      ], 
    },


    {
      _id: 1,
      user_name: "User1",
      file_name: "file1.txt",
      file_date: "2023-08-31",
      process: [
        { rules: "Rule 1", rank: "low", message: "Message 1", date: "2023-08-31" },
        { rules: "Rule 2", rank: "hight", message: "Message 2", date: "2023-08-30" },
      ], 
    },
  ];

    //for the number of page
    const [currentpage, setcurrentpage] = useState(1);
    const recordsperPage =6;
    const lastIndex = currentpage * recordsperPage;
    const firstIndex = lastIndex - recordsperPage;
    const records = data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.length / recordsperPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <div className="App">
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <div className="App2">
        <Header  />
        <main className="main-content">
          <div className="main-title">
            <h3>Logs Table</h3>
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
                  <th>Process</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody >
                {records.map((log) => (
                  <tr key={log._id} className="rowbody">
                    <td>{log._id}</td>
                    <td>{log.user_name}</td>
                    <td>{log.file_name}</td>
                    <td>{log.file_date}</td>
                    <td><button className="processBTN" >Show</button></td>
                    <td><i class="fa-regular fa-pen-to-square editbtn"></i>  <i class="fa-solid fa-trash deletebtn"></i></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" onClick={prePage}>
                    Prev
                  </a>
                </li>
                {numbers.map((n, i) => (
                  <li
                    className={`page-item ${currentpage === n ? "active" : ""}`}
                    key={i}
                  >
                    <a href="#" className="page-link" onClick={()=>changeCPage(n)}>
                      {n}
                    </a>
                  </li>
                ))}

                <li className="page-item">
                  <a href="#" className="page-link" onClick={nextPage}>
                    Next
                  </a>
                </li>

                <button className="AddTable">Add</button>
              </ul>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );

  function nextPage(){
    if(currentpage!==npage){
      setcurrentpage(currentpage+1)
    }
}

function prePage(){
  if(currentpage!==1){
    setcurrentpage(currentpage-1)
  }
}

function changeCPage(id){
    setcurrentpage(id)
}
};

export default Logs;
