import React, { useState } from "react";
import "../../styles/header.css";

const AdminHeader = (props) => {
  const [data, setData] = useState({
    _id: "1",
    userName: "Axwara",
    firstName: "Ahmad",
    lastName: "Agbaria",
    imageURL: "https://th-thumbnailer.cdn-si-edu.com/5V-xOO-B6H14VTVruDbqnMvmmE0=/fit-in/1072x0/filters:focal(342x433:343x434)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/e4/af/e4afdbe6-59c0-4a6b-8112-8b30e274d9a0/2009-49519-h-floresiensis-jgurche_web.jpg",
  });

  

  const [compUploadPic, setCompUploadPic] = useState(false);
  const [newImageURL, setNewImageURL] = useState("");

  const toggleUploadPic = () => {
    // Use functional update to toggle the state
    setCompUploadPic(prevState => !prevState);
  };

  const handleImageUpload = () => {
    if (newImageURL) {
      setData((prevData) => ({ ...prevData, imageURL: newImageURL }));
      setCompUploadPic(false);
    }
  };

  return (
    <header>
      <div className="header">
        <div className="leftheader">
          <h3>{props.role} Dashboard</h3>
        </div>
        <div className="rightheader">
          <i className="fa-regular fa-bell"></i>
          <img
            src={data.imageURL}
            alt="img"
            onClick={toggleUploadPic}
          />
          <span>
            {data.firstName} {data.lastName}
          </span>
        </div>
      </div>
      {compUploadPic && (
        <div className="Pic-container">
          <input
            type="text"
            placeholder="Enter Image URL"
            value={newImageURL}
            onChange={(event) => setNewImageURL(event.target.value)}
          />
          <br/>
          <div className="buttons">
            <button onClick={handleImageUpload}>OK</button>
            <button onClick={() => setCompUploadPic(false)}>Cancel</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;
