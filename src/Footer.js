import React from 'react'

const Footer = () => {
  const year = new Date();
  return (
    <footer className='Footer'><h2>Copyright &copy; {year.getFullYear()}</h2></footer>
  )
}

export default Footer