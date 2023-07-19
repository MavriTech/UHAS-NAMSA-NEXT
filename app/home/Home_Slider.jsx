"use client";
import React, { useEffect, useState } from "react";
import "@styles/home-slider.css";

export default function Home_Slider() {
  // This block of code automatically changes the slider images
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* <!-- Image Slider Section Begins --> */}
      <div className="slider-wrapper">
        <div className="slider-shadow"></div>
        <div className="slider">
          {/* <!-- slider radio buttons begin --> */}
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              key={index}
              type="radio"
              name="radio-btn"
              id={`radio${index + 1}`}
              checked={currentSlide === index}
              onChange={() => setCurrentSlide(index)}
            />
          ))}
          {/* <!-- slider radio buttons ends -->

          <!-- slider images begin --> */}
          <div class="slide first">
            <img
              src="https://th.bing.com/th/id/R.c426351b975ba1036637bc8f186640e3?rik=8hZajDUGBy2SBg&riu=http%3a%2f%2fwww.southshorehospital.com%2fwp-content%2fuploads%2f2014%2f07%2fDepositphotos_34179285_original.jpg&ehk=3Rs72Bmqx6PfwjKsIayjgCY8bkiT1%2bTdaHqEiXmB4Gk%3d&risl=&pid=ImgRaw&r=0"
              alt="A group of doctors"
            />
          </div>
          <div class="slide">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://th.bing.com/th/id/R.0c726b47fbad9a20a982db74749c5a6e?rik=3RJEQyFPr%2bRmow&pid=ImgRaw&r=0"
              alt="A group of nurses"
            />
          </div>
          <div class="slide">
            <img
              src="https://th.bing.com/th/id/R.c426351b975ba1036637bc8f186640e3?rik=8hZajDUGBy2SBg&riu=http%3a%2f%2fwww.southshorehospital.com%2fwp-content%2fuploads%2f2014%2f07%2fDepositphotos_34179285_original.jpg&ehk=3Rs72Bmqx6PfwjKsIayjgCY8bkiT1%2bTdaHqEiXmB4Gk%3d&risl=&pid=ImgRaw&r=0"
              alt="A group of doctors"
            />
          </div>

          {/* <!-- slider images end -->

          <!-- automatic navigation begins --> */}
          <div className="auto-nav">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={`auto-btn${index + 1} ${
                  currentSlide === index ? "active" : ""
                }`}
              ></div>
            ))}
          </div>
          {/* <!-- automatic navigation ends -->

          <!-- manual navigation begins --> */}
          <div className="manual-nav">
            {Array.from({ length: 4 }).map((_, index) => (
              <label
                key={index}
                htmlFor={`radio${index + 1}`}
                className="man-btn"
              ></label>
            ))}
          </div>
          {/* <!-- manual navigation begins --> */}
        </div>
      </div>
      {/* <!-- Image Slider Section Ends --> */}
    </>
  );
}
