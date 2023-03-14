import React from 'react'
import './Input.css'

function Input({label,placeholder,onchange,value}) {
  return (
    <div className='cont_input'>
        <label htmlFor="">{label}</label>
        <input className='input_class' type="text" value={value} onChange={onchange}  placeholder={placeholder} />
    </div>
  )
}

export default Input