import React from 'react'
import './welcome.css'

import { BiSearchAlt2 } from 'react-icons/bi';
import { VscBell } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Welcome() {
  return (
    <div>
         <div className='upper_part'>
            <div className='welcome_message'>Welcome back,</div>

            <div className='icons_header'>
                <div className='icon_topheader'><BiSearchAlt2 size={20}/></div>
                <div className='icon_topheader'><VscBell size={20}/></div>
                <div className='login_info_icon'>
                    <CgProfile size={25}/>
                    <div></div>
                    <div><MdKeyboardArrowDown/></div>
                </div>
            </div>
        </div>
        <div className='little_title'>Here's what's happening with your store today</div>
    </div>
   
  )
}

export default Welcome