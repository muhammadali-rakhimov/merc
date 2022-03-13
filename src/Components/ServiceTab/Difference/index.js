import difference from './index.module.scss'
import Button from '../Button'
import Title from '../Title'

function index() {
  return (
    <div className={`container-fluid ${difference.background}`}>
      <div className="row">
        <div className={difference.parent}>
          <h5>Owners continue to thrive.</h5>
          <Title titleName={"When it comes to what we know about car care, few others can compete."} />
          {/* <h2 className={difference.description}>
            <b>When it comes to what we know about car care, few others can compete.</b>
          </h2> */}
          <Button name={"Contact Us"} link={'/contact'} />
        </div>
      </div>
    </div>
  )
}

export default index
