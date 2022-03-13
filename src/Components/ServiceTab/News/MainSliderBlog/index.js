import { NavLink } from 'react-router-dom'
import newsblog from './index.module.scss'

function index({ img, toLink }) {
  return (
    <div className={newsblog.parent} >
      <NavLink className={newsblog.link} to={toLink}>
        <div className={newsblog.img}>
          <img src={img} alt="Slide" />
        </div>
        <div className={`d-flex flex-column justify-content-center align-items-center p-2 ${newsblog.texts}`}>
          <p className={newsblog.title}>
            <b>
              More than 440,000 new cases were recorded in the US on Monday.
            </b>
          </p>
          <p className={newsblog.date}>
            12.12.2021
          </p>
        </div>
      </NavLink>
    </div>
  )
}

export default index
