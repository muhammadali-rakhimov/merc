import { useState } from 'react'
import contact from './index.module.scss'
import Button from '../Button'
import img1 from '../../../assets/Message1.png'
import img2 from '../../../assets/Message2.png'
import img3 from '../../../assets/Message3.png'

function Contact() {
  const [name, setName] = useState('Name')
  const [surname, setSurname] = useState('Surname')
  const [email, setEmail] = useState('Email Address')
  const [number, setNumber] = useState('Phone Number')
  
  const handleSubmit = () => {
    
  }

  return (
    <div className="container mt-5 pt-3">
      <div className="row">
        <h1>Get in touch</h1>
        <div className="col-12 col-lg-7 col-md-7 col-sm-7 d-flex flex-column justify-content-center align-items-center">
          <div className="col">
            <p className={`mt-4 ${contact.messageTitle}`}>
              <b>
                Send a Message
              </b>
            </p>
            <p>
              Her parents had moved into the house, belonging to her Scottish grandparents, the Earl and Countess of Strathmore, only a few weeks before her birth.
            </p>
          </div>
          <form className="d-flex flex-column" action="/form?" method="post">
            <div className="col-12 my-3">
              <div className="row">
                <div className="col col-md-6 col-lg-5">
                  <input className={`my-3 ${contact.inputs}`} type="text" name="name" onClick={e => setName("")} value={name} onChange={n => setName(n.target.value)} placeholder="Name" />
                  <input className={`my-3 ${contact.inputs}`} type="text" name="surname" onClick={e => setSurname("")} value={surname} onChange={s => setSurname(s.target.value)} placeholder="Surname" />
                </div>
                <div className="col col-md-6 col-lg-5">
                  <input className={`my-3 ${contact.inputs}`} type="text" name="email" onClick={e => setEmail("")} value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
                  <input className={`my-3 ${contact.inputs}`} type="text" name="number" onClick={e => setNumber("")} value={number} onChange={num => setNumber(num.target.value)} placeholder="Phone Number" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <p className={contact.messageLabel}>
                Message
              </p>
              <textarea className={contact.message} style={{width: '100%', height: '150px'}} name="comment" form="userForm"></textarea>
            </div>
            <div className="col-12 mt-4">
              <button onClick={handleSubmit} className={contact.button}>Submit</button>
            </div>
          </form>
        </div>
        <div className={`col-12 col-lg-5 col-md-5 col-sm-5 d-flex flex-column justify-content-center align-items-center ps-4 ${contact.border}`}>
          <div className="col">
            <p className={`mt-3 ${contact.contactTitle}`}>
              <b>Call Us</b>
            </p>
            <p>
              The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...
            </p>
            <div className={`d-flex align-items-center`}>
              <div className={` ${contact.img}`}>
                <img src={img1} alt="Call Us (Image)" />
              </div>
              <div className={`d-flex align-items-center ms-3`}>
                +998 71 289-99-99
              </div>
            </div>
          </div>
          <div className="col">
            <p className={`mt-3 ${contact.contactTitle}`}>
              <b>Visit Us</b>
            </p>
            <p>
              The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...
            </p>
            <div className={`d-flex align-items-center`}>
              <div className={` ${contact.img}`}>
                <img src={img2} alt="Call Us (Image)" />
              </div>
              <div className={`d-flex align-items-center ms-3`}>
              9, Ziyolilar str., M.Ulugbek district, 100170 Tashkent, Uzbekistan.
              </div>
            </div>
          </div>
          <div className="col">
            <p className={`mt-3 ${contact.contactTitle}`}>
              <b>Visit Us</b>
            </p>
            <p>
              The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...
            </p>
            <div className={`d-flex align-items-center`}>
              <div className={` ${contact.img}`}>
                <img src={img3} alt="Call Us (Image)" />
              </div>
              <div className={`d-flex align-items-center ms-3`}>
                Mon - Fri: 8:00am to 5:00pm Sut - Sun: Close
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
