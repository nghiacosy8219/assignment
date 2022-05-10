import React, { useState } from 'react'

function Conditional() {
    const [isExpand, setExpand] = useState(false)
    const handleClick = () => {
        setExpand(!isExpand)
    }
  return (
    <div>
        <h1>Conditional Render</h1>
        {isExpand ? 
        <button onClick={handleClick}>Xem giới thiệu</button>
        :
        <>
        <button onClick={handleClick}>Đóng giới thiệu</button>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa commodi voluptates porro officiis incidunt ab iusto ad alias inventore hic aut ratione numquam nihil dicta odit ducimus quia, accusantium quibusdam!</p>
        </>
        }
    </div>
  )
}

export default Conditional