import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Mobile from '../components/Mobile'
import Quotes from '../components/Quotes'
import Reasons from '../components/Reasons'
import Brands from '../components/Brands'
import Payment from '../components/Payment'
import Demo from '../components/Demo'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Mobile/>
        <Quotes/>
        <Reasons/>
        <Brands/>
        <Payment/>
        <Demo/>
        <Footer/>
    </div>
  )
}

export default Home
