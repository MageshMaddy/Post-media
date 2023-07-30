import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Oops!! Page not found</h2>
      <p><Link to={'/'}>Go to Homepage</Link></p>
      </main>
  )
}

export default Missing