"use client";
import AdminTab from "@components/adminTab";
import React, { useState } from "react";

const EventsPage = () => {
  const [eventData, setEventData] = useState({
    title: "",
    venue: "",
    description: "",
    email: "", // Initialize email as an empty string
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://uhas-backend.onrender.com/api/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to post event");
      }
      setEventData({
        title: "",
        venue: "",
        description: "",
        email: eventData.email, // Use eventData.email here to preserve the email value
      });
      console.log("Event posted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AdminTab EnStyleAct="active" header="ADD EVENT" />
      <div className="input-containers">
        <label className="title" htmlFor="announcement-title">
          Event title
        </label>
        <input
          className="announcement-title-input"
          type="text"
          name="title"
          placeholder="Enter the title of event"
          value={eventData.title}
          onChange={handleChange}
        />
        <label className="title" htmlFor="announcement-title">
          Venue
        </label>
        <textarea
          className="announcement-title-input"
          type="text"
          name="venue"
          placeholder="Enter event venue"
          value={eventData.venue}
          onChange={handleChange}
        />
        <label className="title" htmlFor="announcement-body">
          Description
        </label>
        <textarea
          name="description"
          className="announcement-body"
          cols="30"
          rows="2"
          placeholder="Eg; There will be an upcoming event on..."
          value={eventData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <button className="post-pic" onClick={handleSubmit}>
        POST EVENT
      </button>
    </>
  );
};

export default EventsPage;
