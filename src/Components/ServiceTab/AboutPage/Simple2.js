import React from 'react'
import thirdS from '../../../assets/About/thirdS.png'
import thirdS2 from '../../../assets/About/thirdS2.png'
import './Simple2.scss'
function Simple2() {
  return (
    <div className='Simple2'>
        <div className='container'>
            <div className='wrapper'>
                <div className='left_box'>
                    <img src={thirdS} />
                    <h1>
                        Your vehicle should stick with you through thick 
                    </h1>
                    <p>We want to solve your vehicle problems before they happen. Our locally 
                        owned and operated shops provide all the preemptive auto repair and maintenance services you need for your vehicle to last you longer and farther.
                    </p>
                </div>
                <div className='right_box'>
                    <h1>
                        We want your experience with us to be a positive one
                    </h1>
                    <p>With over 100+ years of combined experience in the transmission and auto repair industry, you can be assured that Mr. Transmission Milex® and Multistate Transmission Milex® is the best at repairing and maintaining your vehicle.
                         With Cobranding we can service your vehicle from oil changes and tire rotations to engine repair and transmission repair all designed to keep you road ready
                    </p>
                    <img src={thirdS2} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Simple2