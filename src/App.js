import { BrowserRouter, Route, Routes } from "react-router-dom"
import "swiper/css"
import { instance } from "./API/api";
import './App.css'
import AboutPage from './pages/AboutPage'
import ContactPage from "./pages/ContactPage"
import InnerService from './pages/InnerService'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import NewsPage from './pages/NewsPage'
import BlogPage from './pages/BlogPage'
import ScrollToTop from "./Components/ServiceTab/ScrolltoTop/ScrollerToTop";
import { BackToTop }  from "./BackToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BackToTop />
      <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="innerService" element={<InnerService />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/blog" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
