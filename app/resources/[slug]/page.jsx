import React from "react";
import "@styles/slide.css";
import Image from "next/image";
import Link from "next/link";
import Slides from "@components/Slides";

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
        <Slides />
      </section>
    </div>
  );
}
