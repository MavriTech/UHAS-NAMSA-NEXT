import React from "react";
import "@styles/slide.css";
import Image from "next/image";
import Link from "next/link";

const getCardsData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Page({ params }) {
  const data = await getCardsData(params.slug);
  return (
    <div>
      <header className="nav-header" id="navHeader">
        <div className="left-header">
          <span className="title">namsa-learn</span>
          <span className="course-title">{data.name}</span>
        </div>
        <div className="share-icon">
          <button className="share-btn">
            <span>Share</span>
            <Image
              src="/img/share-Vector.png"
              alt="share image"
              width={20}
              height={20}
            />
          </button>
        </div>
      </header>
      <div class="slide-pic">
        <Image
          src="/images/general_img/caro1.jpg"
          alt=""
          width={100}
          height={543}
        />
      </div>
      <div className="resource-bar">
        <div className="resource-type">
          <Link href="" className="active">
            Slides
          </Link>
          <Link href="">Past Questions</Link>
          <Link href="">Announcement</Link>
        </div>
        <div className="search-container">
          <div className="resource-search">
            <img src="/img/zoom.png" />
            <input type="text" placeholder="Search" id="search-item" />
          </div>
        </div>
      </div>
      <section className="lessons-container" id="lessonsContainer">
        <div className="whole-lesson">
          <div className="lesson" id="lesson0">
            <div className="left-folder">
              <div className="folder-img-container">
                <Image
                  src="/img/folder.png"
                  className="folder-img"
                  width={58}
                  height={58}
                  alt="folder image"
                />
              </div>
              <div className="lesson-descrip">
                <h2>Introduction to cells name2</h2>
                <span className="folder-size">Size: 105Kb</span>
              </div>
            </div>
            <div className="drop-img-container">
              <Image
                src="/img/dropdown.png"
                className="drop-img"
                width={25}
                height={12}
                alt="dropdown image"
              />
            </div>
          </div>
          <div className="subLessons" id="subLessons0">
            <div className="sub-lesson">
              <div className="file">
                <div className="file-left">
                  <div className="file-num">1.</div>
                  <div className="file-discrip">
                    <div className="file-name">lesson one</div>
                    <div className="file-size-img-container">
                      <Image
                        src="/img/size.png"
                        className="file-size-img"
                        alt="size image"
                        width={20}
                        height={22}
                      />
                      <span>57Kb</span>
                    </div>
                  </div>
                </div>
                <div className="file-download-icon-container">
                  <Image
                    src="/img/download.png"
                    className="file-download-icon"
                    width={220}
                    height={30}
                    alt="download image"
                  />
                </div>
              </div>
              <hr
                style={{ width: "87%", marginInline: "auto" }}
                className="horizonLine"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
