import { GetStaticProps } from "next";
import React from "react";
import Movies from "../components/Movies/Movies";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/Sections/SearchBar/SearchBar";
import Layout from "../components/UI/Layout/Layout";
import { Movie } from "../data/data";
import axios from "axios";

const MoviesPage: React.FC = () => {
  return (
    <Layout>
      <NavBar />
      <SearchBar />
      <Movies />
    </Layout>
  );
};

export default MoviesPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const movies = await axios("http://localhost:3000/api/shows?category=Movie");

  return {
    props: { moviesToDisplay: movies.data }, // will be passed to the page component as props
  };
};
