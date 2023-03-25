import React from 'react'

function Textarea({placeholder,label,}) {
  return (
    <div className='text_area_class'>
            <label htmlFor="" className='text_area_label'>{label}</label>
            <textarea className='text_area_for_discribtion' placeholder={placeholder} cols="30" rows="10"></textarea>
    </div>
  )
}

export default Textarea