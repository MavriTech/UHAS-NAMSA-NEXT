"use client";
import React, { useEffect } from "react";

export default function Announcements() {
  useEffect(() => {
    // Appending More annoucement into the announcement section
    const Announcements = [
      {
        announcementContent: "LECIAD 2023/2024 Admissions",
      },
      {
        announcementContent: "LECIAD 2023/2024 Admissions",
      },
      {
        announcementContent: "LECIAD 2023/2024 Admissions",
      },
      {
        announcementContent: "LECIAD 2023/2024 Admissions",
      },
      {
        announcementContent: "LECIAD 2023/2024 Admissions",
      },
      {
        announcementContent: "LECIAD 2023/2024 Admissions",
      },
      {
        announcementContent: "LECIAD 2023/2024 Admissions",
      },
      {
        announcementContent: "LECIAD 2023/2024 Admissions",
      },
    ];

    const announceWrapper = document.querySelector(".announcement");
    const announceContainer = document.querySelector(".announcement-container");
    Announcements.forEach((announcement) => {
      const announceContent = document.createElement("div");
      announceContent.className = "announcement-content";
      const anchor = document.createElement("a");
      anchor.href = "#";

      const announceTitle = document.createElement("h3");
      announceTitle.textContent = announcement.announcementContent;

      const line = document.createElement("hr");
      anchor.appendChild(announceTitle);
      announceContent.appendChild(anchor);
      announceContent.appendChild(line);

      announceContainer.appendChild(announceContent);
      announceWrapper.appendChild(announceContainer);
    });
  });
  return (
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
  );
}
