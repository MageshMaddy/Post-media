import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({Search, setSearch}) => {
  return (
    <nav className='Nav'>
      <form className='SearchForm' onSubmit={(e) =>e.preventDefault()}>
            <label htmlFor='Search'>Search Posts</label>
            <input
              id='search'
              placeholder='Search Posts'
              type='text'
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
            />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="post">Post</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav