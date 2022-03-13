import React from 'react'
import Category from '../Components/ServiceTab/Category'
import Navbar from "../Components/ServiceTab/Navbar"
import AboutHeader from '../Components/ServiceTab/AboutPage/AboutHeader'
import Footer from "../Components/ServiceTab/Footer"

function innerService() {
  return (
    <div>
      <Navbar />
      <AboutHeader title={'ENGINE REPAIR'} from={'Home/Service'} link={'/services'} to={'Engine Repair'} />
      <Category />
      <Footer />
    </div>
  )
}

export default innerService
