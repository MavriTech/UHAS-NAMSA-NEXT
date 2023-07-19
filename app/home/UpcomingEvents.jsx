"use client";
import React, { useEffect } from "react";

export default function UpcomingEvents() {
  useEffect(() => {
    // Adding more events to the upcoming events
    const Events = [
      {
        eventDate: " 24 MAY",
        eventHeader: "#StardedinOxford Demo Night 2023",
        eventLocation: "The Western Library",
        spandate: "22 JUN 2023",
      },
      {
        eventDate: " 24 MAY",
        eventHeader: "#StardedinOxford Demo Night 2023",
        eventLocation: "The Western Library",
        spandate: "22 JUN 2023",
      },
      {
        eventDate: " 24 MAY",
        eventHeader: "#StardedinOxford Demo Night 2023",
        eventLocation: "The Western Library",
        spandate: "22 JUN 2023",
      },
      {
        eventDate: " 24 MAY",
        eventHeader: "#StardedinOxford Demo Night 2023",
        eventLocation: "The Western Library",
        spandate: "22 JUN 2023",
      },
      {
        eventDate: " 24 MAY",
        eventHeader: "#StardedinOxford Demo Night 2023",
        eventLocation: "The Western Library",
        spandate: "22 JUN 2023",
      },
    ];

    const eventWrapper = document.querySelector(".events");
    const eventContainer = document.querySelector(".event-container");
    Events.forEach((event) => {
      const eventCard = document.createElement("div");
      eventCard.className = "event-content";
      const eventDateBox = document.createElement("div");
      eventDateBox.className = "event-date-box";

      const date = document.createElement("div");
      date.className = "event-date";
      const eventDateSpan = document.createElement("span");
      eventDateSpan.textContent = event.eventDate;

      date.appendChild(eventDateSpan);
      eventDateBox.appendChild(date);
      eventCard.appendChild(eventDateBox);
      eventContainer.appendChild(eventCard);
      eventWrapper.appendChild(eventContainer);

      const eventInfoBox = document.createElement("div");
      eventInfoBox.className = "event-info";
      const eventInfoTitle = document.createElement("h4");
      eventInfoTitle.textContent = event.eventHeader;
      eventInfoBox.appendChild(eventInfoTitle);

      const eventInfo = document.createElement("p");
      eventInfo.textContent = event.eventLocation;
      eventInfoBox.appendChild(eventInfo);

      const eventInfoSpan = document.createElement("span");
      eventInfoSpan.textContent = event.spandate;
      eventInfoBox.appendChild(eventInfoSpan);

      eventCard.appendChild(eventInfoBox);
    });

    //
  });
  return (
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
  );
}
