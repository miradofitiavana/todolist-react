import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const counter = useSelector(state => state.counter.counterValue)
  return (
    <div>
      <Link to='/counter'>counter</Link>
      <p>counter : {counter}</p>
    </div>
  )
}

export default Home
