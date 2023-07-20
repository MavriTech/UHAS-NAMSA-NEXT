import React from "react";
import Link from "next/link";

import "@styles/media/header.css";

const MediaHeader = (props) => {
  const { EActiveStyle, PActiveStyle } = props;
  return (
    <div className="media-header-container">
      <div className="media-header">
        <span className={EActiveStyle}>
          <Link href="/media/akwaaba_images">Entertainment</Link>
        </span>
        <span className={PActiveStyle}>
          <Link href="/media/picnic_images">Picnic </Link>
        </span>
        <span className={PActiveStyle}>
          <Link href="">Picnic </Link>
        </span>
      </div>
    </div>
  );
};
export default MediaHeader;
