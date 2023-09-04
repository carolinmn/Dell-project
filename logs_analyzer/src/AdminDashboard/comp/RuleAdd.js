import React, { useState } from "react";
import "./form.css";

const RuleAdd = ({closeAddRule}) => {


  const [inputs, setInputs] = useState({});


  const validateForm=()=>{
    if(inputs.rule_name&&inputs.keywords)
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

    closeAddRule()
    
    }

  return (
    <div className="mainForm-container" onClick={(e)=>{
      if(e.target.className==="mainForm-container")
      closeAddRule();
    }}>
      <div className="mainForm">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Rule Name: </label>
            <input type="text"  name="rule_name"   value={inputs.rule_name || ""} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label >Key Words: </label>
            <input type="text" name="keywords"  value={inputs.keywords || ""} onChange={handleChange} />
          </div>
          

          <button type="submit" className="btn" onClick={handleSubmit}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default RuleAdd;
