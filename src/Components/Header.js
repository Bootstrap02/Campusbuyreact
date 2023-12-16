import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import { MdLocalShipping } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { TbPremiumRights } from "react-icons/tb";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Navbar from './Navbar';
import useActiveComponent from '../Hooks/UseActiveComponent';





const Header = () => {
  const { activeComponent, setActive } = useActiveComponent();
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollPos, setPrevScrollPos] = useState(0);



  const handleScroll = () => {
    const currentScrollPos = document.documentElement.scrollTop;

    if (currentScrollPos > prevScrollPos) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);


  return (
    <>
    <header className='w-[100%] header-top-strip py-3 max-lg:hidden'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3 text-center'>
            <a href='/' className='bg-secondary p-1 flex gap-2 justify-center items-center mx-4'>
            <MdLocalShipping className='header-react-icons'/><span  className=' text-white'>  Logistics</span></a>
            <p className='text-secondary mb-0'>Let's bring your order to your doorpost</p>
          </div>
          <div className='col-3 text-center'>
            <a href='/' className='bg-secondary p-1 flex gap-2 justify-center items-center mx-4'>
            <MdPayments className='header-react-icons'/>  <span  className=' text-white'>  Excro Payment</span></a>
            <p className='text-secondary mb-0'>Pay for your order with ease</p>
          </div>
          <div className='col-3 text-center'>
            <a href='/' className='bg-secondary p-1 flex gap-2 justify-center items-center mx-4'>
            <TbPremiumRights className='header-react-icons' />  <span  className=' text-white'>  Premium Services</span></a>
            <p className='text-secondary mb-0'>Show your Products to more Customers</p>
          </div>
          <div className='col-md-3'>
            <div className="input-group">
  <input type="text" className="form-control py-1" aria-label="Text input with segmented dropdown button" placeholder='eg: Uniben'/>
  <button type="button" className="btn bg-[#FFCA28] text-black btn-outline-secondary">Search</button>
  <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
      <p className='text-white text-center mb-0'>Search for new School</p>
          </div>
        </div>
      </div>
    </header>
    <header className={`header-upper w-[100%] py-3 max-lg:hidden ${scrollDirection === 'down' ? 'scrolled-down' : 'scrolled-up'}`}>
    <div className='container-xxl'>
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
              onClick={() => {
                setActive('Account');
                console.log('Clicked Account');
              }}
              >
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              className='dropdown-item'
              to='/mainpage/messages'
              onClick={() => setActive('Messages')}
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              className='dropdown-item'
              to='/mainpage/callbacks'
              onClick={() => setActive('Callbacks')}
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
          onClick={() => setActive('Wishlist')}
        >
          <FaHeart className='header-react-icons' />
          <span className=' text-white'> Wishlist</span>
        </NavLink>
      </div>
      <div className='col-3'>
        <NavLink
          to='/mainpage'
          className='bg-secondary p-1 flex gap-2 justify-center items-center'
           onClick={() =>{
            setActive('Notifications')
            console.log({activeComponent})
           }}
         
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
    <header className={`header-bottom py-3 w-[100%] mb-[6rem] max-lg:hidden ${scrollDirection === 'down' ? 'scrolled-down' : 'scrolled-up'}`}>
   <div className='container-xxl'>
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
   <header className='header-mobile w-[100%] hidden max-lg:block'>
    <Navbar/>
    </header>  
    </>
  )
}

export default Header