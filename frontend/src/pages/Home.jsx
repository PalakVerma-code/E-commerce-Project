import React from 'react'
import Hero from '../components/Hero'
import LatextCollection from '../components/LatextCollection'
import BestSeller from '../components/BestSeller'
import Ourpolicy from '../components/Ourpolicy'
import NewsletterBox from '../components/NewsletterBox'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatextCollection />
      <BestSeller />
      <Ourpolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home