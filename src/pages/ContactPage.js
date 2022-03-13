import Navbar from "../Components/ServiceTab/Navbar"
import AboutHeader from '../Components/ServiceTab/AboutPage/AboutHeader'
import Contact from "../Components/ServiceTab/Contact"
import Footer from "../Components/ServiceTab/Footer"
import Map from "../Components/ServiceTab/Map/Map"

function ContactPage() {
  return (
    <div>
      <Navbar />
      <AboutHeader title={'CONTACT US'} from={'Home'} link={'/'} to={'Contact'} />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}

export default ContactPage
