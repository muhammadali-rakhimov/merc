import React from 'react'
import { NavLink } from 'react-router-dom'
import servicesH from '../../../assets/Service/servicesH.png'
import bottom1 from '../../../assets/Service/bottom1.png'
import bottom2 from '../../../assets/Service/bottom2.png'
import bottom3 from '../../../assets/Service/bottom3.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import './mainPart.scss'
function MainPart() {
  return (
    <div className='MainPart'>
        <div className='bContainer container'>
            <div className='first_Sec'>
                <div className='wrapper'>
                    <div className='l_box'>
                        <h1>Auto repair</h1>
                        <p>Hercules is helping you go farther by providing all the services you need to help you enjoy the full life of your vehicle. Our service menu includes all of the following; plus, in most cases, we have all the parts on-hand to serve your immediate needs. Just stop by - appointments are not necessary. Every Hercules service includes our 25 point inspection free of charge to help you avoid any headaches before they become a reality.
                        </p>
                    </div>
                    <div className='r_box'>
                        <img src={servicesH} />
                    </div>
                </div>
            </div>
            <div className='second_Sec'>
                <div className='intro'>
                    <div> 
                    <h2>Comprehensive training program delivers the education</h2>
                    <p>It starts with our name, but it’s really at our core: honesty, integrity, and an 
                    unwavering adherence to the highest ethical practices are what define.</p></div>
                </div>
                <div className="wrapper">
                    <div className='topic_this'>
                        <div className='clz'>
                            <NavLink to="/innerService">
                                <h3>Brake Repair</h3>
                                <h5>Brake maintenance on your car should not be treated lightly. In an emergency, stopping quickly is important for the safety of you and your passengers.</h5>
                                <FontAwesomeIcon className='icon' icon={faArrowRight} />
                            </NavLink>
                        </div>
                    </div>
                    <div className='fixed_img'>
                        <img src={bottom2} />
                    </div>
                </div>
                <div className="wrapper">
                    <div className='topic_this'>
                        <div className='clz'>
                            <NavLink to="/innerService">
                                <h3>Brake Repair</h3>
                                <h5>Brake maintenance on your car should not be treated lightly. In an emergency, stopping quickly is important for the safety of you and your passengers.</h5>
                                <FontAwesomeIcon className='icon' icon={faArrowRight} />
                            </NavLink>
                        </div>
                    </div>
                    <div className='fixed_img'>
                        <img src={bottom3} />
                    </div>
                </div>
                <div className="wrapper">
                    <div className='topic_this'>
                        <div className='clz'>
                            <NavLink to="/innerService">
                                <h3>Brake Repair</h3>
                                <h5>Brake maintenance on your car should not be treated lightly. In an emergency, stopping quickly is important for the safety of you and your passengers.</h5>
                                <FontAwesomeIcon className='icon' icon={faArrowRight} />
                            </NavLink>
                        </div>
                    </div>
                    <div className='fixed_img'>
                        <img src={bottom1} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPart