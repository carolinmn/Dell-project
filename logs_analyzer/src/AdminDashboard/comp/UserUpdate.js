import React, { useState } from "react";
import "./form.css";
const UserUpdate = ({closeEditUser,defaultValue}) => {

  const [inputs, setInputs] = useState(defaultValue||{});
  

  const validateForm=()=>{
    if(inputs.userName&& inputs.firstName && inputs.lastName &&inputs.email&& inputs.Phone)
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

    closeEditUser()
    
    }

  return (
    <div className="mainForm-container" onClick={(e)=>{
      if(e.target.className==="mainForm-container")
      closeEditUser();
    }}>
      <div className="mainForm">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User Name: </label>
            <input type="text"  name="userName"   value={inputs.userName || ""} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label >First Name: </label>
            <input type="text" name="firstName"  value={inputs.firstName || ""} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label >Last Name: </label>
            <input type="text"  name="lastName"  value={inputs.lastName || ""} onChange={handleChange}/>
          </div>
          <div className="form-group"> 
            <label >Email: </label>
            <input type="text"  name="email" value={inputs.email || ""} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label >Phone: </label>
            <input type="text" name="Phone" value={inputs.Phone || ""} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label >Role: </label>
            <select   name="role" value={inputs.role || ""} onChange={handleChange} >
              <option value="Admin">Admin</option>
              <option value="Configurator">Configurator</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserUpdate;
