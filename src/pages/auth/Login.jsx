import React from 'react'
import Input2 from '../../components/inputs/Input2'
import './css/Login.css'

function Login() {
  return (
   <div className='big_cont_background_login'> 

        <div className='login_body'>
            <div className='title_login'>Login </div>
            <form onSubmit={()=>{alert('submittted')}} className='form_class'>
                <Input2 label={"Email"} placeholder={"Please enter your email"}  type={"email"} pattern={'/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'} />
                <Input2 label={"Password"} placeholder={"Please enter your Password"} type={"password"}/>
                <div className='btn_cont_login'><button type="" className='login_btn_class' >login</button></div>
            </form>
          
        </div>

    </div>
  )
}

export default Login