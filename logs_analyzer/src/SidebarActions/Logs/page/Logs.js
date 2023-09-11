import { useState, useEffect } from "react";
import "../../../styles/Table.css";
import { Link, useHistory } from "react-router-dom";
import AdminHeader from "../../../AdminDashboard/comp/AdminHeader";
import AdminSidebar from "../../../AdminDashboard/comp/AdminSidebar";
import data from "../comp/logsdata";
import ConfiquratorSidebar from "../../../ConfiquratorDashboard/comp/ConfiquratorSidebar";
import ConfiquratorHeader from "../../../ConfiquratorDashboard/comp/ConfiquratorHeader";

const Logs = (props) => {
  //  get data from the backend

//  const [data, setData] = useState([{}]);
//   useEffect(() => {
//     if (props.role === "admin") {
//       const response = fetch("http://localhost:5000/admin/logs", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setData(response.json());
//     }else {
//       const response = fetch("http://localhost:5000/confiqurator/logs", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setData(response.json());
//     }
//   }, []);


  const handledelete = (idx) => {
    const response = fetch("http://localhost:5000/logs/delete", {
      method: "DELETE",
      body: JSON.stringify(idx),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      {props.role === "admin" ? <AdminSidebar /> : <ConfiquratorSidebar />}
      <div className="App2">
        {props.role === "admin" ? <AdminHeader /> : <ConfiquratorHeader />}
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
              <tbody>
                {records.map((d, i) => (
                  <tr key={d._id} className="rowbody">
                    <td>{d._id}</td>
                    <td>{d.user_name}</td>
                    <td>{d.file_name}</td>
                    <td>{d.file_date}</td>
                    <td>
                      <Link to={`/admin/process-logs/${d._id}`}>
                        <button className="processBTN">Show</button>
                      </Link>
                    </td>
                    <td>
                      <i
                        class="fa-solid fa-trash deletebtn"
                        onClick={() => handledelete(i)}
                      ></i>
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

export default Logs;
