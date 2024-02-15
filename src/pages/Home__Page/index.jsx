import React from 'react'
import Navbar from '../../components/UI/Navbar'
import Footer from '../../components/UI/Footer'
import Carousel from './components/block/Carousel'

function HomePage() {

  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default HomePage