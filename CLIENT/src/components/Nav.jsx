import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <header>
      <nav>
        <Link to='/' >Artists</Link>
        <Link to='/albums' >Albums</Link>
        <Link to='/about' >About</Link>
      </nav>
    </header>
  )
}

export default Nav