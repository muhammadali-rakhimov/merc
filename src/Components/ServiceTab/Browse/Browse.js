import browse from './index.module.scss'
import './forbootstrap.scss'
import Button from '../Button'
import browse1 from '../../../assets/browse/1.png'
import browse2 from '../../../assets/browse/2.png'
import browse3 from '../../../assets/browse/3.png'
import browse4 from '../../../assets/browse/4.png'
import browse5 from '../../../assets/browse/5.png'
import browse6 from '../../../assets/browse/6.png'
import 'animate.css'

function Browse() {
  return (
    <div className='container-fluid my-4'>
      <div className="row">
        <div className="p-0 col-12 col-md-12 col-lg-7 col-xl-7 d-flex align-items-center justify-content-center">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade imageWrapper show active" id="v-pills-autosystems" role="tabpanel">
              <p className={`animate__animated animate__slideInDown animate__fast ${browse.imageText}`}>
                With a complete list of full-service automotive care from tires
              </p>
              <img className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`} src={browse1} alt={"Image of Automotive Systems"} />
            </div>
            <div className="tab-pane fade imageWrapper" id="v-pills-customer" role="tabpanel">
              <p className={`animate__animated animate__jackInTheBox animate__fast ${browse.imageText}`}>
                To Provide the Best Automotive Repair Service
              </p>
              <img className={`animate__animated animate__fadeInTopLeft animate__faster ${browse.image}`} src={browse2} alt={"Image of Customer Service"} />
            </div>
            <div className="tab-pane fade imageWrapper" id="v-pills-computer" role="tabpanel">
              <p className={`animate__animated animate__backInUp animate__fast ${browse.imageText}`}>
                here are many different avenues that lead someone into business ownership. 
              </p>
              <img className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`} src={browse3} alt={"Image of Computer Software"} />
            </div>
            <div className="tab-pane fade imageWrapper" id="v-pills-sales" role="tabpanel">
              <p className={`animate__animated animate__fadeInBottomLeft animate__fast ${browse.imageText}`}>
                To Provide the Best Automotive Repair Service
              </p>
              <img className={`animate__animated animate__rotateInDownLeft animate__faster ${browse.image}`} src={browse4} alt={"Image of Sales"} />
            </div>
            <div className="tab-pane fade imageWrapper" id="v-pills-operations" role="tabpanel">
              <p className={`animate__animated animate__bounceInDown animate__fast ${browse.imageText}`}>
                Times have changed since people used to tinker under the hood
              </p>
              <img className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`} src={browse5} alt={"Image of Operations"} />
            </div>
            <div className="tab-pane fade imageWrapper" id="v-pills-hr" role="tabpanel">
              <p className={`animate__animated animate__jackInTheBox animate__fast ${browse.imageText}`}>
                We will do everything we’ve promised and more to ensure
              </p>
              <img className={`animate__animated animate__backInUp animate__faster ${browse.image}`} src={browse6} alt={"Image of Human Resources"} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-5 col-xl-5 my-4">
          <div className="container">
            <div className={`d-flex flex-column align-items-start ${browse.browseText}`}>
              {/* <div className='d-none d-lg-block'> */}
              <div className=''>
                <h2 className='mb-3'>
                  <b>We are with you every step of way.</b>
                </h2>
                <p>Now it’s time for both of us to make sure it’s a good fit. We’ve developed a mutual evaluation process that lets us both learn more about each other and make an informed decision about your future.</p>
              </div>
              <div className={`nav flex-column nav-pills me-3 ${browse.activeLink}`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <h5 datatab="autosystem" className={'browse-link active'} id="v-pills-autosystems-tab" data-bs-toggle="pill" data-bs-target="#v-pills-autosystems" type="button" role="tab" >Automotive Systems</h5>
                <h5 datatab="customerTab" className={'browse-link'} id="v-pills-customer-tab" data-bs-toggle="pill" data-bs-target="#v-pills-customer" type="button" role="tab" >Customer Service</h5>
                <h5 datatab="computerTab" className={'browse-link'} id="v-pills-computer-tab" data-bs-toggle="pill" data-bs-target="#v-pills-computer" type="button" role="tab" >Computer Software</h5>
                <h5 datatab="salesTab" className={'browse-link'} id="v-pills-sales-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sales" type="button" role="tab" >Sales</h5>
                <h5 datatab="operationsTab" className={'browse-link'} id="v-pills-operations-tab" data-bs-toggle="pill" data-bs-target="#v-pills-operations" type="button" role="tab" >Operations</h5>
                <h5 datatab="hrTab" className={'browse-link'} id="v-pills-hr-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hr" type="button" role="tab" >Human Resources</h5>
              </div>
              <div className='my-2'></div>
              <Button name={"Browse All"} link={'/browse'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse
