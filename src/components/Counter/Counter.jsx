import React, { useState } from 'react'

function Counter() {
    const [counter1, setCounter1] = useState(1)
    const [counter2, setCounter2] = useState(2)
  return (
    <div>
        <span>counter 1 : {counter1} </span>
        <button onClick={() => setCounter1(counter1+1)}>Add1</button>
        <span>counter 2 : {counter2} </span>
        <button onClick={() => setCounter2(counter2+2)}>Add2</button>
    </div>
  )
}

export default Counter