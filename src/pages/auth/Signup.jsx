import React from 'react'
import Input2 from '../../components/inputs/Input2'
import './css/Signup.css'


function Signup() {
  return (
    <div className='big_cont_background_signup'> 

    <div className='signup_body'>
        <div className='title_signup'>Sign UP </div>
        <form onSubmit={()=>{alert('submittted')}} className='form_class'>
            <Input2 label={"Email"} placeholder={"Please enter your email"}  type={"email"} pattern={'/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'} />
            <Input2 label={"Password"} placeholder={"Please enter your Password"} type={"password"}/>
            <Input2 label={"Confirm your Password"} placeholder={"Confirm your Password"} type={"password"}/>
            <div className='btn_cont_signup'><button type="" className='signup_btn_class' >Sign Up</button></div>
        </form>
      
    </div>

</div>
  )
}

export default Signup