import React, { useState } from "react";
import "./Logs.css";
import Sidebar from "../comp/AdminSidebar";
import Header from "../comp/AdminHeader";
import RuleAdd from "../comp/RuleAdd";
import RuleUpdate from "../comp/RuleUpdate";

const Rules = (OpenSidebar, openSidebarToggle) => {
  const [data, setData] = useState([
    {
      _id: "1",
      rule_name: "xyz",
      keywords: ["a", "baa"],
    },
    {
      _id: "2",
      rule_name: "xyz",
      keywords: ["a", "b"],
    },
  ]);

  //for open adduser comp
  const [compAddRules, setCompAddRules] = useState(false);
  const [compEditRules, setCompEditRules] = useState(false);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setCompEditRules(true);
  };

  //for the number of page
  const [currentpage, setcurrentpage] = useState(1);
  const recordsperPage = 5;
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
        <Header />

        <main className="main-content">
          <div className="main-title">
            <h3>Rules Table</h3>
          </div>
          <hr />

          <div className="logs-page">
            <table className="logs-table">
              <tr>
                <th>ID</th>
                <th>Rule Name</th>
                <th>Rule KeyWords</th>
                <th>Actions</th>
              </tr>

              {records.length &&
                records.map((d, i) => (
                  <tr className="rowbody" key={i}>
                    <td>{d._id}</td>
                    <td>{d.rule_name}</td>
                    <td>
                      {" "}
                      {d.keywords.map((keyword, j) => (
                        <div key={j}>{keyword}</div>
                      ))}
                    </td>

                    <td>
                      <i
                        class="fa-regular fa-pen-to-square editbtn"
                        onClick={() => handleEditRow(i)}
                      ></i>{" "}
                      <i class="fa-solid fa-trash deletebtn"></i>
                    </td>
                  </tr>
                ))}
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
                  onClick={() => setCompAddRules(true)}
                >
                  Add
                </button>
              </ul>
            </nav>
          </div>

          <div>
            {compAddRules && (
              <RuleAdd
                closeAddRule={() => {
                  setCompAddRules(false);
                }}
              />
            )}
          </div>

          <div>
            {compEditRules && (
              <RuleUpdate
                closeEditRule={() => {
                  setCompEditRules(false);
                  setRowToEdit(null);
                }}
                defaultValue={rowToEdit !== null && data[rowToEdit]}
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

export default Rules;