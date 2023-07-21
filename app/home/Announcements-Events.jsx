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

async function getEvent(){
  const response = await fetch("https://uhas-backend.onrender.com/api/events", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }

  const data = await response.json();
  return data.data;
}

export default function AnnouncementEvent() {
  const [dataSet, setDataSet] = useState([]);
  const [allEvents, setEventSet] = useState([]);

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
  useEffect(()=> {
    async function fetchEvent(){
      try{
        const eventData = await getEvent();
        setEventSet(eventData);
      } catch(error){
        console.error(error);
      }
    }
    fetchEvent();
  })

  // Ensure dataSet is an array before trying to map over it
  if (!Array.isArray(dataSet)) {
    return <div>Loading...</div>;
  }
  if (!Array.isArray(allEvents)){
    return <div>Loading...</div>
  }

  const sortedEvent = allEvents.slice().sort((a, b) => {
    const eventA = new Date(a.createdAt).getTime();
    const eventB = new Date(b.createdAt).getTime();
    return eventB - eventA;
  })
  // Sort the dataSet in reverse order based on createdAt (most recent first)
  const sortedData = dataSet.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });

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
            {sortedEvent.map((eventData) => (
              <div className="event-content" key={eventData.createdAt}>
                <Link href={`/${eventData.createdAt}`}>
                  <div className="event-date-box">
                    <div className="event-date">
                      <span>
                        {new Date(eventData.createdAt).toDateString().slice(3, 10)}<br />
                      </span>
                    </div>
                  </div>
                  <div className="event-info">
                    <h4>#{eventData.title.slice(0, 20) + "..."}</h4>
                    <p>The Weston Library</p>
                    <span>{new Date(eventData.createdAt).toDateString()}</span>
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
            {sortedData.map((data) => (
              <div className="announcement-content" key={data.createdAt}>
                <Link href={{
                    pathname: `/$`,
                    query: { title: data.title, description: data.description } // Add additional query parameters here
                  }}>
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