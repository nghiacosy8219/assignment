import React, { useState } from 'react'
import "./studentstyle.css"
import InputField from './InputField'

function FormStudents() {
    const [value, setValue] = useState()
    const [show, setShow] = useState([])
    const handleChange = (e) => {
        setValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      setShow((pre) => [...pre,value])
    }
    const handleDelete = (e) => {
      let x = e.target.getAttribute("remote")
      setShow(show.filter(item => item.phone !== x))
    }
  return (
    <div className='container'>
        <h1>Student List</h1>
        <form onSubmit={handleSubmit}>
        <InputField label="Name" name="name" type = "text" handleChange={handleChange}/>
        <InputField label="Phone" name="phone" type = "number" handleChange={handleChange} />
        <InputField label="Email" name="email" type = "email" handleChange={handleChange}/>
        <InputField type = "submit" />
        </form>
        <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {
          show.map(item => (
            <tr>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td><button remote={item.phone} onClick={handleDelete}>Xóa</button><button>Sửa</button></td>
            </tr>
          ))
        }
        </table>

    </div>
  )
}

export default FormStudents