import news from './index.module.scss'
import { useState } from 'react'
import JumbotronPosts from './JumbotronPosts'
import wallpaper from '../../../assets/news/newswallpaper.png'
import MainSliderBlog from './MainSliderBlog'
import MainBlogs from './MainBlogs'
import SimpleBlog from './SimpleBlog'
import Title from '../Title'
import FeaturedPosts from './FeaturedPosts'
import { NavLink, Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import slide1 from '../../../assets/news/slide1.png'
import slide2 from '../../../assets/news/slide2.png'
import slide3 from '../../../assets/news/slide3.png'
import jumbotronPost from '../../../assets/news/posts/post7.png'
import jumbotronPosts1 from '../../../assets/news/posts/post8.png'
import jumbotronPosts2 from '../../../assets/news/posts/post9.png'
import jumbotronPosts3 from '../../../assets/news/posts/post10.png'
import post11 from '../../../assets/news/posts/post11.png'
import post12 from '../../../assets/news/posts/post12.png'
import post13 from '../../../assets/news/posts/post13.png'

function Index() {
  const [emailInput, setEmailInput] = useState('')

  const emailFormSubmit = (e) => {
    e.preventDefault()
    alert('Success!')    
  }

  return (
    <>
      <div className={`container-fluid p-0 overflow-hidden ${news.wallpaper}`}>
        <div className="row">
          <img src={wallpaper} alt="Wallpaper" />
          <div className={`container-fluid d-flex flex-column ${news.parentMoveBlock}`}>
            <div className={`col-12 col-md-7 col-lg-7 mx-auto d-flex flex-column justify-content-center pt-5 px-5 ${news.moveBlock}`}>
              <NavLink to='blog' className={news.mainJumbotronPost}>
                <h1 className={`${news.title} ${news.mainLink}`}>
                  <b>
                      Hong Kong news website to shut after police raid
                  </b>
                  <div className={`my-3 ${news.borderTitle}`}></div>
                </h1>
                <p className={news.date}>
                  <b>
                      12.12.2021
                  </b>
                </p>
                <p className={`${news.text} ${news.mainLink}`}>
                    The US and several European countries have reported their highest daily rises in Covid cases since the pandemic began, as the Omicron variant spreads.
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid m-0 my-5 ${news.parent}`}>
        <div className="row">
          <div className={`col-1 d-flex justify-content-center align-items-center ${news.save}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"          fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
            </svg>
          </div>
          <div className="col-11 col-lg-11 m-0 p-0">
            <Swiper
              grabCursor={true}         
              watchSlidesProgress={true}
              spaceBetween={50}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              breakpoints={{
                423: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1245: {
                  slidesPerView: 3,
                  spaceBetween: 20
                }
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <MainSliderBlog img={slide1} toLink={'blog'} />
              </SwiperSlide>
              <SwiperSlide>
                <MainSliderBlog img={slide2} toLink={'blog'} />
              </SwiperSlide>
              <SwiperSlide>
                <MainSliderBlog img={slide3} toLink={'blog'} />
              </SwiperSlide>
              <SwiperSlide>
                <MainSliderBlog img={slide1} toLink={'blog'} />
              </SwiperSlide>
              <SwiperSlide>
                <MainSliderBlog img={slide2} toLink={'blog'} />
              </SwiperSlide>
              <SwiperSlide>
                <MainSliderBlog img={slide3} toLink={'blog'} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <MainBlogs />
        </div>
      </div>
      <FeaturedPosts />
      <div className="container-fluid my-5">
        <div className="row">
          <div style={{backgroundImage: `url(${jumbotronPost})`}} className={`col-12 col-lg-6 d-flex justify-content-center align-items-center ${news.jumbotronPost}`}>
            <Link to="blog" className={`d-flex justify-content-center ${news.link}`}>
              <div className={`col col-sm-10 col-md-8 col-lg-10 col-xl-6 px-3 ${news.jumbotronPostDesc}`}>
                  <h3>
                    <b>These were just promises, he needs to get the bill through congress. </b>
                  </h3>
                  <p>
                    The despair among many in the US over the possible failure of President Biden's bill will also have knock-on effects throughout the world. This will certainly be the case in China
                  </p>
              </div>
            </Link>
          </div>
          <div className={`col-12 col-sm-12 col-lg-6 d-flex flex-wrap justify-content-center align-items-center ${news.jumbotronPostParent}`}>
            <JumbotronPosts title={'There are now growing concerns that this momentum may dissipate over the coming months.'} img={jumbotronPosts1} date={'12.12.2021'} desc={'The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...'} />
            <JumbotronPosts title={'There are now growing concerns that this momentum may dissipate over the coming months.'} img={jumbotronPosts2} date={'12.12.2021'} desc={'The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...'} />
            <JumbotronPosts title={'There are now growing concerns that this momentum may dissipate over the coming months.'} img={jumbotronPosts3} date={'12.12.2021'} desc={'The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...'} />
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 p-4">
        <div className="row">
          <SimpleBlog
            title={'More than 440,000 new cases were recorded in the US on Monday.'}
            date={'12.21.2021'}
            img={post11}
            text={'Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway'}
          />
          <SimpleBlog
            title={'More than 440,000 new cases were recorded in the US on Monday.'}
            date={'12.21.2021'}
            img={post12}
            text={'Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway'}
          />
          <SimpleBlog
            title={'More than 440,000 new cases were recorded in the US on Monday.'}
            date={'12.21.2021'}
            img={post13}
            text={'Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway'}
          />
        </div>
      </div>
      <div className={`container-fluid ${news.subscribeBackground}`}>
        <div className="row">
          <div className={`d-flex flex-column align-items-center ${news.subscribeParent}`}>
            <h5>Our fast and latest newsletters</h5>
            <Title titleName={"Sign for latest newsletters"} />
            <form onSubmit={emailFormSubmit} action='' className='d-flex flex-column flex-nowrap justify-content-start align-items-end'>
              <input className={news.subscribeInputEmail} type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} placeholder='Enter your email here' required/>
              <button type='submit' className={news.subscribeSubmitButton}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
