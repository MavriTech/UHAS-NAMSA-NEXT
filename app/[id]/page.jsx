"use client";
import React, { useEffect, useState } from "react";
import "@styles/announcements.css";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://uhas-backend.onrender.com/api/announcements", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data; // Extract the array of announcements from the "data" property
}

async function getAnnouncementById(id) {
  const response = await fetch(
    `https://uhas-backend.onrender.com/api/announcements/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data; // Return the specific announcement
}

const Announcement = ({ params }) => {
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [specificAnnouncement, setSpecificAnnouncement] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const allData = await getData();
        setAllAnnouncements(allData);

        if (params.id) {
          const specificData = await getAnnouncementById(params.id);
          setSpecificAnnouncement(specificData);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [params.id]);

  // Render "Loading..." or a message while fetching the data
  if (!allAnnouncements.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display the specific announcement if available */}
      {specificAnnouncement && (
        <div>
          <div className="announcement-logo">
            <img src="https://th.bing.com/th/id/R.117e9bbc3c8111d0abeb25087e372a31?rik=XEYJuavuEA8Hrg&pid=ImgRaw&r=0" />
          </div>
          <div className="headline-announce">
            <div className="headline-container">
              <div className="heading">
                <h2>{specificAnnouncement.title}</h2>
                <div className="headline">
                  <p>{specificAnnouncement.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Display all announcements */}
      <div className="announcements">
        <div className="announcement-header">
          <h2>Announcements</h2>
          <div className="announcement-container">
            {allAnnouncements.map((announcement) => (
              <div className="announcement-content" key={announcement.createdAt}>
                <Link href={`/${announcement.createdAt}`}>
                  {/* Wrap the content inside the <Link> without using <a> tag */}
                  <div>
                    <h3>{announcement.title.slice(0, 40) + "..."}</h3>
                    <h3>{announcement.description.slice(0, 50) + "..."}</h3>
                  </div>
                </Link>
                <hr />
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Announcement;
