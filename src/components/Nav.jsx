import React from 'react'
import { Link } from 'react-router'

const Nav = (props) => {
  return (
    <div>
      <Link to="/">
        Homepage
      </Link>
      <Link to="/graph">
        Graph
      </Link>
    </div>
  )
}

export default Nav
