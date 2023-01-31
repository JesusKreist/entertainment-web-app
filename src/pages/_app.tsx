import "@/styles/globals.css";
import "@fontsource/outfit/100.css";
import "@fontsource/outfit/200.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/outfit/900.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import Layout from "../components/UI/Layout/Layout";
import NavBar from "../components/NavBar/NavBar";
import MainContent from "../components/UI/Layout/MainContent";
import SearchBar from "../components/Sections/SearchBar/SearchBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <NavBar />
        <SearchBar />
        <MainContent>
          <Component {...pageProps} />
        </MainContent>
      </Layout>
    </ChakraProvider>
  );
}
