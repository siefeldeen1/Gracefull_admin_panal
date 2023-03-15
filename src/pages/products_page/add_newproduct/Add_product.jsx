import React, { useState } from 'react'
import './Add_product.css'
import Sidebar from '../../sidebar/Sidebar'
import Input from '../../../components/inputs/Input'


function Add_product() {
    const [Prodcut_Title, setProdcut_Title] = useState('    ')

    const post = ()=>{
        fetch('http://localhost:8082/',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                product:document.getElementById('product').value,
                mini_title:document.getElementById('mini_title').value,
                description: document.getElementById('description').value,
                skin_Type: document.getElementById('skin_Type').value,
                size: document.getElementById('size').value,
                scent: document.getElementById('scent').value,
                price: document.getElementById('price').value,
                img: document.getElementById('img').value
                }) 
            }).then((res)=> res.json())
        .then((data)=>{
            if(data){
                console.log(data);
                alert("saved")
            }
         })
    }
    
    const click_changer =()=>{
        document.querySelector(".input_files").click()
    }
    
      return (
      <div style={{display:"flex"}}>
            <Sidebar/>

            <div className='form_cont'>
                <div className='upload_img_cont'>
                    <h2>Upload your product image</h2>
                
                    <div className='upload_cont' onClick={click_changer}>
                        <div className='upload_title'>Upload image</div>
                        <input type="file" className='input_files' />
                    </div>
                </div>

                <div className='lower_Part_of_add_prod'>
               
                    <div className='grid_from'>
                      
                            <Input onChange={(e)=>{setProdcut_Title(e.target.value)}} placeholder={'Enter your product name'} label={"Product title"}/>
                            <Input onChange={(e)=>{setProdcut_Title(e.target.value)}} placeholder={'Enter your brand name'} label={"Brand Name"}/>
                            <Input onChange={(e)=>{setProdcut_Title(e.target.value)}} placeholder={'Enter your product colour'} label={"Product Colour"}/>
                            <Input onChange={(e)=>{setProdcut_Title(e.target.value)}} placeholder={'Enter which skin type should use your product'} label={"Skin type"}/>
                            <Input onChange={(e)=>{setProdcut_Title(e.target.value)}} placeholder={'Enter your item form'} label={"Item form"}/>
                            <Input onChange={(e)=>{setProdcut_Title(e.target.value)}} placeholder={'Enter your product size'} label={"Product Size"}/>
                           
                    </div>
                    
                    <div className='text_area_class'>
                        <label htmlFor="">Product Description </label>
                        <textarea className='text_area_for_discribtion' placeholder='Add your product description' cols="30" rows="10"></textarea>
                    </div>
                    <button className='add_prod_btn_class'>Add product</button>
                </div>
            </div>
      
      </div>
      )
    }

export default Add_product