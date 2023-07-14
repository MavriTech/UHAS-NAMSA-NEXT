import ResourceTopSection from "@components/ResourceTopSection";
import React from "react";
import "@styles/resources.css";
import CardSection from "@components/CardSection";

const ResourcesPage = () => {
  return (
    <>
      <ResourceTopSection
        text="this is the resources page"
        RActiveStyle="c-active"
      />
      <CardSection />
    </>
  );
};

export default ResourcesPage;
