import React from "react";
import "@styles/announcements.css";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

async function getDate(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const Announcement = async ({ params }) => {
  const data = await getDate(params.id);
  const dataSet = await getData();
  
  return (
    <div>
    <div className="announcement-logo">
    <img src="https://th.bing.com/th/id/R.117e9bbc3c8111d0abeb25087e372a31?rik=XEYJuavuEA8Hrg&pid=ImgRaw&r=0"
    />
    </div>
    <div className = 'headline-announce'>
        <div className = 'headline-container'>
            <div className="heading">
            <h2>{data.title}</h2>
                <div className = 'headline'>
                <p>{data.body}</p>
                </div>
            </div>
           
        </div>
    <div className="announcements">
        <div className = 'announcement-header'>
        <h2>
                Announcements
            </h2>
            <div className = 'announcement-container'>
                {dataSet.map((data) => (
            <div className="announcement-content" key={data.id}>
                <a href={`/${data.id}`}>
                <h3>{data.title.slice (0, 40) + "..."}</h3>
                <h3>{data.body.slice(0, 50) + "..."}</h3>
                </a>
                <hr />
            </div>
            ))}
            <hr/>
            </div> 
        </div>
    </div>
    </div>
    </div>
);
};

export default Announcement;
