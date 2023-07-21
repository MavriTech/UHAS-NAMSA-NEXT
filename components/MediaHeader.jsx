import React from "react";
import Link from "next/link";

import "@styles/media/header.css";

const MediaHeader = (props) => {
<<<<<<< HEAD
  const { EActiveStyle, PActiveStyle, aActiveStyle } = props;
=======
  const { EActiveStyle, PActiveStyle, aActiveStyle} = props;
>>>>>>> dffa54a5def441c8a8c9d555b52822c77edf77ef
  return (
    <div className="media-header-container">
      <div className="media-header">
        <span className={EActiveStyle}>
          <Link href="/media">Entertainment</Link>
        </span>
        <span className={PActiveStyle}>
          <Link href="/media/picnic_images">Picnic </Link>
        </span>
        <span className={aActiveStyle}>
<<<<<<< HEAD
          <Link href="">Ant </Link>
=======
          <Link href="">Picnic </Link>
>>>>>>> dffa54a5def441c8a8c9d555b52822c77edf77ef
        </span>
      </div>
    </div>
  );
};
export default MediaHeader;
