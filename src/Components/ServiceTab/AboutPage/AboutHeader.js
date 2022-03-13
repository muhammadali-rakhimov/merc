import React from 'react'
import './AboutHeader.scss'

function AboutHeader({title, from, link, to}) {
  return (
    <div className='ab_header'>
        <div className='wrapper'>
            <div className='intro'>
                <h1>{title}</h1>
                <p><a href={link}>{from}</a>/{to}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutHeader