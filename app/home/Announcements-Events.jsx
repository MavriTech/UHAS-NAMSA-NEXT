import React from "react";
import "@styles/announce-events.css";
import Link from "next/link";

async function getDate() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function AnnouncementEvent() {
  const dataSet = await getDate();

  return (
    <>
      <div className="notice">
        <div className="events">
          <div className="event-title">
            <h2>Upcoming Events</h2>
            <hr />
          </div>
          <div className="event-container">
            {dataSet.map((data) => (
              <div className="event-content" key={data.id}>
                <Link href={`/${data.id}`}>
                  <div className="event-date-box">
                    <div className="event-date">
                      <span>
                        14 <br />
                        JUN
                      </span>
                    </div>
                  </div>
                  <div className="event-info">
                    <h4>#{data.title.slice(0, 20) + "..."}</h4>
                    <p>The Weston Library</p>
                    <span>14 JUN 2023</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="announcement">
          <div className="announce-header">
            <h2>Announcement</h2>
            <hr />
          </div>
          <div className="announcement-container">
            {dataSet.map((data) => (
              <div className="announcement-content" key={data.id}>
                <a href={`/${data.id}`}>
                  <h3>{data.title.slice (0, 40) + "..."}</h3>
                  <h3>{data.body.slice(0, 50) + "..."}</h3>
                </a>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
