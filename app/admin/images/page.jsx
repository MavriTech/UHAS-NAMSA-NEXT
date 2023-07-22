"use client";
import React, { useEffect, useRef, useState } from "react";
import AdminTab from "@components/adminTab";
import Image from "next/image";
import "@styles/upload_image.css";

const UploadImages = () => {
  const fileInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // Handle the selected file here, you can upload it to your server or do other operations.
    setSelectedImages([...selectedImages, file]);
  };

  useEffect(() => {
    fileInputRef.current.addEventListener("change", handleFileInputChange);

    return () => {
      fileInputRef.current.removeEventListener("change", handleFileInputChange);
    };
  }, [selectedImages]);

  return (
    <>
      <AdminTab ImgStyleAct="active" header="UPLOAD PICTURES" />

      <select className="select-pane1">
        <option value="option1">To event page</option>
        <option value="option2">Option 2</option>
        <option value="option4">Option 3</option>
        <option value="option5">Option 3</option>
        <option value="option6">Option 3</option>
        <option value="option7">Option 3</option>
        <option value="option8">Option 3</option>
      </select>

      <div className="imager">
        <div className="pictures-holder">
          {selectedImages.map((image, index) => (
            <div key={index} className="uploaded-img">
              <Image className='image' src={URL.createObjectURL(image)} width={150} height={155} />
            </div>
          ))}
        </div>
        <div className="uploader">
          <div className="upload-holder" onClick={handleImageUpload}>
            <Image
              src="/icons/upload.png"
              width={18}
              height={20}
              alt="upload icon"
              className="upload-icon"
            />
          </div>
          <input type="file" ref={fileInputRef} style={{ display: "none" }} accept="image/*" />

          <span>Upload image</span>
        </div>
      </div>
      <div className="input-containers">
        <label className="title" htmlFor="announcement-title">
          Add title
        </label>
        <input
          className="announcement-title-input"
          type="text"
          placeholder="Eg; The executive and his people.."
        />
        <label className="title" htmlFor="announcement-body">
          Add description
        </label>
        <textarea
          name="announcement-body"
          className="announcement-body"
          cols="30"
          rows="5"
          placeholder="Eg; A tour we went at afadjato ..."
        ></textarea>
      </div>

      <button className="post-pic">POST PICTURE</button>
    </>
  );
};

export default UploadImages;
