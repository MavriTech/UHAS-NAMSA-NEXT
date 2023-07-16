import React from "react";
import "@styles/home-slider.css";

export default function Home_Slider() {
  return (
    <>
      {/* <!-- Image Slider Section Begins --> */}
      <div className="slider-wrapper">
        <div className="slider-shadow"></div>
        <div className="slider">
          {/* <!-- slider radio buttons begin --> */}
          <input type="radio" name="radio-btn" id="radio1" checked />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          {/* <!-- slider radio buttons ends -->

          <!-- slider images begin --> */}
          <div className="slide first">
            <img src="/images/caro1.jpg" alt="A group of doctors" />
          </div>
          <div className="slide">
            <img src="/images/caro2.jpg" alt="" />
          </div>
          <div className="slide">
            <img src="/images/pic1.jpeg" alt="A group of nurses" />
          </div>
          <div className="slide">
            <img src="/images/pic2.jpeg" alt="A group of doctors" />
          </div>

          {/* <!-- slider images end -->

          <!-- automatic navigation begins --> */}
          <div className="auto-nav">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
          {/* <!-- automatic navigation ends -->

          <!-- manual navigation begins --> */}
          <div className="manual-nav">
            <label for="radio1" className="man-btn"></label>
            <label for="radio2" className="man-btn"></label>
            <label for="radio3" className="man-btn"></label>
            <label for="radio4" className="man-btn"></label>
          </div>
          {/* <!-- manual navigation begins --> */}
        </div>
      </div>
      {/* <!-- Image Slider Section Ends --> */}
    </>
  );
}
