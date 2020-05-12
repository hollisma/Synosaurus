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
          style={{ height: '40px', top: '10px' }}
        >
          Check it out!
        </Link>
      </div>
      <div className='w-full max-h-screen my-8'>
        <p>
          <span className='text-indigo-600'>Synthesaurus</span> lets you upgrade
          your writing by synthesizing it with a{' '}
          <span className='text-indigo-600'>thesaurus</span> and creating more
          powerful words. To use it, enter some text in the text box and click
          on any of the bold words that you want to change. Find a synonym that
          better suits your text, then choose it to replace your original word.{' '}
        </p>
        <p>
          This app was created as a final project for{' '}
          <span className='text-indigo-600'>ENG385: Children's Literature</span>{' '}
          by Hollis Ma. The link to the Github repo is{' '}
          <a
            href='https://github.com/hollisma/Synthesaurus'
            className='text-blue-600'
          >
            here
          </a>
          . Here's an essay I wrote about the relationships between{' '}
          <a
            href='https://docs.google.com/document/d/1wMKzRsglFiq7EeNvuX-ByWVdRdigV-Mvuxc5rqPE8h8/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600'
          >
            Synthesaurus and Children's Literature
          </a>
          . Huge shoutout to{' '}
          <span className='text-indigo-600'>Liora Selinger</span> for being such
          an amazing preceptor!
        </p>
      </div>
    </div>
  )
}

export default About
