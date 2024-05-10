import React from 'react'
import AboutUsHero from '../components/AboutUsHero'

const AboutUs = ({ language, setLanguage }) => {
  return (
    <>
     <AboutUsHero language={language} setLanguage={setLanguage}/>
    </>
  )
}

export default AboutUs