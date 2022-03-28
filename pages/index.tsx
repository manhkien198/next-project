import { Box } from "@mui/system";
import type { NextPage } from "next";
import { Html } from "next/document";
import Head from "next/head";
import { HeroSection } from "../components/home/hero.";
import { MainLayout } from "../components/layout/main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>First Nextjs Project</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>
        <HeroSection />
      </Box>
    </div>
  );
};
Home.Layout = MainLayout;

export default Home;
