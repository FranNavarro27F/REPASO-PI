import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <ul>
        <Link to="/home"><li>home</li></Link>
        <Link to="/create"><li>create</li></Link>
        <Link to="/about"><li>about</li></Link>
      </ul>
    </div>
  )
}
