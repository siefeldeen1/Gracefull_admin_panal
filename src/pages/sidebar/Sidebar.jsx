import React from 'react'
import './siderbar.css'

import { BsBarChart } from 'react-icons/bs';
import { IoBagOutline } from 'react-icons/io5';
import { RxPerson } from 'react-icons/rx';
import { RiFileList3Line } from 'react-icons/ri';
import { RiSettingsLine } from 'react-icons/ri';
import { FaGlideG } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";


function Sidebar() {
    const navigate = useNavigate();
  return (
    <div className='side_bar'>

        <div className='side_bar_group'>
                <div className='icons_dev' style={{margin:"0 auto"}} onClick={()=>{navigate('/')}}>
                    <div className='logo_text'>Gracefull</div>
                </div>

            <hr className='hr_class' />

            <div className='nav_icons'> 

                <div className='icons_dev' onClick={()=>{navigate('/')}}>
                    <BsBarChart size={19}/>
                    <div className='icons_text'>Overview</div>
                </div>

                
                <div className='icons_dev' onClick={()=>{navigate('/Products')}}>
                    <IoBagOutline size={19}/>
                    <div className='icons_text'>Products</div>
                </div>

                <div className='icons_dev'>
                    <RxPerson size={19}/>
                    <div className='icons_text'>Customers</div>
                </div>

                <div className='icons_dev'>
                    <RiFileList3Line size={19}/>
                    <div className='icons_text'>Orders</div>
                </div>

                <div className='icons_dev'>
                    <RiSettingsLine size={19}/>
                    <div className='icons_text'>Settings</div>
                </div>

            </div>

        </div>

    


        <div className='side_bar_group'>
        
          <hr className='hr_class' />
            <div className='icons_dev'>
                <div className='icons_text'>Help</div>
            </div>

            <div className='icons_dev'>
                <div className='icons_text'>Contact us</div>
            </div>

            <div className='icons_dev'>
                <BiLogOut size={19}/>
                <div className='icons_text'>Log out</div>
            </div>

        </div>


    </div>
  )
}

export default Sidebar