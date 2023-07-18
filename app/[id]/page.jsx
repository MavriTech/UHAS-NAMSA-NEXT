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

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default Announcement;
