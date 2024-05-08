import React from "react";
import HomeHero from "../components/HomeHero";
import TypedJs from "../components/TypedJs";
import PopularServices from "../components/PopularServices";
import HomePortfolio from "../components/HomePortfolio";
import HomeReviews from "../components/HomeReviews";
import AboutCompany from "../components/AboutCompany";
import LastReporter from "../components/LastReporter";
import Accardion from "../components/Accardion";
import Cta from "../components/Cta";

const Home = ({ language, setLanguage }) => {
  return (
    <>
      <HomeHero language={language} setLanguage={setLanguage} />
      {/* <TypedJs language={language} setLanguage={setLanguage} /> */}
      <PopularServices language={language} setLanguage={setLanguage} />
      <HomePortfolio language={language} setLanguage={setLanguage} />
      <HomeReviews language={language} setLanguage={setLanguage} />
      <AboutCompany language={language} setLanguage={setLanguage} />
      <LastReporter language={language} setLanguage={setLanguage} />
      <Accardion language={language} setLanguage={setLanguage} />
      <Cta language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Home;
