import AdminTab from "@components/adminTab";
import React from "react";

const UploadAnnouncement = () => {
  return (
    <>
      <AdminTab AnStyleAct="active" header="ADD AN ANNOUNCEMENT" />
      <div className="input-containers">
        <label className="title" htmlFor="announcement-title">
          Add subject
        </label>
        <input className="announcement-title-input" type="text" />
        <label className="title" htmlFor="announcement-body">
          Add message
        </label>
        <textarea
          name="announcement-body"
          className="announcement-body"
          cols="30"
          rows="20"
          placeholder="Type here your announcement body..."
        ></textarea>
      </div>

      <button className="post-message">POST MESSAGE</button>
    </>
  );
};

export default UploadAnnouncement;
