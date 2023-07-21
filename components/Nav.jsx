"use client";

import React, { useState, useEffect } from "react";

const Nav = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const navHandler = () => {
    setIsVisible(!isVisible);
    console.log("clicked");
  };

  useEffect(() => {
    const handleResize = () => {
      // Check the current screen size condition and update the state accordingly
      const screenWidth = window.innerWidth;
      setIsLargeScreen(screenWidth >= 576); // Set the condition based on your requirement
    };

    // Add the event listener for the resize event
    window.addEventListener("resize", handleResize);

    // Call the handleResize function initially to set the initial state
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <div className="logo-image">
            <img src="\images\Logo.jpeg" alt="" />
          </div>
          <div className="logo-text">
            <h2>
              NURSING AND MIDWIFERY <br /> STUDENT ASSOCIATION
            </h2>
          </div>
        </div>
        <div className="search">
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>
          <div className="search-box">
            <input type="search" name="Search" placeholder="Search" />
          </div>
        </div>
        <div className="menu" onClick={navHandler}>
          <img src="/icons/menu.png" />
          <img
            src="/L-images/close.png"
            alt=""
            width="20rem"
            className="close"
            id="closeIcon"
            // style="display: none"
          />
        </div>
      </div>
      {isLargeScreen ? (
        <div className="navbar">
          <div className="navbar-content">
            <div className="nav">

              <ul className="navlinks">
                <li className="navlink-content">
                  <a href="/" id="home">
                    HOME
                  </a>
                </li>
                <li className="navlink-content">
                  <a href="#aim-vision-section">ABOUT US</a>
                </li>


                <li className="navlink-content droplink">
                  <a href="#" id="events">
                    EVENTS <i className="fa-solid fa-caret-down drop-icon"></i>
                  </a>
                  <div className="dropdown">
                    <ul className="dropdown-content">
                      <li className="dropdown-links">
                        <a href="/events/sports">Sports</a>
                      </li>
                      <li className="dropdown-links">

                        <a href="#">SRC WEEK</a>
                      </li>
                      <li className="dropdown-links">

                        <a href="#">Voting</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="navlink-content droplink">
                  <a href="/resources" id="resources">
                    RESOURCES
                    <i className="fa-solid fa-caret-down drop-icon"></i>
                  </a>
                  <div className="dropdown">
                    <ul className="dropdown-content" k>
                      <li className="dropdown-links">
                        <a href="#">Past Questions</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="/resources/courses">Lecture Slides</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="#">Academic Timetable</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="navlink-content droplink">
                  <a href="#" id="leadership">
                    LEADERSHIP
                    <i className="fa-solid fa-caret-down drop-icon"></i>
                  </a>
                  <div className="dropdown">
                    <ul className="dropdown-content">
                      <li className="dropdown-links">
                        <a href="/leadership">Executives</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="#">Committee Members</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="navlink-content droplink">
                  <a href="#" id="updates">
                    ADMISSION
                    <i className="fa-solid fa-caret-down drop-icon"></i>
                  </a>
                  <div className="dropdown">
                    <ul className="dropdown-content">
                      <li className="dropdown-links">
                        <a
                          href="https://www.uhas.edu.gh/en/admissions/how-to-apply.html"
                          target="_blank"
                        >
                          How to Apply
                        </a>
                      </li>
                      <li className="dropdown-links">
                        <a
                          href="https://www.uhas.edu.gh/en/admissions/entry-requirements.html"
                          target="_blank"
                        >
                          Entry Requirements
                        </a>
                      </li>
                      <li className="dropdown-links">
                        <a
                          href="http://www.uhasonline.com/admissions/"
                          target="_blank"
                        >
                          Apply Now
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="navlink-content droplink">
                  <a href="#" id="media">
                    MEDIA <i className="fa-solid fa-caret-down drop-icon"></i>
                  </a>
                  <div className="dropdown">
                    <ul className="dropdown-content">
                      <li className="dropdown-links">
                        <a href="/[id]">Announcements</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="#">Upcoming Events</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="#">Entertainment</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="/media/akwaaba_images">Gallery</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        isVisible && (
          <div className="navbar">
          <div className="navbar-content">
            <div className="nav">
              <ul className="navlinks">
                <li className="navlink-content">
                  <a href="/" id="home">
                    HOME
                  </a>
                </li>
                <li className="navlink-content">
                  <a href="#aim-vision-section">ABOUT US</a>
                </li>

                <li className="navlink-content droplink">
                  <a href="#" id="events">
                    EVENTS <i className="fa-solid fa-caret-down drop-icon"></i>
                  </a>
                  <div className="dropdown">
                    <ul className="dropdown-content">
                      <li className="dropdown-links">
                        <a href="/events/sports">Sports</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="#">SRC WEEK</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="#">Voting</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="navlink-content droplink">
                  <a href="/resources" id="resources">
                    RESOURCES
                    <i className="fa-solid fa-caret-down drop-icon"></i>
                  </a>
                  <div className="dropdown">
                    <ul className="dropdown-content" k>
                      <li className="dropdown-links">
                        <a href="#">Past Questions</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="/resources/courses">Lecture Slides</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="#">Academic Timetable</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="navlink-content droplink">
                  <a href="#" id="leadership">
                    LEADERSHIP
                    <i className="fa-solid fa-caret-down drop-icon"></i>
                  </a>
                  <div className="dropdown">
                    <ul className="dropdown-content">
                      <li className="dropdown-links">
                        <a href="/leadership">Executives</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="#">Committee Members</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="navlink-content droplink">
                  <a href="#" id="updates">
                    ADMISSION
                    <i className="fa-solid fa-caret-down drop-icon"></i>
                  </a>
                  <div className="dropdown">
                    <ul className="dropdown-content">
                      <li className="dropdown-links">
                        <a
                          href="https://www.uhas.edu.gh/en/admissions/how-to-apply.html"
                          target="_blank"
                        >
                          How to Apply
                        </a>
                      </li>
                      <li className="dropdown-links">
                        <a
                          href="https://www.uhas.edu.gh/en/admissions/entry-requirements.html"
                          target="_blank"
                        >
                          Entry Requirements
                        </a>
                      </li>
                      <li className="dropdown-links">
                        <a
                          href="http://www.uhasonline.com/admissions/"
                          target="_blank"
                        >
                          Apply Now
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="navlink-content droplink">
                  <a href="#" id="media">
                    MEDIA <i className="fa-solid fa-caret-down drop-icon"></i>
                  </a>
                  <div className="dropdown">
                    <ul className="dropdown-content">
                      <li className="dropdown-links">
                        <a href="/[id]">Announcements</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="#">Upcoming Events</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="#">Entertainment</a>
                      </li>
                      <li className="dropdown-links">
                        <a href="/media/akwaaba_images">Gallery</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        )
      )}
    </div>
  );
};

export default Nav;