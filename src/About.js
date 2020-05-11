import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <h1 className='text-4xl'>About Synthesaurus</h1>
        <Link
          to='/'
          className='btn btn-blue btn-hover relative'
          style={{ height: '40px', top:'10px' }}
        >
          Check it out!
        </Link>
      </div>
      <div className='w-full max-h-screen'>
        <p>hello here's some terxt</p>
        <p>hello here's some terxt hello here's some terxt hello here's some terxthello here's some terxthello here's some terxthello here's some terxthello here's some terxthello here's some terxthello here's some terxt</p>
      </div>
    </div>
  )
}

export default About
