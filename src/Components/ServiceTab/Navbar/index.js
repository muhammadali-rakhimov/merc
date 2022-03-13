import React, { useState,useEffect } from 'react'
import i18n from '../../../i18n'
import { useDispatch,useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../../assets/logo.png"
import navbar from "./index.module.scss"
import './header.scss'
function Navbar() {
  const [search, setSearch] = useState('none')
  const [value, setValue] = useState('')
  const [scroll, setScroll] = useState("");
  // const {language} = useSelector((state) => state.langReducer);
  // const [lang,setLang] = useState(defaultLang);
  // const dispatch = useDispatch();
  // const defaultLang = localStorage.getItem("lang") || "uz";

  // const handleChange = (event) => {
  //   setLang(event.target.value);
  //   localStorage.setItem("lang", event.target.value);
  //   i18n.changeLanguage(event.target.value);
  //   console.log(event.target.value);
  //   dispatch({ type: "LANG_CHANGED", payload: event.target.value });
  // };
  
  const handleSearch = () => {
    search == 'none' ? setSearch('flex') : setSearch('none')
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY < 600) {
      setScroll("");
    } else {
      setScroll("scroll23");
    }
  });

  return (
    <div className='container-fluid'>
      <div className="row">
        <nav className={`navbar navbar-expand-lg header   py-4  ` + scroll}>
          <div className={`container-fluid ${navbar.logoMenuBurgetOnSmall}`}>
            <Link to="/" className="navbar-brand ps-4" >
              <img src={logo} alt="Logo" />
            </Link>
            <button className={`navbar-toggler ${navbar.menuBurger}`}type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <div className={navbar.menuBurgerIcon}>
                <span>&#8212;</span>
                <span>&#8212;</span>
                <span>&#8212;</span>
              </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className='me-auto'></div>
              <div className=''>
                <ul className={"navbar-nav me-auto pe-4 mb-lg-0 " + navbar.font}>
                  <li className={`nav-item ${navbar.liLink}`}>
                    <NavLink to="/" className={({isActive}) => isActive ? `nav-link ${navbar.activeNavLink}` : `nav-link ${navbar.nonActiveLink}`} aria-current="page" >Home</NavLink>
                  </li>
                  <li className={`nav-item ${navbar.liLink}`}>
                    <NavLink to="/about" className={({isActive}) => isActive ? `nav-link ${navbar.activeNavLink}` : `nav-link ${navbar.nonActiveLink}`} >About Us</NavLink>
                  </li>
                  <li className={`nav-item ${navbar.liLink}`}>
                    <NavLink to="/services" className={({isActive}) => isActive ? `nav-link ${navbar.activeNavLink}` : `nav-link ${navbar.nonActiveLink}`} >Services</NavLink>
                  </li>
                  <li className={`nav-item ${navbar.liLink}`}>
                    <NavLink to="/news" className={({isActive}) => isActive ? `nav-link ${navbar.activeNavLink}` : `nav-link ${navbar.nonActiveLink}`} >News</NavLink>
                  </li>
                  <li className={`nav-item ${navbar.liLink}`}>
                    <NavLink to="/contact" className={({isActive}) => isActive ? `nav-link ${navbar.activeNavLink}` : `nav-link ${navbar.nonActiveLink}`} >Contact Us</NavLink>
                  </li>
                  <li style={{display: search, alignItems: 'center'}} className={`nav-item me-2 ${navbar.searchInput}`}>
                    <form action="/search?" method="get">
                      <input className={navbar.searchInputOnMedia} type="search" name="query" id="navbarSearch" value={value} onChange={(e) => setValue(e.target.value)} required/>
                      <input className={navbar.searchButton} type="submit" value="Search" />
                    </form>
                  </li>
                  <li onClick={handleSearch} className={`nav-item d-flex align-items-center my-3 my-lg-0 mx-lg-2 ${navbar.search}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </li>
                  <li className={`nav-item d-flex align-items-center mx-lg-1 ${navbar.languages}`}>
                    <div className="dropdown">
                      <button className={`btn btn-dark dropdown-toggle mr-10 ${navbar.dropdownLang}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        ENG
                      </button>
                      <ul className={`dropdown-menu ${navbar.menuUl}`} aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">ENG</a></li>
                        <li><a className="dropdown-item" href="#">RU</a></li>
                        <li><a className="dropdown-item" href="#">UZ</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
