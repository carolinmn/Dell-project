import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AdminSidebar from "../../../AdminDashboard/comp/AdminSidebar";
import AdminHeader from "../../../AdminDashboard/comp/AdminHeader";
import "../../../styles/Table.css";
import ProcessUpdate from "../comp/ProcessUpdate";
import ProcessAdd from "../comp/ProcessAdd";
import data from "../comp/logsdata";
import ConfiquratorSidebar from "../../../ConfiquratorDashboard/comp/ConfiquratorSidebar";
import ConfiquratorHeader from "../../../ConfiquratorDashboard/comp/ConfiquratorHeader";

const ProcessLogs = (props) => {
  const { id } = useParams();
  const logData = data.find((log) => log._id === parseInt(id));



  // for open adduser comp
  const [compAddProcess, setCompAddProcess] = useState(false);
  const [compEditProcess, setCompEditProcess] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setCompEditProcess(true);
  };

  const handledelete = (idx) => {
    const response = fetch("http://localhost:5000/process/logs/delete/"+id, {
      method: "DELETE",
      body: JSON.stringify(idx),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

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
      {props.role==="admin"? <AdminHeader /> : <ConfiquratorHeader/>}
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
                  <th>Actions</th>
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
                      <td>
                        <i
                          className="fa-regular fa-pen-to-square editbtn"
                          onClick={() => handleEditRow(i)}
                        ></i>{" "}
                        <i className="fa-solid fa-trash deletebtn" onClick={() => handledelete(i)}></i>
                      </td>
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
                <button
                  className="AddTable"
                  onClick={() => setCompAddProcess(true)}
                >
                  Add
                </button>
              </ul>
            </nav>
          </div>

          <div>
            {compAddProcess && <ProcessAdd closeAddProcess={() => setCompAddProcess(false)} id={id}/>}
          </div>

          <div>
            {compEditProcess && (
              <ProcessUpdate
                closeEditProcess={() => {
                  setCompEditProcess(false);
                  setRowToEdit(null);
                }}
                defaultValue={rowToEdit !== null && records[rowToEdit]}
                id={id}
              />
            )}
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
