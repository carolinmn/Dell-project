import React, { useState } from "react";
import "../../../styles/form.css";
const LogsUpdate = ({closeEditLogs,defaultValue}) => {

  const [inputs, setInputs] = useState(defaultValue||{});

  const validateForm=()=>{
    if(inputs.user_name&& inputs.file_name &&inputs.file_date )
    return true;
  return false
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const  handleSubmit = async(event) => {
    event.preventDefault();

    if(!validateForm()) return;

    const response = await fetch("http://localhost:5000/logs/update", {
      method: "PUT",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });

    closeEditLogs()
    
    }

  return (
    <div className="mainForm-container" onClick={(e)=>{
      if(e.target.className==="mainForm-container")
      closeEditLogs();
    }}>
      <div className="mainForm">
        <form onSubmit={handleSubmit}>

        <div className="form-group">
            <label>ID: </label>
            <input type="text"  name="_id"   value={inputs._id || ""} onChange={handleChange} disabled />
          </div>
          <div className="form-group">
            <label>User Name: </label>
            <input type="text"  name="user_name"   value={inputs.user_name || ""} onChange={handleChange} />
          </div>
        
          <div className="form-group">
            <label >File Name: </label>
            <input type="text" name="file_name"  value={inputs.file_name || ""} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label >File Date: </label>
            <input type="text"  name="file_date"  value={inputs.file_date || ""} onChange={handleChange}/>
          </div>
          
          <button type="submit" className="btn" onClick={handleSubmit}>Update</button>
        </form>
      </div>
    </div>
  );
}

export default LogsUpdate;
