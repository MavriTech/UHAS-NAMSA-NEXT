import React from "react";
import '@styles/announce-events.css'

export default function AnnouncementEvent() {
  return (
    <>
      <div className="notice">
        <div className="events">
          <div className="event-title">
            <h2>Upcoming Events</h2>
            <hr />
          </div>
          <div className="event-container">
            <div className="event-content">
              <div className="event-date-box">
                <div className="event-date">
                  <span>
                    14 <br />
                    JUN
                  </span>
                </div>
              </div>
              <div className="event-info">
                <h4>#StartedinOxford Demo Night 2023</h4>
                <p>The Weston Library</p>
                <span>14 JUN 2023</span>
              </div>
            </div>
          </div>
        </div>

        <div className="announcement">
          <div className="announce-header">
            <h2>Announcement</h2>
            <hr />
          </div>
          <div className="announcement-container">
            <div className="announcement-content">
              <a href="#">
                <h3>LECIAD 2023/2024 Admissions</h3>
              </a>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
