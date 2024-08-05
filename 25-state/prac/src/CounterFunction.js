import React, { useState } from 'react'

const Counter = (props) => {
    const [ number, setNumber ] = useState(0);
    const increase = () => {
        setNumber(number + 1);
    }
    const decrease = () => {
        setNumber(number - 2);
    }

    const { value } = props;

  return (
    <div>
        <h1>함수형 컴포넌트</h1>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-2</button>
    </div>
  )
}

export default Counter