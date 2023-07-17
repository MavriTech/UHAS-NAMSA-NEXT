import React from "react";

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

  return <div>{data.title}</div>;
};

export default Announcement;
