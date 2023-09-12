import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AdminSidebar from "../../../AdminDashboard/comp/AdminSidebar";
import AdminHeader from "../../../AdminDashboard/comp/AdminHeader";
import "../../../styles/Table.css";
import data from "../comp/logsdata";
import ConfiquratorSidebar from "../../../ConfiquratorDashboard/comp/ConfiquratorSidebar";

const ProcessLogs = (props) => {
  const { id } = useParams();
  const logData = data.find((log) => log._id === parseInt(id));






  

  // for the number of page
  const [currentpage, setcurrentpage] = useState(1);
  const recordsperPage = 5;
  const lastIndex = currentpage * recordsperPage;
  const firstIndex = lastIndex - recordsperPage;
  const records = logData.process.slice(firstIndex, lastIndex); // Access the process array

  const npage = Math.ceil(logData.process.length / recordsperPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <div className="App">
      {props.role==="admin"? <AdminSidebar/> : <ConfiquratorSidebar/>}
      <div className="App2">
      {props.role==="admin"? <AdminHeader role="Admin" /> : <AdminHeader role="Confiqurator" />}
        <main className="main-content">
          <div className="main-title">
            <h3>Process for {logData.user_name}</h3>
          </div>
          <hr />

          <div className="logs-page">
            <table className="logs-table">
              <thead>
                <tr>
                  <th>Rules</th>
                  <th>Rank</th>
                  <th>Message</th>
                  <th>Date</th>
                  
                </tr>
              </thead>
              <tbody>
                {records.length > 0 &&
                  records.map((d, i) => (
                    <tr className="rowbody" key={i}>
                      <td>{d.rules}</td>
                      <td>{d.rank}</td>
                      <td>{d.message}</td>
                      <td>{d.date}</td>
                      
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
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => changeCPage(n)}
                    >
                      {n}
                    </a>
                  </li>
                ))}
                <li className="page-item">
                  <a href="#" className="page-link" onClick={nextPage}>
                    Next
                  </a>
                </li>
          
              </ul>
            </nav>
          </div>


        
        </main>
      </div>
    </div>
  );

  function nextPage() {
    if (currentpage !== npage) {
      setcurrentpage(currentpage + 1);
    }
  }

  function prePage() {
    if (currentpage !== 1) {
      setcurrentpage(currentpage - 1);
    }
  }

  function changeCPage(id) {
    setcurrentpage(id);
  }
};

export default ProcessLogs;
