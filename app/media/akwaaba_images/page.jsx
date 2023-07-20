"use client";
import React, { useState } from "react";
import MediaHeader from "../page";
import "@styles/media/picnic_images.css";

const AkwaabaImages = () => {
  const akwaabaImages = [
    { type: "image", path: "/images/picnic_img/IMAGE 2023-06-11 01_19_59.jpg" },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.28 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.28 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.28 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.29 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.30 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.30 PM (2).jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.31 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.31 PM (2).jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.31 PM (3).jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.31 PM.jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.32 PM (1).jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.32 PM (2).jpeg",
    },
    {
      type: "image",
      path: "/images/akwaba_img/WhatsApp Image 2023-06-02 at 11.53.32 PM.jpeg",
    },
  ];

  const [file, setFile] = useState(null);

  return (
    <>
      <MediaHeader EActiveStyle="c-active" />
      <div className="image-container">
        {akwaabaImages.map((file, index) => (
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
      >
        <span>
          <img
            src="/L-images/close.png"
            alt=""
            onClick={() => {
              setFile(null);
            }}
          />
        </span>

        <img src={file?.path} alt="" />
      </div>
    </>
  );
};

export default AkwaabaImages;
