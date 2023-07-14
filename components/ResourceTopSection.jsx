import React from "react";
import "@styles/ResourceTopSec.css";
import Image from "next/image";
import Link from "next/link";

const ResourceTopSection = (props) => {
  const { text, RActiveStyle, CActiveStyle, WActiveStyle } = props;
  return (
    <>
      <section className="top-section">
        <div className="left-img-container">
          <div className="left-sub-img-container">
            <Image
              src="/images/left-pic.jpg"
              width={400}
              height={230}
              className="top-left-img"
              alt="left picture"
            />
          </div>
          <div className="filter-container">
            <div className="filter-bar">
              <div className="left-fbar">
                <Image
                  src="/L-images/filter.png"
                  width={12}
                  height={12}
                  alt="filter"
                />
                <span>Filter</span>
              </div>
              <Image
                src="/L-images/down-arrow.png"
                width={20}
                height={20}
                id="hoverElement"
                alt="dropdown image"
              />
            </div>

            <div id="filterOptions">
              <ul id="filter-dropdown">
                <li>
                  <Link href="#level-100">level 100</Link>
                </li>
                <li>
                  <Link href="#level-200">level 200</Link>
                </li>
                <li>
                  <Link href="#level-300">level 300</Link>
                </li>
                <li>
                  <Link href="#level-400">level 400</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="top-header-title-container">
          <div className="scroll-anim">
            <marquee behavior="scroll" direction="left">
              <h3>{text}</h3>
            </marquee>
          </div>
          <div className="title">
            <h2>namsa-learn</h2>
          </div>
          <div className="mid-components">
            <span className={RActiveStyle}>
              <Link href="/resources">Resources</Link>
            </span>
            <span className={CActiveStyle}>
              <Link href="/resources/courses">Courses</Link>
            </span>
            <span className={WActiveStyle}>
              <Link href="/resources/wishlist">Wishlist</Link>
            </span>
          </div>
        </div>
        <div className="right-img-container">
          <div className="right-sub-img-container">
            <Image
              src="/images/right-pic.jpg"
              width={400}
              height={220}
              className="top-right-img"
              alt="right picture"
            />
          </div>
          <div className="search-container">
            <div className="right-comp-search">
              <Image
                src="/L-images/zoom.png"
                width={15}
                height={15}
                alt="search"
              />
              <input
                type="text"
                id="search-item"
                placeholder="Search my courses"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="card-section" id="cardSection"></section> */}
    </>
  );
};

export default ResourceTopSection;
