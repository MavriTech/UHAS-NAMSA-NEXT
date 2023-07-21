"use client";

import React, { useState } from "react";

const SlideUploadCont = ({ date, title, session, sem, vis }) => {
  const [delVisible, setDelVisible] = useState(vis);
  return (
    <div className="slide-upload-cont">
      <div className="slide-holder">
        <div className="date-holder">
          <span>{date}</span>
        </div>
        <div className="title-holder">
          <span className="course-title">#{title}</span>
          <span className="session">{session}</span>
          <span className="sem">{sem}</span>
        </div>
      </div>
      {delVisible && <div className="delete">DEL</div>}
    </div>
  );
};

export default SlideUploadCont;
