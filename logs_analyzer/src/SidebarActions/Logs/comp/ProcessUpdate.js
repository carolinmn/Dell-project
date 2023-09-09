import React, { useState } from "react";
import "../../../styles/form.css";

const ProcessUpdate = ({closeEditProcess,defaultValue,id}) => {

  const [inputs, setInputs] = useState(defaultValue||{});

  const validateForm=()=>{
    if(inputs.rules&&inputs.rank && inputs.message &&inputs.date)
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

    const response = await fetch("http://localhost:5000/logs/process/update"+id, {
      method: "PUT",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });

    closeEditProcess()
    
    }


  return (
    <div className="mainForm-container" onClick={(e)=>{
      if(e.target.className==="mainForm-container")
      closeEditProcess();
    }}>
      <div className="mainForm">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Rule: </label>
            <input type="text"  name="rules"   value={inputs.rules || ""} onChange={handleChange} disabled />
          </div>
          <div className="form-group">
            <label >Rank: </label>
            <input type="text" name="rank"  value={inputs.rank || ""} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label >Message: </label>
            <input type="text"  name="message"  value={inputs.message || ""} onChange={handleChange}/>
          </div>
          <div className="form-group"> 
            <label >Date: </label>
            <input type="text"  name="date" value={inputs.date || ""} onChange={handleChange}/>
          </div>
          
          <button type="submit" className="btn" onClick={handleSubmit}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default ProcessUpdate;
