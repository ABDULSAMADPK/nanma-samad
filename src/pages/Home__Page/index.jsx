import React from 'react'
import Navbar from '../../components/UI/Navbar'
import Footer from '../../components/UI/Footer'
import Carousel from './components/block/Carousel'
import Category from './components/block/Category'
import Popular from './components/block/Popular'

function HomePage() {

  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Category/>
      <Popular/>
      <Footer/>
    </div>
  )
}

export default HomePage