import React from 'react'
import Nav from './Nav'

const App = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}

export default App
