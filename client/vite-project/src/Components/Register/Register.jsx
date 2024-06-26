

import React from 'react'
import './Register.css'
import video from '../../LoginAssets/video2.mp4';
import logo from '../../LoginAssets/logo.png';
import { Link } from 'react-router-dom';
import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

const Register = () => {
  return (
<div className='registerPage flex'>
    <div className='container flex'>

{/* video div */}
     <div className='videoDiv'>
        <video src={video}autoPlay muted loop > </video>
        <div className='textDiv'>
         <h2 className='title'> Create and Sell Extraordinary Products</h2>
         <p>Adopt the peace of nature!</p>
        </div>
        <div className='footerDiv flex' >
            <span className='text' > Already have an account?</span>
            <Link to={'/login'}>
            <button className='btn'>Login </button>
            </Link>
        </div>
     </div>

     <div className='formDiv flex'>
        <div className=' headerDiv'>
            <img src={logo} alt='logo image'></img>
            <h3>Let Us Know You!</h3>
        </div>

        <form action=''className='form grid'>

{/* <span className='showMassage'> Register status will go here</span> */}
<div className='inputDiv'>
  <label htmlFor='email'>Email</label>
  <div className='input flex'>
<MdMarkEmailRead   className='icon'/>
<input type='Email' id='email' placeholder='Enter Email'></input>
  </div>
</div>
<div className='inputDiv'>
  <label htmlFor='username'>Username</label>
  <div className='input flex'>
<FaUserShield className='icon'/>
<input type='text' id='username' placeholder='Enter Username'></input>
  </div>
</div>
<div className='inputDiv'>
  <label htmlFor='password'>Password</label>
  <div className='input flex'>
<BsFillShieldLockFill  className='icon'/>
<input type='Password' id='password' placeholder='Enter Password'></input>
  </div>
</div>
<button type='submit' className='btn flex'>
  <span> Register</span>
<AiOutlineSwapRight className='icon'/>
</button>
<span className='forgotPassword'>
  Forgot Your Password? <a href=''>Click Here</a>

</span>
        </form>


     </div>

</div>
</div>







    // <div>This is login page
    //     <br />
    //      <a href='/Register'>To Register</a>
    //      <br />
    //     <a href='/Dashboard'>To Dashboard</a>
    // </div>
  )
}

export default Register