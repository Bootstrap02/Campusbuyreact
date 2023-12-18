import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";


import {BsSearch} from 'react-icons/bs';
import { FaHeart } from "react-icons/fa";

export const Firstheader = ()=> {
   return(
    <>
     <header className='first-header  w-[100%] max-lg:hidden '>
   
    <div className='flex justify-center gap-3  '>
      <div className='mx-2 '>
        <NavLink to='/'><span  className=' text-white'>Home</span></NavLink>
      </div>
      <div className='mx-2 '>
        <NavLink to='/about'><span  className=' text-white'>About us</span></NavLink>
      </div>
      <div className='mx-2 '>
        <NavLink to='/contact'><span  className=' text-white'>Contact</span></NavLink>
      </div>
      <div className='mx-2 '>
        <NavLink to='/help'><span  className=' text-white'>Help</span></NavLink>
      </div>
    </div>
  
   </header> 
    </>
   )
}

export const Miniheader = ()=> {
   
   
  return(
    <>
    <header className=' w-[100%] mini-header-upper py-3 max-lg:hidden '>
<div className=''>
  <div className='row justify-between'>
    <div className='col-2'>
      <Link><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={70} alt='logo'/></Link>
    </div>
    <div className='col-4'>
    <div className="input-group mb-3">
<input type="text" className="form-control py-2" placeholder="Search for Product here..." aria-label="Search for Product here..." aria-describedby="basic-addon2"/>
<span className="input-group-text p-3" id="basic-addon2">
<BsSearch className='fs-6'/></span>
</div>
</div>

    <div className='col-6'>
      <div className='row '>

      <div className='col-3 dropdown'>
    <button
      className='btn btn-secondary dropdown-toggle p-1'
      type='button'
      id='dropdownMenuButton1'
      data-bs-toggle='dropdown'
      aria-expanded='false'
    >
      <div className='flex gap-2 justify-center items-center'>
        <RiAccountPinBoxFill className='header-react-icons' />{' '}
        <span className='text-white'> Account</span>
      </div>
    </button>
    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
      <li>
        <NavLink
          className='dropdown-item'
          to='/mainpage'
          
          >
          Account
        </NavLink>
      </li>
      <li>
        <NavLink
          className='dropdown-item'
          to='/mainpage/messages'
          
        >
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink
          className='dropdown-item'
          to='/mainpage/callbacks'
          
        >
          Callbacks
        </NavLink>
      </li>
      <li>
        <Link className='dropdown-item' to='#'>
          Sign up/Sign in
        </Link>
      </li>
    </ul>
  </div>
  <div className='col-3'>
    <NavLink
      to='/mainpage'
      className='bg-secondary p-1 flex gap-2 justify-center items-center mx-4'
      
    >
      <FaHeart className='header-react-icons' />
      <span className=' text-white'> Wishlist</span>
    </NavLink>
  </div>
  <div className='col-3'>
    <NavLink
      to='/mainpage'
      className='bg-secondary p-1 flex gap-2 justify-center items-center'
     
     
    >
      <IoMdNotifications className='header-react-icons' />
      <span className=' text-white'> Notification</span>
    </NavLink>
  </div>
  <div className='col-3'>
    <NavLink to='/postproduct'>
      <button className='p-2 sell-product-btn btn-warning text-black'>Sell Something</button>
    </NavLink>
  </div>
        
       
      </div>
    </div>
  </div>
</div>
</header>
<header className='mini-header-bottom py-3  mb-[6rem] max-lg:hidden'>
<div className=''>
<div className='row justify-content-center'>
  <div className='col-2'>
    <NavLink to='/'><span  className=' text-white'>Home</span></NavLink>
  </div>
  <div className='col-2'>
    <NavLink to='/about'><span  className=' text-white'>About us</span></NavLink>
  </div>
  <div className='col-2'>
    <NavLink to='/contact'><span  className=' text-white'>Contact</span></NavLink>
  </div>
  <div className='col-2'>
    <NavLink to='/help'><span  className=' text-white'>Help</span></NavLink>
  </div>
</div>
</div>
</header> 
</>
  )
}

export const Minifooter= ()=> {
  return(
    <>
    <footer className='py-4 max-lg:hidden'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>
              &copy; {new Date().getFullYear()}; Powered by Campusbuy.Inc(" ")
            </p>
          </div>
        </div>
      </div>
    </footer>
    <footer className='mobile-footer w-[100%] hidden max-lg:block bg-[#232f3e] shadow-md shadow-[#3b4149]'>
    <div className="upper-mobile-links flex gap-2 m-2 p-2 justify-between items-center">
            <div><Link className='flex  flex-col gap-1 justify-center items-center'><MdHome className='mobile-footer-react-icons'/>  <span  className='text-white text-[10px]'>  Home</span></Link></div>           
            <div><Link className='flex  flex-col gap-1 justify-center items-center'><BsFillQuestionCircleFill  className='mobile-footer-react-icons'/>  <span  className='text-white text-[10px]'>  Help</span></Link></div>
            <div><Link className='flex  flex-col gap-1 justify-center items-center'><TbWorld className='mobile-footer-react-icons'/>  <span  className='text-white text-[10px]'>  About</span></Link></div>
            <div><Link className='flex  flex-col gap-1 justify-center items-center'><MdAddIcCall  className='mobile-footer-react-icons'/>  <span  className='text-white text-[10px]'>  Contact</span></Link></div>
            </div>
    </footer>
  </>
  )
}