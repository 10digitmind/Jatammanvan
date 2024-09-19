import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Bookus from './Bookus'
import Ourservices from './Ourservices'
import Aboutus from './Aboutus'
import Footer from './Footer'

export default function Homepage() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Ourservices/>
      <Aboutus/>
      <Bookus/>
      <Footer/>
    </div>
  )
}
