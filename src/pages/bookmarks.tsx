import axios from "axios";
import { GetStaticProps } from "next";
import React from "react";
import Bookmarks from "../components/Bookmarks/Bookmarks";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/Sections/SearchBar/SearchBar";
import Layout from "../components/UI/Layout/Layout";

const BookmarksPage = () => {
  return (
    <Layout>
      <NavBar />
      <SearchBar />
      <Bookmarks />
    </Layout>
  );
};

export default BookmarksPage;
