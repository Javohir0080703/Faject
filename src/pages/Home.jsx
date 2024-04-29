import React from "react";
import HomeHero from "../components/HomeHero";
import TypedJs from "../components/TypedJs";
import PopularServices from "../components/PopularServices";
import HomePortfolio from "../components/HomePortfolio";

const Home = ({ language, setLanguage }) => {
  return (
    <>
      <HomeHero language={language} setLanguage={setLanguage} />
      {/* <TypedJs language={language} setLanguage={setLanguage} /> */}
      <PopularServices language={language} setLanguage={setLanguage} />
      <HomePortfolio language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Home;
