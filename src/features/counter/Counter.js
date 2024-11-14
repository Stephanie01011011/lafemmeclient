import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addAmount } from './counterSlice';

function Counter() {
    let count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
    }
  return (
    <div>
      <p>Counter</p>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input 
        type="text" 
        value={incrementAmount}
        onChange={(e) => {
            setIncrementAmount(e.target.value)
        }}/>
        <div className="">
            <button onClick={() => dispatch(addAmount(addValue))}>Add Amount</button>
            <button onClick={resetAll}>Reset</button>
        </div>
    </div>
  )
}

export default Counter
