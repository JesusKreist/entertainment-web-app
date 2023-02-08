import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/Sections/SearchBar/SearchBar";
import TVSeries from "../components/TVSeries.tsx/TVSeries";
import Layout from "../components/UI/Layout/Layout";

const SeriesPage = () => {
  return (
    <Layout>
      <NavBar />
      <SearchBar />
      <TVSeries />
    </Layout>
  );
};

export default SeriesPage;
