"use client";
import AdminTab from "@components/adminTab";
import React, { useState } from "react";

const UploadAnnouncement = () => {
  const [announcementData, setAnnouncementData] = useState({
    title: "",
    description: "",
    email: "admin1@gmail.com", // Assuming you want to use a fixed email for all announcements
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnnouncementData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://uhas-backend.onrender.com/api/announcements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(announcementData),
      });

      if (!response.ok) {
        throw new Error("Failed to post announcement");
      }

      // Clear the input fields after successful submission
      setAnnouncementData({
        title: "",
        description: "",
        email: "admin1@gmail.com",
      });

      // Show a success message or perform any other action you want
      console.log("Announcement posted successfully!");
    } catch (error) {
      console.error(error);
      // Show an error message or perform any other action you want
    }
  };

  return (
    <>
      <AdminTab AnStyleAct="active" header="ADD AN ANNOUNCEMENT" />
      <div className="input-containers">
        <label className="title" htmlFor="announcement-title">
          Add subject
        </label>
        <input
          className="announcement-title-input"
          type="text"
          name="title"
          value={announcementData.title}
          onChange={handleChange}
        />
        <label className="title" htmlFor="announcement-body">
          Add message
        </label>
        <textarea
          name="description"
          className="announcement-body"
          cols="30"
          rows="20"
          placeholder="Type here your announcement body..."
          value={announcementData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <button className="post-message" onClick={handleSubmit}>
        POST MESSAGE
      </button>
    </>
  );
};

export default UploadAnnouncement;
