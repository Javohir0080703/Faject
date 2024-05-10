import React from 'react'
import AboutUsHero from '../components/AboutUsHero'
import OurGroup from '../components/OurGroup'

const AboutUs = ({ language, setLanguage }) => {
  return (
    <>
     <AboutUsHero language={language} setLanguage={setLanguage}/>
     <OurGroup language={language} setLanguage={setLanguage} />
    </>
  )
}

export default AboutUs