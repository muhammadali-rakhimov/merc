import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Navbar from '../Navbar'
import Button from '../Button'
import wallpaper1 from '../../../assets/wallpapers/1.png'
import wallpaper2 from '../../../assets/wallpapers/2.png'
import wallpaper3 from '../../../assets/wallpapers/3.png'
import 'animate.css'

function Main() {
  const [imagePick, setImagePick] = useState(wallpaper1)

  return (
    <div style={{backgroundImage: `url(${imagePick})`}} className={styles.parent}>
      <Navbar />
      <div className={`container d-flex my-4 my-md-4 my-lg-4 my-xl-5 `}>
        <div className='col-12 col-md-7 col-lg-6 col-xl-6 d-flex align-items-start'>
          <div className="tab-content" id="v-pills-tabContent">
            <div className={`tab-pane fade show active ${styles.colorTitleImportant}`} id="v-pills-01" role="tabpanel" aria-labelledby="v-pills-01-tab">
              <h1 className='animate__animated animate__fadeInRight animate__fast'>
                <b>Own a high-performing, proven automotive franchise</b>
              </h1>
              <h3 className="mb-3 animate__animated animate__slideInLeft animate__fast">The automotive industry is strong, and drivers will always need a trustworthy partner for their automotive needs.</h3>
              <Button name={"Contact Us"} link={'/contact'} />
            </div>
            <div className={`tab-pane fade ${styles.colorTitleImportant}`} id="v-pills-02" role="tabpanel" aria-labelledby="v-pills-02-tab">
              <h1 className='animate__animated animate__fadeInRight animate__fast'>
                <b>Supporting your vehicle before it causes you problems</b>
              </h1>
              <h3 className="mb-3 animate__animated animate__slideInLeft animate__fast">Life is better without constant car payments or unexpected vehicle problems.</h3>
              <Button name={"Contact Us"} link={'/contact'} />
            </div>
            <div className={`tab-pane fade ${styles.colorTitleImportant}`} id="v-pills-03" role="tabpanel" aria-labelledby="v-pills-03-tab">
              <h1 className='animate__animated animate__fadeInRight animate__fast'>
                <b>The best way to avoid problems with vehicle is planning ahead</b>
              </h1>
              <h3 className="mb-3 animate__animated animate__slideInLeft animate__fast">The combined effort of the battery, starter, and alternator is what keeps your vehicle powered.</h3>
              <Button name={"Contact Us"} link={'/contact'} />
            </div>
          </div>
        </div>
        <div style={{height: '300px'}} className={`col-lg-6 d-flex justify-content-end ${styles.tabClicker}`}>
          <div className="d-flex justify-content-end align-items-center">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button onClick={() => setImagePick(wallpaper1)} className={`nav-link buttonLink active ${styles.navLinkButton}`} id="v-pills-01-tab" data-bs-toggle="pill" data-bs-target="#v-pills-01" type="button" role="tab" aria-controls="v-pills-01" aria-selected="true">01 &#8212;</button>
              <button onClick={() => setImagePick(wallpaper2)} className={`nav-link buttonLink ${styles.navLinkButton}`} id="v-pills-02-tab" data-bs-toggle="pill" data-bs-target="#v-pills-02" type="button" role="tab" aria-controls="v-pills-02" aria-selected="false">02 &#8212;</button>
              <button onClick={() => setImagePick(wallpaper3)} className={`nav-link buttonLink ${styles.navLinkButton}`} id="v-pills-03-tab" data-bs-toggle="pill" data-bs-target="#v-pills-03" type="button" role="tab" aria-controls="v-pills-03" aria-selected="false">03 &#8212;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
