import ResourceTopSection from "@components/ResourceTopSection";
import React from "react";
import "@styles/resources.css";
import CardSection from "@components/CardSection";

const ResourcesPage = () => {
  return (
    <>
      <ResourceTopSection text="this is the resources page" />
      <CardSection />
    </>
  );
};

export default ResourcesPage;
