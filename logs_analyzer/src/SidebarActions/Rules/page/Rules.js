import React, { useState } from "react";
import "../../../styles/Table.css";
import AdminSidebar from "../../../AdminDashboard/comp/AdminSidebar";
import AdminHeader from "../../../AdminDashboard/comp/AdminHeader";
import RuleAdd from "../comp/RuleAdd";
import RuleUpdate from "../comp/RuleUpdate";
import ConfiquratorSidebar from "../../../ConfiquratorDashboard/comp/ConfiquratorSidebar";
import ConfiquratorHeader from "../../../ConfiquratorDashboard/comp/ConfiquratorHeader";

const Rules = (props) => {
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

  //  const [data, setData] = useState([{}]);
//   useEffect(() => {
//     if (props.role === "admin") {
//       const response = fetch("http://localhost:5000/admin/rules", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setData(response.json());
//     }else {
//       const response = fetch("http://localhost:5000/confiqurator/rules", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setData(response.json());
//     }
//   }, []);

  

  //for open adduser comp
  const [compAddRules, setCompAddRules] = useState(false);
  const [compEditRules, setCompEditRules] = useState(false);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handledelete = (idx) => {
    const response = fetch("http://localhost:5000/Rules/delete", {
      method: "DELETE",
      body: JSON.stringify(idx),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

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
      {props.role==="admin"? <AdminSidebar/> : <ConfiquratorSidebar/>}

      <div className="App2">
      {props.role==="admin"? <AdminHeader /> : <ConfiquratorHeader/>}

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
                      <i class="fa-solid fa-trash deletebtn  "   onClick={() => handledelete(i)}></i>
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
