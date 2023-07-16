import React from "react";
import "@styles/mission&vision.css";

export default function MissionVision() {
  return (
    <>
      <div class="aim-section" id="aim-vision-section">
        <div class="aim-title">
          <h2>OUR MISSION AND VISION</h2>
        </div>
        <div class="aim">
          <div class="mission-box">
            <hr />
            <div class="mission-content">
              <div class="mission-header">
                <img src="/icons/mission-logo.png" />
                <h3>Mission</h3>
              </div>
              <div class="mission">
                <p>Our mission is to keep you safe at all cost</p>
              </div>
            </div>
            <div class="empty-mission-style"></div>
            <div class="left-mission-style"></div>
            <div class="left-circle"></div>
            <div class="right-circle"></div>
          </div>

          <div class="vision-box">
            <hr />
            <div class="vision-content">
              <div class="vision-header">
                <img src="/icons/vision-logo.png" />
                <h3>Vision</h3>
              </div>
              <div class="vision">
                <p>Our Vision is to keep you safe at all cost</p>
              </div>
            </div>

            <div class="empty-vision-style"></div>
            <div class="right-vision-style"></div>
            <div class="left-circle"></div>
            <div class="right-circle"></div>
          </div>
        </div>
      </div>
    </>
  );
}
