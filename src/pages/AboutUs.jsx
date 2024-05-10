import React from 'react'
import AboutUsHero from '../components/AboutUsHero'
import OurGroup from '../components/OurGroup'
import Cta from '../components/Cta'
import TrustUs from '../components/TrustUs'
import LastReporter from '../components/LastReporter'
import HomeReviews from '../components/HomeReviews'

const AboutUs = ({ language, setLanguage }) => {
  return (
    <>
     <AboutUsHero language={language} setLanguage={setLanguage}/>
     <OurGroup language={language} setLanguage={setLanguage} />
     <TrustUs language={language} setLanguage={setLanguage} />
     <Cta language={language} setLanguage={setLanguage} />
     <HomeReviews language={language} setLanguage={setLanguage} />
    </>
  )
}

export default AboutUs