import React from 'react'
import Navbar from "../Components/ServiceTab/Navbar"
import Head from '../Components/ServiceTab/ServicesPage/Head'
import MainPart from '../Components/ServiceTab/ServicesPage/MainPart'
import Footer from "../Components/ServiceTab/Footer"

function ServicesPage() {
  return (
    <div>
        <Navbar />
        <Head />
        <MainPart />
        <Footer />
    </div>
  )
}

export default ServicesPage