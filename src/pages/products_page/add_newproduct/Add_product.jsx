import React from 'react'
import './Add_product.css'
import Sidebar from '../../sidebar/Sidebar'
import Input from '../../../components/inputs/Input'


function Add_product() {


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
                    <div>Upload your product image</div>
                
                    <div className='upload_cont' onClick={click_changer}>
                        <div className='upload_title'>Upload image</div>
                        <input type="file" className='input_files' />
                    </div>
                </div>
                    <div>
                        <div>
                            <Input label={"product title"}/>
                        </div>
                    </div>
            </div>
      
      </div>
      )
    }

export default Add_product