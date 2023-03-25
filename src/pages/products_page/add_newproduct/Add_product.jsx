import React, { useEffect, useState } from 'react'
import './Add_product.css'
import Sidebar from '../../sidebar/Sidebar'
import Input from '../../../components/inputs/Input'
import { HiXMark } from 'react-icons/hi2';

import Upload from '../../../assets/image.png'
import Textarea from '../../../components/textarea/Textarea';

function Add_product() {
    const [Prodcut_Title, setProdcut_Title] = useState('')
    const [uploaded_img, setuploaded_img] = useState(false)

    const [title, settitle] = useState('')
    const [brand_name, setbrand_name] = useState('')
    const [price, setprice] = useState('')
    const [brief, setbrief] = useState('')
    const [color, setcolor] = useState("")
    const [skin_type, setskin_type] = useState('')
    const [form, setform] = useState("")
    const [size, setsize] = useState('')
    const [description, setdescription] = useState("")

    const post = ()=>{

        const selectedFile = document.querySelector(".input_files").files[0];

        const formData = new FormData()
        formData.append("photo",selectedFile)

        console.log(selectedFile);

        fetch("http://localhost:8082/uploadImg",{
            method:"POST",
            body: formData
        }).then((res) => res.json())
        .then((data)=>{
            console.log(data);
        })


        // fetch('http://localhost:8082/addProduct',{
        //     method:"POST",
        //     headers:{"content-type":"application/json"},
        //     body:JSON.stringify({
        //         product:title,
        //         brand_name:brand_name,
        //         price: price,
        //         mini_title:brief,
        //         color:color,
        //         skin_Type: skin_type,
        //         form:form,
        //         size: size,
        //         description: description,
        //         // img: document.getElementById('img').value
        //         }) 
        //     }).then((res)=> res.json())
        // .then((data)=>{
        //     if(data){
        //         console.log(data);
        //         alert("saved")
        //     }
        //  })
    }
    
    useEffect(() => {
        
    }, [])
    
    

    const click_changer =()=>{
        document.querySelector(".input_files").click()
    }
    


    const img_deleter = ()=>{
      
            document.querySelector(".img_preview").remove()
            setuploaded_img(false)
            console.log("asdasd");

       
    }



    function onFileSelected(e) {
        setuploaded_img(true)
        var selectedFile = document.querySelector(".input_files").files;
       
          const arr_nom = Array.from(selectedFile)
        for (let i = 0; i < arr_nom.length ; i++) {
        
          var selectedFile = document.querySelector(".input_files").files[i];
          var reader = new FileReader();
      
          const img = document.createElement("img")
          img.classList.add('img_preview')
        
          reader.onload = function(event) {
            img.src = event.target.result;
          };
       
          reader.readAsDataURL(selectedFile)
 
          const img_cont = document.getElementById("img_cont_id")
          const button_close = document.createElement("div")
      
          img_cont.appendChild(img)
          img_cont.className = "img_cont"

        
        }
        Array.from(document.querySelector(".upload_cont").children).forEach((ele)=>{
      
          console.log(ele);
      
        })

        
      }

      return (
      <div style={{display:"flex"}}>
            <Sidebar/>

            <div className='form_cont'>
                <div className='upload_img_cont'>
                    <h2 style={{paddingLeft:"1.5%",borderBottom:"1px solid #80808026",paddingBottom:"10px"}}>Upload your product image</h2>

                    <input type="file" hidden className='input_files' accept="image/*" onChange={(e)=>{onFileSelected(e)}} />  
                    <div className={!uploaded_img? "upload_cont" :"uploaded_img_cont"} onClick={!uploaded_img? click_changer : undefined}>
                    {!uploaded_img&&
                            <>

                                <img width={150} height={150} src={Upload} alt="" />
                                <div className='upload_title'>Upload Image</div>
                              
                            </>
                    }
                         <div className={!uploaded_img? 'img_cont':'img_cont2'} id='img_cont_id'></div>
                         <div className={!uploaded_img? 'img_cont':'button_close'} onClick={()=>{img_deleter()}} id='img_cont_id'><HiXMark size={23} style={{margin:"0 auto"}}/></div>
                    </div>
                </div>

                <div className='lower_Part_of_add_prod'>
               
                    <div className='grid_from'>
                      
                            <Input value={title} onChange={(e)=>{settitle(e.target.value)}} type={"text"} placeholder={'Enter your product name'} label={"Product Title"}/>
                            <Input value={brand_name} onChange={(e)=>{setbrand_name(e.target.value)}} type={"text"} placeholder={'Enter your brand name'} label={"Brand Name"}/>
                            <Input value={price} onChange={(e)=>{setprice(e.target.value)}} type={"number"} placeholder={'Enter your Product price'} label={"Product Price"}/>
                            <Input value={brief} onChange={(e)=>{setbrief(e.target.value)}} type={"text"} placeholder={'Enter  a brief description for your product'} label={"Brief Description"}/>
                            <Input value={color} onChange={(e)=>{setcolor(e.target.value)}} type={"text"} placeholder={'Enter your product colour'} label={"Product Colour"}/>
                            <Input value={skin_type} onChange={(e)=>{setskin_type(e.target.value)}} type={"text"} placeholder={'Enter which skin type should use your product'} label={"Skin Type"}/>
                            <Input value={form} onChange={(e)=>{setform(e.target.value)}} type={"text"} placeholder={'Enter your item form'} label={"Item Form"}/>
                            <Input value={size} onChange={(e)=>{setsize(e.target.value)}} type={"text"} placeholder={'Enter your product size'} label={"Product Size"}/>
                           
                    </div>
                    
                  <Textarea label={"Product Description "} placeholder={"Add your product description"}/>
                    <button className='add_prod_btn_class' onClick={post}>Add product</button>
                </div>
            </div>
      
      </div>
      )
    }

export default Add_product