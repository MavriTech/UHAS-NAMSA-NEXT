"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      {/* <p>
        <Link href="/">Back to home</Link>
      </p> */}
    </div>
  );
};

export default NotFound;
