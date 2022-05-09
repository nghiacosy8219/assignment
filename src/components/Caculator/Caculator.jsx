import React, { useState } from 'react'

function Caculator() {
    const [valueInputFirst, setValueInputFirst] = useState(0)
    const [valueInputSecond, setValueInputSecond] = useState(0)
    const [total, setTotal] = useState()
    const caculators = (e,type)=>{
        switch(type) {
            case "+":
                setTotal(+valueInputFirst + +valueInputSecond)
                break
            case "-":
                setTotal(+valueInputFirst - +valueInputSecond)
                break
            case "x":
                setTotal(+valueInputFirst * +valueInputSecond)
                break
            case "/":
                setTotal(+valueInputFirst / +valueInputSecond)
                break
        }
    }
  return (
    <div>
        <div><input type="number" value={valueInputFirst} onChange={(e) => setValueInputFirst(e.target.value)}/></div>
        <div><input type="number" value={valueInputSecond} onChange={(e) => setValueInputSecond(e.target.value)}/></div>
        <div>Result:{total}</div>
        <button onClick={(e) => caculators(e, "+")}>+</button>
        <button onClick={(e) => caculators(e, "-")}>-</button>
        <button onClick={(e) => caculators(e, "x")}>x</button>
        <button onClick={(e) => caculators(e, "/")}>/</button>
    </div>
  )
}

export default Caculator