import React from 'react'

function InputField(props) {
    const {type, label, handleChange, name} = props

  return (
    <div>
        <label>{label}</label>
        <input name={name} type={type} onChange={handleChange} />
    </div>
  )
}

export default InputField