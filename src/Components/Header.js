import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

const Header = () => {
  return (
    <>
    <header className='header-top-strip py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <a href='/' className='bg-secondary p-1'>
              <img src='https://res.cloudinary.com/dneejvhch/image/upload/v1701424838/Campusbuy/4796564_wmdvmx.png' width={40}/><span  className=' text-white'>  Logistics</span></a>
            <p className='text-secondary mb-0'>Let's bring your order to your doorpost</p>
          </div>
          <div className='col-3'>
            <a href='/' className='bg-secondary p-1'>
            <img src='https://res.cloudinary.com/dneejvhch/image/upload/v1701243808/Campusbuy/escrow-process_j3s6ij.png' width={40}/>  <span  className=' text-white'>  Excro Payment</span></a>
            <p className='text-secondary mb-0'>Pay for your order with ease</p>
          </div>
          <div className='col-3'>
            <a href='/' className='bg-secondary p-1'>
            <img src='https://res.cloudinary.com/dneejvhch/image/upload/v1701243808/Campusbuy/3306411-200_t0opem.png' width={40}/>  <span  className=' text-white'>  Premium Services</span></a>
            <p className='text-secondary mb-0'>Show your Products to more Customers</p>
          </div>
          <div className='col-md-3'>
            <p className='text-white mb-0'>Search for new School</p>
            <div className="input-group">
  <input type="text" className="form-control py-2" aria-label="Text input with segmented dropdown button" placeholder='eg: Uniben'/>
  <button type="button" className="btn btn-warning text-black btn-outline-secondary">Search</button>
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
          </div>
        </div>
      </div>
    </header>
    <header className='header-upper py-3'>
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

            <div class="col-3 dropdown">
  <button className="btn btn-secondary dropdown-toggle p-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <img  src='https://res.cloudinary.com/dneejvhch/image/upload/v1701243808/Campusbuy/2321232_suthow.png' width={40}/>  <span  classNameName='text-white'>  Account</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item " to="/account">Account</Link></li>
    <li><Link className="dropdown-item " to="/settings">Settings</Link></li>
    <li><Link className="dropdown-item " to="#">Sign up/Sign in</Link></li>
  </ul>
</div>


            <div className='col-3'>
              <NavLink to='/wishlist' className= 'bg-secondary p-1'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1701424839/Campusbuy/wishlist-icon-2048x1952-13b2gake_ygs7lg.png'  width={40}/><span  className=' text-white'>  Wishlist</span></NavLink>
            </div>
            <div className='col-3'>
              <NavLink to='/notification'  className= 'bg-secondary p-1'><img  src='https://res.cloudinary.com/dneejvhch/image/upload/v1701243808/Campusbuy/3119338_lagnju.png'  width={40}/><span  className=' text-white'>  Notification</span></NavLink>
            </div>
            <div className='col-3'>
             <NavLink to='/postproduct'><button className='p-2 sell-product-btn btn-warning text-black'>Sell Something</button></NavLink>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
    </header>
    <header className='header-bottom py-3'>
   <div className='container-xxl'>
    <div className='row justify-content-center'>
      <div className='col-2'>
        <NavLink to='/'><span  className=' text-white'>Home</span></NavLink>
      </div>
      <div className='col-2'>
        <NavLink to='/'><span  className=' text-white'>About us</span></NavLink>
      </div>
      <div className='col-2'>
        <NavLink to='/'><span  className=' text-white'>Contact</span></NavLink>
      </div>
      <div className='col-2'>
        <NavLink to='/'><span  className=' text-white'>Help</span></NavLink>
      </div>
    </div>
   </div>
   </header>   
    </>
  )
}

export default Header