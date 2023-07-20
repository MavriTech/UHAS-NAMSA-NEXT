import AdminTab from "@components/adminTab";
import Image from "next/image";
import React from "react";

const UploadImages = () => {
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
          <Image
            className="uploaded-img"
            src="/images/general_img/caro1.jpg"
            width={150}
            height={155}
          />
          <Image
            className="uploaded-img"
            src="/images/general_img/caro1.jpg"
            width={150}
            height={155}
          />
          <Image
            className="uploaded-img"
            src="/images/general_img/caro1.jpg"
            width={150}
            height={155}
          />
          <Image
            className="uploaded-img"
            src="/images/general_img/caro1.jpg"
            width={150}
            height={155}
          />
          <Image
            className="uploaded-img"
            src="/images/general_img/caro1.jpg"
            width={150}
            height={155}
          />
        </div>
        <div className="uploader">
          <div className="upload-holder">
            <Image
              src="/icons/upload.png"
              width={18}
              height={20}
              alt="upload icon"
              className="upload-icon"
            />
          </div>

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
