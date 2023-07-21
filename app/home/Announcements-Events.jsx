"use client";
import React, { useEffect, useState } from "react";
import "@styles/announce-events.css";
import Link from "next/link";

async function getDate() {
  const res = await fetch("https://uhas-backend.onrender.com/api/announcements", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data; // Extract the array of announcements from the "data" property
}

export default function AnnouncementEvent() {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDate();
        setDataSet(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // Ensure dataSet is an array before trying to map over it
  if (!Array.isArray(dataSet)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="notice">
        {/* Upcoming Events Section */}
        <div className="events">
          <div className="event-title">
            <h2>Upcoming Events</h2>
            <hr />
          </div>
          <div className="event-container">
            {dataSet.map((data) => (
              <div className="event-content" key={data.createdAt}>
                <Link href={`/${data.createdAt}`}>
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
                    <span>{new Date(data.createdAt).toDateString()}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Announcement Section */}
        <div className="announcement">
          <div className="announce-header">
            <h2>Announcement</h2>
            <hr />
          </div>
          <div className="announcement-container">
            {dataSet.map((data) => (
              <div className="announcement-content" key={data.createdAt}>
                <Link href={`/${data.createdAt}`}>
                  <h3>{data.title.slice(0, 40) + "..."}</h3>
                  <p>{data.description.slice(0, 50) + "..."}</p>
                </Link>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
