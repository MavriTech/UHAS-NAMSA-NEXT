"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@styles/announcements.css";
const queryParams = new URLSearchParams(window.location.search);
const title = queryParams.get("title")
const description = queryParams.get("description")
console.log(title)

const Announcement = () => {
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("https://uhas-backend.onrender.com/api/announcements", {
          cache: "no-store",
        });

        if (!data.ok) {
          throw new Error("Failed to fetch data");
        }

        const responseData = await data.json();
        setAllAnnouncements(responseData.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  

  return (
    <>
      <div className="content-image">
      <img src="https://th.bing.com/th/id/R.117e9bbc3c8111d0abeb25087e372a31?rik=XEYJuavuEA8Hrg&pid=ImgRaw&r=0" alt="Logo"
      />
      </div>
      <div className="announcement-details">
        <div className="announcement-content">
          <div className="announcement-header">
            {/* Edit and Delete icons */}
          </div>
          <div className="announcement-container">
            {/* Access title and description here */}
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>

        <div className="announcements">
          <div className="announcements-header">
            <h2>All announcements here</h2>
            <hr/>
          </div>
          <div className="announcements-container">
            {allAnnouncements.map((announcement) => (
              <div className="announcements-content">
                <Link href={`/${announcement.createdAt}`} key={announcement.createdAt}>
                  {/* Rest of your JSX */}
                  <h3>{announcement.title}</h3>
                      <p>{announcement.description}</p>
                </Link>
                <hr/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;