import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { useNavigate } from 'react-router-dom'; 
import {Createaccountmodal, Loginmodal} from '../Components/Productmodals';
import axios from 'axios';
import { NavLink, Link} from 'react-router-dom';
import {Firstheader} from '../Components/Subheaders';
import {Minifooter} from '../Components/Subheaders';

export const Signup = ()=> {

const navigate = useNavigate();
const [createAccountModals, setCreateAccountModals] = useState(false);
const CREATE_USER_API_KEY = 'https://campusbuy.onrender.com/createuser';

const openCreateAccountModal = () => {
    setCreateAccountModals(true);
};
const closeCreateAccountModal = () => {
    setCreateAccountModals(false);
};

const createAccount = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData(e.target);
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        const response = await axios.post(CREATE_USER_API_KEY, userData);
        console.log(response.data);
        await openCreateAccountModal();
        // Clear the form
      e.target.reset();

      // Close the modal after 3 seconds
      setTimeout(() => {
        closeCreateAccountModal();
        // Navigate to '/home' after the modal is closed
        navigate('/signin');
      }, 3000);
    } catch (error) {
        console.error('Error creating Account:', error);
        // Handle error as needed
    }
};


return(
<div className='w-[100%] mb-[4rem]'>
<div className='max-lg:hidden'>
<div className='text-black mt-3  '><Firstheader/></div>
<div className='flex justify-between p-2'>
<div className='flex items-center  max-lg:flex-col'>
  <NavLink to='/'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={70} alt='logo'/></NavLink>
<h2><strong className='text-[#363D94] text-xl'>Campusbuy</strong></h2>
</div>
<div className='underline text-blue-500'><Link  to='/contact'>Send us a Message</Link></div>

</div>

<div className='flex flex-col gap-4 justify-center items-center'>
<div className='text-center'>
<h1 className='text-4xl text-bold my-3'>Welcome</h1>
<p>Create a Campusbuy account or <NavLink to='/signin' className='underline text-blue-500'>Sign in to your Account</NavLink></p>
</div>
<div className='w-[50%] max-lg:w-[100%]'>
<form onSubmit={createAccount} className='p-2 border border-gray-400  w-full flex flex-col gap-5'>
    <div className='flex justify-between'>
        <label htmlFor='Firstname'> Firstname</label>
        <input type='text' name='firstname' className='p-2 border w-[60%] border-gray-400' placeholder='Firstname'/>
    </div>
    <div className='flex justify-between'>
        <label htmlFor='Lastname'> Lastname</label>
        <input type='text' name='lastname' className='p-2 border w-[60%] border-gray-400' placeholder='Lastname'/>
    </div>
    <div className='flex justify-between'>
        <label htmlFor='Email Address'> Email Address</label>
        <input type='text' name='email' className='p-2 border w-[60%] border-gray-400' placeholder='Email Address'/>
    </div>
    <div className='flex justify-between'>
        <label htmlFor='Password'> Password</label>
        <input type='password' name='password' className='p-2 w-[60%] border border-gray-400' placeholder='Password'/>
    </div>
    <div className='flex justify-between'>
        <label htmlFor='Phone Number'> Phone Number</label>
        <input type='text' name='mobile' className='p-2 w-[60%] border border-gray-400' placeholder='Phone Number'/>
    </div>
    <div className='flex justify-between'>
        <label htmlFor='Address'> Address</label>
        <input type='text' name='address' className='p-2 w-[60%] border border-gray-400' placeholder='Address'/>
    </div>
    
    <button type="submit" className='p-2 inline-block w-full text-white bg-[#141052]'>Submit</button>
</form>
</div>
</div>
<div className='ml-auto create-account-modal border p-4'>{createAccountModals && <Createaccountmodal/>}</div>
</div>


<div className='hidden max-lg:block'>
<div className='text-black mt-3  '><Firstheader/></div>
<div className='flex justify-between p-2'>
<div className='flex items-center  max-lg:flex-col'>
  <NavLink to='/'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={70} alt='logo'/></NavLink>
<h2><strong className='text-[#363D94] text-xl'>Campusbuy</strong></h2>
</div>
<div className='underline text-blue-500'><Link  to='/contact'>Send us a Message</Link></div>

</div>

<div className='flex flex-col gap-4 justify-center items-center'>
<div className='text-center'>
<h1 className='text-4xl text-bold my-3'>Welcome</h1>
<p>Create a Campusbuy account or <NavLink to='/signin' className='underline text-blue-500'>Sign in to your Account</NavLink></p>
</div>
<div className='w-[50%] max-lg:w-[100%]'>
<form className='p-2 border border-gray-400  w-full flex flex-col gap-5'>
    <div className='flex justify-between'>
        <label htmlFor='Firstname'> Firstname</label>
        <input type='text' className='p-2 border w-[60%] border-gray-400' placeholder='Firstname'/>
    </div>
    <div className='flex justify-between'>
        <label htmlFor='Lastname'> Lastname</label>
        <input type='text' className='p-2 border w-[60%] border-gray-400' placeholder='Lastname'/>
    </div>
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
<div><Minifooter/></div>
</div>


</div>
)
}


export const Signin = ()=> {

const navigate = useNavigate();
const [token, setToken] = useState({})
const [loginModals, setLoginModals] = useState(false);
const LOGIN_API_KEY = 'https://campusbuy.onrender.com/login'

const openLoginModal = () => {
    setLoginModals(true);
};
const closeLoginModal = () => {
    setLoginModals(false);
};

const Login = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData(e.target);
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        const response = await axios.post(LOGIN_API_KEY, userData);
        console.log(response.data);
        setToken(response.data);
        sendAccessToken(response.data);
        await openLoginModal();
        // Clear the form
      e.target.reset();

      // Close the modal after 3 seconds
      setTimeout(() => {
        closeLoginModal();
        // Navigate to '/home' after the modal is closed
        navigate('/home');
      }, 3000);
    } catch (error) {
        console.error('Error Logging in Account:', error);
        // Handle error as needed
    }
};

console.log(token)

const dispatch = useDispatch()
const sendAccessToken = (accessToken)=> dispatch({ type:'SEND_ACCESS_TOKEN', accessToken : accessToken })


   return(
    <div className='w-[100%]'>
        <div className='max-lg:hidden'>
        <div className='text-black mt-3 '><Firstheader/></div>
        <div className='flex justify-between p-2'>
        <div className='flex  items-center max-lg:flex-col'>
          <NavLink to='/'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={70} alt='logo'/></NavLink>
       <h2><strong className='text-[#363D94] text-xl'>Campusbuy</strong></h2>
        </div>
        <div className='underline text-blue-500'><Link  to='/contact'>Send us a Message</Link></div>
    
        </div>
    
        <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='text-center'>
        <h1 className='text-4xl text-bold my-3'>Welcome</h1>
        <p>Sign in to your Campusbuy Account or <NavLink  to= '/signup' className='underline text-blue-500'>Create an Account</NavLink></p>
        </div>
       <div className='w-[50%] max-lg:w-[100%]'>
       <form onSubmit={Login} className='p-2 border border-gray-400  w-full flex flex-col gap-5'>
            <div className='flex justify-between'>
                <label htmlFor='Email Address'> Email Address</label>
                <input type='text' name='email' className='p-2 border w-[60%] border-gray-400' placeholder='Email Address'/>
            </div>
            <div className='flex justify-between'>
                <label htmlFor='Password'> Password</label>
                <input type='password' name='password' className='p-2 w-[60%] border border-gray-400' placeholder='Password'/>
            </div>
            
            <button type='submit' className='p-2 inline-block w-full text-white bg-[#141052]'>Submit</button>
        </form>
       </div>
        </div>
        <div className='ml-auto login-modal border p-4'>{loginModals && <Loginmodal/>}</div>

        </div>

         
        <div className='hidden max-lg:block'>
        <div className='text-black mt-3 '><Firstheader/></div>
        <div className='flex justify-between p-2'>
        <div className='flex  items-center max-lg:flex-col'>
          <NavLink to='/'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={70} alt='logo'/></NavLink>
       <h2><strong className='text-[#363D94] text-xl'>Campusbuy</strong></h2>
        </div>
        <div className='underline text-blue-500'><Link  to='/contact'>Send us a Message</Link></div>
    
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
        <div><Minifooter/></div>
        </div>
    </div>
   )

}