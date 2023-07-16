import React from "react";
import ResourceTopSection from "@components/ResourceTopSection";

import "@styles/courses.css";
import CoursesComp from "@components/CoursesComp";

const CoursesPage = () => {
  return (
    <>
      <ResourceTopSection text="this course pages" CActiveStyle="c-active" />
      <CoursesComp />
    </>
  );
};

export default CoursesPage;
