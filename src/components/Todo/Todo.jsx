import React, { useState } from 'react'

function Todo() {
    const [value, setValue] = useState("")
    const [todo, setTodo] = useState([])
    const handleAddItem = () => {
        setTodo((pre) => [...pre,value])
    }
  return (
    <div>
        <h1>To Do List</h1>
        <input type="text" onChange={(e) => setValue(e.target.value) } />
        <button onClick={handleAddItem}>Add</button>
        {todo.map((item) => (
            <li>{item}</li>
        ))}
    </div>
  )
}

export default Todo