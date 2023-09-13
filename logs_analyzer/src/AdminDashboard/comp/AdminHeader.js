import React, { useState } from "react";
import "../../styles/header.css";

const AdminHeader = (props) => {

  // fetch the data from the backend
  const [data, setData] = useState({
    _id: "1",
    userName: "Axwara",
    firstName: "Ahmad",
    lastName: "Agbaria",
    imageURL:
      "https://th-thumbnailer.cdn-si-edu.com/5V-xOO-B6H14VTVruDbqnMvmmE0=/fit-in/1072x0/filters:focal(342x433:343x434)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/e4/af/e4afdbe6-59c0-4a6b-8112-8b30e274d9a0/2009-49519-h-floresiensis-jgurche_web.jpg",
  });

  const [notifications, setNotifications] = useState([
    {
      _id: "1",
      from: "x",
      message:
        "message 1 dsdsdsdsd message 1 dsdsdsdsd message 1sdsds dsdsdsdsd",
    },
    {
      _id: "2",
      from: "y",
      message: "message 2",
    },
    {
      _id: "3",
      from: "z",
      message: "message 3",
    },
    {
      _id: "4",
      from: "x",
      message: "message 1 dsdsdsdsd",
    },
    {
      _id: "5",
      from: "y",
      message: "message 2",
    },
  ]);

  const [compUploadPic, setCompUploadPic] = useState(false);
  const [newImageURL, setNewImageURL] = useState("");
  const [compNotifications, setCompNotifications] = useState(false);

  const toggleUploadPic = () => {
    if (compNotifications) setCompNotifications(false);
    setCompUploadPic((prevState) => !prevState);
  };

  const toggleNotifications = () => {
    if (compUploadPic) setCompUploadPic(false);
    setCompNotifications((prevState) => !prevState);
  };

  const handleImageUpload = () => {
    if (newImageURL) {
      setData((prevData) => ({ ...prevData, imageURL: newImageURL }));
      setCompUploadPic(false);
    }
  };

  const handleDeleteNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif._id !== id)
    );
    // we need to fetch to backend
  };

  return (
    <header>
      <div className="header">
        <div className="leftheader">
          <h3>{props.role} Dashboard</h3>
        </div>
        <div className="rightheader">
          <i className="fa-regular fa-bell" onClick={toggleNotifications}></i>
          <img src={data.imageURL} alt="img" onClick={toggleUploadPic} />
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
          <br />
          <div className="buttons">
            <button onClick={handleImageUpload}>OK</button>
            <button onClick={() => setCompUploadPic(false)}>Cancel</button>
          </div>
        </div>
      )}

      {compNotifications && (
        <div className="notf-container">
          <div className="notf-header">
            <h4>Notifications</h4>
            <i className="fa-solid fa-times" onClick={toggleNotifications}></i>
          </div>
          <div className="notf-list">
            {notifications.length > 0 ? (
              <div className="scrollable-notifications">
                {notifications.map((notif) => (
                  <div className="notification" key={notif._id}>
                    <div className="notification-content">
                      <div>
                        <strong>From: {notif.from}</strong>
                      </div>
                      <div>{notif.message}</div>
                    </div>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteNotification(notif._id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>No notifications</p>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;
