import React, { useState } from 'react'

function Car() {
    const [carList, setCarList] = useState("Mercedes s600")
    const [colorList, setColorList] = useState("Black")
  return (
    <div>
        <h1>Select your car</h1>
        <div>
        <span>Select a car</span>
        <select name="" onChange={(e) => setCarList(e.target.value)}>
            <option value="Mercedes s600">Mercedes s600</option>
            <option value="Toyota">Toyota</option>
            <option value="Audi">Audi</option>
        </select>
        </div>
        <div>
        <span>Select a color</span>
        <select name="" onChange={(e) => setColorList(e.target.value)}>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
        </select>
        </div>
        <h3>You select a {carList} - {colorList} </h3>
    </div>
  )
}

export default Car