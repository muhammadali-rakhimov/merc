import React from 'react'
import ReactPlayer from 'react-player'
import './Videos.scss'
function Videos() {
  return (
    <div className='Videos container'>
        <div className='wrapper'>
            <ReactPlayer url='https://www.youtube.com/watch?v=7sDY4m8KNLc' controls width='480px' height='250px' />
            <ReactPlayer url='https://www.youtube.com/watch?v=7sDY4m8KNLc' controls width='480px' height='250px' />
            <ReactPlayer url='https://www.youtube.com/watch?v=7sDY4m8KNLc' controls width='480px' height='250px' />
            <ReactPlayer url='https://www.youtube.com/watch?v=7sDY4m8KNLc' controls width='480px' height='250px' />
        </div>
    </div>
  )
}

export default Videos