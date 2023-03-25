import React, { useState } from 'react'
import Input2 from '../../components/inputs/Input2'
import './css/Signup.css'
import { FcGoogle } from 'react-icons/fc';
import { ImGoogle } from 'react-icons/im';
import { useNavigate } from "react-router-dom";


function Test_sign() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState('')
  const [confrim_pass, setconfrim_pass] = useState('')
  const [pass_valid, setpass_valid] = useState(true)
  const [confri_vaild, setconfri_vaild] = useState(true)
  const [email_vaild, setemail_vaild] = useState(true)
  const navigate = useNavigate();


  const submit = ()=>{
     if(password.length < 8){
      setpass_valid(false)
     }else if (confrim_pass != password){
      setconfri_vaild(false)
     }else{
        fetch('http://localhost:8082/signup',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                email:email,
                password:password
            })
        }).then((res)=> res.json()).then((data)=>{
            if(data){
                navigate("/")
            }
        })
     }
  }

  const google= ()=>{
    window.open("http://localhost:8082/auth/google", "_self")
   }
  
  return (
    <div className='big_cont_background'> 

    <div className='test_signup_body'>
        
        <form onSubmit={(e)=>{e.preventDefault();submit()}} className='form_class'>
        <div className='upper_part_signip_page'>
                <button className='login_google' onClick={google}>
                    <div class="lock">
                        <FcGoogle size={23} class="icon-unlock"/> 
                        <ImGoogle size={23} color='white' class="icon-lock"/>
                    </div>
                    <div>Login with Google</div>
                </button>

                <div className='hr_sep_line_dev'>
                    <div className='hr_sep_line_text'>or</div>
                    <hr className='hr_sep_line' />
                </div>
        </div>
      
                <div className='input_class_signup_page'>
                <Input2 value={email} onchange={(e)=>{setemail(e.target.value)}} vaild={email_vaild} label={"Email"} placeholder={"Please enter your email"}  type={"email"} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                    <Input2 value={password} onchange={(e)=>{setpassword(e.target.value)}} vaild={pass_valid} messge_err={"Password has to be at least 8 characters"}  label={"Password"} placeholder={"Please enter your Password"} type={"password"}/>
                
                    <div className='login_instead'>
                        <Input2 value={confrim_pass} onchange={(e)=>{setconfrim_pass(e.target.value)}} vaild={confri_vaild} messge_err={"Password isn't matching"} label={"Confirm your Password"} placeholder={"Confirm your Password"} type={"password"}/>
                        <div className='text_login_instead'>Do you already have and account? <span className='span_text_login_instead' onClick={()=>{navigate("/Login")}}>Log in now!</span></div>
                    </div>
                </div>

            <div className='btn_cont_signup'>
              <button type="submit" className='signup_btn_class'  >Sign Up</button>
              </div>
        </form>
      
    </div>

    <div className='TEST_animation'>
        <div class="father-div">
            <div class="cat"></div>
            <div class="dog"></div>   
        </div>
    </div>

</div>
  )

  }


export default Test_sign