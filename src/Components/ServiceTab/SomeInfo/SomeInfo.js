import React, { Component , useState,useEffect} from 'react'
import message1 from '../../../assets/Message1.png'
import message2 from '../../../assets/Message2.png'
import message3 from '../../../assets/Message3.png'
import './someInfo.scss'

export default class SomeInfo extends Component {

  render() {
    return (
      <div className='someinfo container '>
          <div className='wrapper'>
              <div className='col'>
                  <div className='information'>
                      <div className='for_img'><img src={message1} />  </div>
                      <div className='about'>
                        <h2>Contact</h2>
                        <p>+99897 999-99-99</p>
                      </div>
                  </div>
              </div>
              <div className='col'>
                  <div className='information'>
                      <div className='for_img'><img src={message2} />  </div>
                      <div className='about'>
                        <h2>Location</h2>
                        <p>440 S.Church Street, Suite 700,Charlotte,NC 28200</p>
                      </div>
                  </div>
              </div>
              <div className='col'>
                  <div className='information'>
                      <div className='for_img'><img src={message3} />  </div>
                      <div className='about'>
                        <h2>Open hours</h2>
                        <p>Mon - Fri: 8:00am to 5:00pm</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
