import axios from "axios";
import { GetStaticProps } from "next";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/Sections/SearchBar/SearchBar";
import TVSeries from "../components/TVSeries.tsx/TVSeries";
import Layout from "../components/UI/Layout/Layout";
import { Series } from "../data/data";

type SeriesPageProps = {
  tvSeriesToDisplay: Series[];
};
const SeriesPage: React.FC<SeriesPageProps> = ({ tvSeriesToDisplay }) => {
  return (
    <Layout>
      <NavBar />
      <SearchBar />
      <TVSeries tvSeriesToDisplay={tvSeriesToDisplay} />
    </Layout>
  );
};

export default SeriesPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const tvSeries = await axios(
    "http://localhost:3000/api/shows?category=TV Series"
  );

  return {
    props: { tvSeriesToDisplay: tvSeries.data }, // will be passed to the page component as props
  };
};
