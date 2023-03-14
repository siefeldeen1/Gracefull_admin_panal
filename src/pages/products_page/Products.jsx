import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import './Prodcuts.css'
import { useNavigate } from "react-router-dom";


function Products() {
    const navigate = useNavigate();
    return (
    <div style={{display:"flex"}}>
        <Sidebar/>

        <div className='nothing_big_cont'>
                <div className='nothing_title'>You currently have no products to show at the moment</div>
                <div className='nothing_subtitle'>You can add your new products from here</div>
                <button className='nothing_create_btn' onClick={()=>{navigate('/Products/add_product')}}>Create a new product</button>
        </div>
    </div>
  )
}

export default Products