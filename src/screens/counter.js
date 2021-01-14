import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  incrementCounter,
  decrementCounter,
  fakeFunction
} from '../actions/counter'

const Counter = () => {
  const counterState = useSelector(state => state.counter.counterValue)
  const dispatch = useDispatch()

  return (
    <div>
      <Link to='/home'>home</Link>

      <p>{counterState}</p>
      <div>
        <button onClick={() => dispatch(decrementCounter(2))}>-</button>
        <button onClick={() => dispatch(incrementCounter())}>+</button>
      </div>
    </div>
  )
}

export default Counter
