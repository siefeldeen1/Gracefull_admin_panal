import React from 'react'

function Input2({label,placeholder,onchange,value,type,pattern,messge_err,vaild}) {
  return (
    <div className='cont_input'>
        <label htmlFor="">{label}</label>
        <input className='input_class2' type={type} pattern={pattern} value={value} onChange={onchange}  placeholder={placeholder} />
      {vaild &&
        <div>{messge_err}</div>
      }   
    </div>
  )
}

export default Input2