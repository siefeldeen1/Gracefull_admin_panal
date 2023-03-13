import React from 'react'

function Widgets({icon,title_dev_info,main_info,rate_of_change,sells_info}) {
  return (
    <div className='widgit_for_info'>
    <div className='top_part_of_info'>
        <div className='icon_dev_info'>
           {icon}
        </div>
        <div className='title_dev_info'>{title_dev_info}</div>
    </div>

    <div className='main_info' >{main_info}</div>

    <div className='lower_part_of_info'>
        <div className='rate_of_change'>{rate_of_change}</div>
        <div className='sells_info'>{sells_info} this week</div>
    </div>
</div>

  )
}

export default Widgets