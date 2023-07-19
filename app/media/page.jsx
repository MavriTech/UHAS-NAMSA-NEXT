import React from "react";
import "@styles/media/header.css";

const MediaHeader = () => {
  return (
    <div className="media-header-container">
      <div className="media-header">
        <ul className="media-header-links">
          <li className="header-link"> <a href="./media/akwaaba_images">Entertainment</a> </li>
          <li className="header-link"><a href="./media/picnic_images">Picnics</a></li>
          <li className="header-link"><a href="#">Picnics</a></li>
        </ul>
      </div>
    </div>
  );
};
export default MediaHeader;
