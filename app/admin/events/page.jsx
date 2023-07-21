import React from "react";
import AdminTab from "@components/adminTab";

const EventsPage = () => {
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
          //   value={announcementData.title}
          //   onChange={handleChange}
          placeholder="Enter the title of event"
        />
        <label className="title" htmlFor="announcement-title">
          Venue
        </label>
        <input
          className="announcement-title-input"
          type="text"
          name="title"
          //   value={announcementData.title}
          //   onChange={handleChange}
          placeholder="Enter event venue"
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
          //   value={announcementData.description}
          //   onChange={handleChange}
        ></textarea>
        <label className="title" htmlFor="announcement-title">
          Mail
        </label>
        <input
          className="announcement-title-input"
          type="email"
          name="title"
          //   value={announcementData.title}
          //   onChange={handleChange}
          placeholder="Enter your mail for post approval"
        />
      </div>

      <button className="post-pic">POST EVENT</button>
    </>
  );
};

export default EventsPage;
