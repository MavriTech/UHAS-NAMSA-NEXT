import React from "react";
import UpcomingEvents from "./UpcomingEvents";
import Announcements from "./Announcements";
import "@styles/announce-events.css";

const Notice = () => {
  return (
    <div className="notice">
      <UpcomingEvents />
      <Announcements />
    </div>
  );
};
export default Notice;
