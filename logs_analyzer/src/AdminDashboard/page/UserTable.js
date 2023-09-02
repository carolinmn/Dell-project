import React, { useState } from "react";
import Sidebar from "../comp/AdminSidebar";
import Header from "../comp/AdminHeader";
import "./Logs.css";
import UserAdd from "../comp/UserAdd";
import UserUpdate from "../comp/UserUpdate";

const UserTable = (OpenSidebar, openSidebarToggle) => {
  const [data,setData] =useState( [
    {
      _id: "1",
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      _id: "2",
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      _id: "3",
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      _id: "4",
      userName: "Axwara",
      firstName: "Aaaaa",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      _id: "5",
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      _id: "6",
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      _id: "7",
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      _id: "8",
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      _id: "9",
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      _id: "10",
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      _id: "11",
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
    {
      _id: "12",
      userName: "Axwara",
      firstName: "Ahmad",
      lastName: "Agbaria",
      email: "ah@gmail.com",
      Phone: "123456789",
      role: "user",
    },
  
  ]);


  //for open adduser comp
  const [compAddUser, setCompAddUser] = useState(false);
  const [compEditUser, setCompEditUser] = useState(false);
  
  
  const [rowToEdit, setRowToEdit] = useState(null);



  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setCompEditUser(true);
  };

  //for the number of page
  const [currentpage, setcurrentpage] = useState(1);
  const recordsperPage =5;
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
            <h3>Users Table</h3>
          </div>
          <hr />

          <div className="logs-page">
            <table className="logs-table">
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>

              {records.length &&
                records.map((d, i) => (
                  <tr className="rowbody" key={i}>
                    <td>{d._id}</td>
                    <td>{d.userName}</td>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.Email}</td>
                    <td>{d.Phone}</td>
                    <td>{d.role}</td>
                    <td>
                      <i class="fa-regular fa-pen-to-square editbtn"  onClick={() =>handleEditRow(i) } ></i>{" "}
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
                <button className="AddTable" onClick={() =>setCompAddUser(true) }>Add</button>
              </ul>
            </nav>
          </div>

          <div>
            {compAddUser&&<UserAdd closeAddUser={()=>{
              setCompAddUser(false);
            }}/>}
          </div>

          <div>
            {compEditUser&&<UserUpdate closeEditUser={()=>{
              setCompEditUser(false);
              setRowToEdit(null)
            }}
            defaultValue={rowToEdit !== null && data[rowToEdit]}
            />}
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

export default UserTable;
