import React from "react";
import "@styles/admin.css";
import Link from "next/link";

const AdminTab = ({
  SlideStyleAct,
  AnStyleAct,
  EnStyleAct,
  ImgStyleAct,
  header,
}) => {
  return (
    <>
      <div className="tab-container">
        <Link href="/admin" className={`${SlideStyleAct} tab-container-item`}>
          SLIDES
        </Link>
        <Link
          href="/admin/announcement"
          className={`${AnStyleAct} tab-container-item`}
        >
          ANNOUNCEMENT
        </Link>
        <Link
          href="/admin/events"
          className={`${EnStyleAct} tab-container-item`}
        >
          EVENTS
        </Link>
        <Link
          href="/admin/images"
          className={`${ImgStyleAct} tab-container-item`}
        >
          IMAGES
        </Link>
      </div>

      <h1 className="upload-header">{header}</h1>
    </>
  );
};

export default AdminTab;
