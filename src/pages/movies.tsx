import { GetStaticProps } from "next";
import React from "react";
import Movies from "../components/Movies/Movies";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/Sections/SearchBar/SearchBar";
import Layout from "../components/UI/Layout/Layout";

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
