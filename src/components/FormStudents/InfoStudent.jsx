import React from 'react'

function InfoStudent(props) {
    const {name} = {props}
  return (
    <div>
        <li>{name}</li>
    </div>
  )
}

export default InfoStudent