"use client";
import React, { useState } from "react";
import MediaHeader from "@components/MediaHeader";
import "@styles/media/media_images.css";

const Media = () => {
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> 8d332a6de0fe8b57b029a3a0279ba11111056405
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
        onClick={() => setFile(null)}
      >
        <div className="popo">
        <div className="popup-image">
          <img src={file?.path} alt="" />
          <div className="close-icon">
            <img
              src="/L-images/close.png"
              alt=""
              onClick={() => setFile(null)}
            />
          </div>
        </div>
        </div>
      </div>
<<<<<<< HEAD
>>>>>>> dffa54a5def441c8a8c9d555b52822c77edf77ef
=======

>>>>>>> 8d332a6de0fe8b57b029a3a0279ba11111056405
    </>
  );
};
export default Media;
