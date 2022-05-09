
import React, { useEffect, useState } from 'react'

function Timer() {
    const [time, setTime] = useState(10)
    useEffect(() => {
        let timer = setInterval(() => {
            setTime(time - 1)
            if(time == 0){
                alert("time's up")
            }
        },1000);
        return () => clearInterval(timer)
    })
  return (
    <div>
        <h1>Count down from {time} </h1>
    </div>
  )
}

export default Timer