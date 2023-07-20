"use client";

import React, { useState, useEffect } from "react";
import "@styles/slide.css";
import Image from "next/image";
// import useSWR from "swr";

const Slides = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDate = async () => {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        setErr(true);
      }

      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };
    getDate();
  }, []);

  //   const fetcher = (...args) => fetch(...args).then((res) => res.json());

  //   const { data, err, isLoading } = useSWR(
  //     "https://jsonplaceholder.typicode.com/users",
  //     fetcher
  //   );

  //   console.log(data);
  const [visibleStates, setVisibleStates] = useState({});

  const visibleHandler = (index) => {
    setVisibleStates((prevVisibleStates) => ({
      ...prevVisibleStates,
      [index]: !prevVisibleStates[index],
    }));
  };

  return (
    <>
      {data.map((dat, lessonIndex) => (
        <div className="whole-lesson" key={dat.id}>
          <div className="lesson" onClick={() => visibleHandler(lessonIndex)}>
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
                <h2>{dat.name}</h2>
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
          {visibleStates[lessonIndex] && (
            <div className="subLessons" id={`subLessons${lessonIndex}`}>
              <div className="sub-lesson">
                <div className="file">
                  <div className="file-left">
                    <div className="file-num">1.</div>
                    <div className="file-discrip">
                      <div className="file-name">{dat.email}</div>
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
          )}
        </div>
      ))}
    </>
  );
};

export default Slides;
