import React from 'react'
import Widgets from '../../../../components/widgets/Widgets'
import './info_wid.css'
import { RiShoppingBag2Line } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import { TbArrowBack } from 'react-icons/tb';

function Info_widgits() {
  return (
    <div className='info_big_cont'>
       <Widgets icon={<RiShoppingBag2Line/>} title_dev_info={"Total sales"} main_info={"$0"} 
            rate_of_change={"%0"} sells_info={'+0'}
       />

       <Widgets icon={<BsPeople/>} title_dev_info={"Visitors"} main_info={"$0"} 
            rate_of_change={"%0"} sells_info={'+0'}
       />

       <Widgets icon={<AiOutlineStar/>} title_dev_info={"Total orders"} main_info={"$0"} 
            rate_of_change={"%0"} sells_info={'+0'}
       />

       <Widgets icon={<TbArrowBack/>} title_dev_info={"Refunded"} main_info={"$0"} 
            rate_of_change={"%0"} sells_info={'+0'}
       />

    </div>
  )
}

export default Info_widgits