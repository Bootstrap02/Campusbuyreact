import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import {Firstheader} from '../Components/Subheaders';
import {Minifooter} from '../Components/Subheaders';

export const Signup = ()=> {
return(
<div className='container mb-[4rem]'>
<div className='text-black mt-3  max-lg:hidden'><Firstheader/></div>
<div className='flex justify-between p-2'>
<div className='flex items-center  max-lg:flex-col'>
  <NavLink to='/'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={70} alt='logo'/></NavLink>
<h2><strong className='text-[#363D94] text-xl'>Campusbuy</strong></h2>
</div>
<div className='underline text-blue-500'><Link  to='/help'>Send us a Message</Link></div>

</div>

<div className='flex flex-col gap-4 justify-center items-center'>
<div className='text-center'>
<h1 className='text-4xl text-bold my-3'>Welcome</h1>
<p>Create a Campusbuy account or <NavLink to='/signin' className='underline text-blue-500'>Sign in to your Account</NavLink></p>
</div>
<div className='w-[50%] max-lg:w-[100%]'>
<form className='p-2 border border-gray-400  w-full flex flex-col gap-5'>
    <div className='flex justify-between'>
        <label htmlFor='Email Address'> Email Address</label>
        <input type='text' className='p-2 border w-[60%] border-gray-400' placeholder='Email Address'/>
    </div>
    <div className='flex justify-between'>
        <label htmlFor='Password'> Password</label>
        <input type='password' className='p-2 w-[60%] border border-gray-400' placeholder='Password'/>
    </div>
    <div className='flex justify-between'>
        <label htmlFor='Phone Number'> Phone Number</label>
        <input type='text' className='p-2 w-[60%] border border-gray-400' placeholder='Phone Number'/>
    </div>
    <div className='flex justify-between'>
        <label htmlFor='Address'> Address</label>
        <input type='text' className='p-2 w-[60%] border border-gray-400' placeholder='Address'/>
    </div>
    
    <button className='p-2 inline-block w-full text-white bg-[#141052]'>Submit</button>
</form>
</div>
</div>
<div> <Minifooter/></div>
</div>
)
}


export const Signin = ()=> {
   return(
    <div className='container'>
         <div className='text-black mt-3 max-lg:hidden'><Firstheader/></div>
        <div className='flex justify-between p-2'>
        <div className='flex  items-center max-lg:flex-col'>
          <NavLink to='/'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={70} alt='logo'/></NavLink>
       <h2><strong className='text-[#363D94] text-xl'>Campusbuy</strong></h2>
        </div>
        <div className='underline text-blue-500'><Link  to='/help'>Send us a Message</Link></div>
    
        </div>
    
        <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='text-center'>
        <h1 className='text-4xl text-bold my-3'>Welcome</h1>
        <p>Sign in to your Campusbuy Account or <NavLink  to= '/signup' className='underline text-blue-500'>Create an Account</NavLink></p>
        </div>
       <div className='w-[50%] max-lg:w-[100%]'>
       <form className='p-2 border border-gray-400  w-full flex flex-col gap-5'>
            <div className='flex justify-between'>
                <label htmlFor='Email Address'> Email Address</label>
                <input type='text' className='p-2 border w-[60%] border-gray-400' placeholder='Email Address'/>
            </div>
            <div className='flex justify-between'>
                <label htmlFor='Password'> Password</label>
                <input type='password' className='p-2 w-[60%] border border-gray-400' placeholder='Password'/>
            </div>
            
            <button className='p-2 inline-block w-full text-white bg-[#141052]'>Submit</button>
        </form>
       </div>
        </div>
        <div> <Minifooter/></div>
    </div>
   )

}