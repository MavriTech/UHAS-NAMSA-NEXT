"use client";
import React, { useState } from "react";
import MediaHeader from "../page";
import "@styles/media/picnic_images.css";

const Picnic_Images = () => {
  const [file, setFile] = useState(null);

  const picnicImages = [
    { type: "image", path: "/images/picnic_img/IMAGE 2023-06-11 01_19_59.jpg" },
    { type: "image", path: "/images/picnic_img/IMAGE 2023-06-11 01_20_00.jpg" },
    { type: "image", path: "/images/picnic_img/IMAGE 2023-06-11 01_20_02.jpg" },
    { type: "image", path: "/images/picnic_img/IMAGE 2023-06-11 01_20_04.jpg" },
    { type: "image", path: "/images/picnic_img/IMAGE 2023-06-11 01_20_07.jpg" },
    { type: "image", path: "/images/picnic_img/IMAGE 2023-06-11 01_20_08.jpg" },
    { type: "image", path: "/images/picnic_img/IMAGE 2023-06-11 01_20_10.jpg" },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.21 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.21 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.22 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.22 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.23 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.23 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.24 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.24 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.25 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.25 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.26 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.26 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.27 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.26 PM (2).jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.28 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.28 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.29 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.29 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.30 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.30 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.31 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/picnic_img/WhatsApp Image 2023-06-02 at 4.08.31 PM.jpeg",
    },
  ];
  return (
    <>
      <MediaHeader PActiveStyle="c-active" />
      <div className="image-container">
        {picnicImages.map((file, index) => (
          <div
            className="image-box"
            key={index}
            onClick={() => {
              setFile(file);
            }}
          >
            <img src={file.path} alt="" />
          </div>
        ))}
      </div>

      <div
        className="popup-image-view"
        style={{ display: file ? "block" : "none" }}
        onClick={() => setFile(null)}
      >
        <div className="popup-image">
          <img src={file?.path} alt="" />
        </div>
        <span>
          <img src="/L-images/close.png" alt="" onClick={() => setFile(null)} />
        </span>
      </div>
    </>
  );
};
export default Picnic_Images;
