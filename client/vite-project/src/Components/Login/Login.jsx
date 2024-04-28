import React from 'react'
import './Login.css'
import video from '../../LoginAssets/video1.mp4';
import logo from '../../LoginAssets/logo.png';
import { Link } from 'react-router-dom';
import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  return (
<div className='loginPage flex'>
    <div className='container flex'>

{/* video div */}
     <div className='videoDiv'>
        <video src={video}autoPlay muted loop > </video>
        <div className='textDiv'>
         <h2 className='title'> Create and Sell Extraordinary Products</h2>
         <p>Adopt the peace of nature!</p>
        </div>
        <div className='footerDiv flex' >
            <span className='text' > Don't have an account?</span>
            <Link to={'/register'}>
            <button className='btn'>Sign Up</button>
            </Link>
        </div>
     </div>

     <div className='formDiv flex'>
        <div className=' headerDiv'>
            <img src={logo} alt='logo image'></img>
            <h3>Welcome back!</h3>
        </div>

        <form action=''className='form grid'>

<span className='showMassage'> Login status will go here</span>
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
  <span> Login</span>

<AiOutlineSwapRight className='icon'/>
</button>
<a href="/Dashboard">dashboard</a>
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

export default Login