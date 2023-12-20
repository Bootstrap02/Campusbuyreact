import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";
import {Postproduct} from './Postproduct';
import useActiveComponent from '../Hooks/UseActiveComponent';




const Navbar = () => {
  const { activeComponent, setActive } = useActiveComponent();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [modals, setModals] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const openSuccessMessage = () => {
    setSuccessMessage('Product posted !');
  };

  const closeSuccessMessage = () => {
    setSuccessMessage(false);
  };

  const openModals = () => {
    setModals(true);
  };

  const closeModals = () => {
    setModals(false);
  };


  const handleScroll = () => {
    const currentScrollPos = document.documentElement.scrollTop;

    if (currentScrollPos > prevScrollPos) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);


  return (
    <div className=" w-[100%] ">
        <header className='upper-mobile-nav w-[100%] flex items-center justify-between shadow-md shadow-[#3b4149] bg-[#131921]'>
            <div className="mobile-logo  px-2 ">
            <NavLink to='#'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={80} alt='logo'/></NavLink>
            </div>
            <div className="upper-mobile-NavLinks flex gap-2 px-2">
           
           
           
           
            <div className= 'dropdown mt-[-0.38rem]'>
        <button
          className=' btn btn-secondary dropdown-toggle  dropdown-toggle-no-caret border-none'
          type='button'
          id='dropdownMenuButton1'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <div className='flex  flex-col gap-1 justify-center items-center'>
            <RiAccountPinBoxFill className='mobile-header-react-icons' />
            <span className='text-white text-[8px]'> Account</span>
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
              to='/mainpage'
              onClick={() => setActive('Messages')}
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              className='dropdown-item'
              to='/mainpage'
              onClick={() => setActive('Callbacks')}
            >
              Callbacks
            </NavLink>
          </li>
          <li>
            <NavLink to='signin' className='dropdown-item'>
              Sign up/Sign in
            </NavLink>
          </li>
        </ul>
      </div>
            
            
            
            
            
            
            
            <div><NavLink className='flex  flex-col gap-1 justify-center items-center' to='/mainpage'><FaHeart className='mobile-header-react-icons'/>  <span  className='text-white text-[8px]'>  Wishlist</span></NavLink></div>
            <div><NavLink className='flex  flex-col gap-1 justify-center items-center' to='/mainpage'><IoMdNotifications className='mobile-header-react-icons'/>  <span  className='text-white text-[8px]'>  Notification</span></NavLink></div>
            <div><NavLink className='flex  flex-col gap-1 justify-center items-center'  to='/about'><MdOutlineHelp  className='mobile-header-react-icons'/>  <span  className='text-white text-[8px]'>  Help</span></NavLink></div>
            </div>
        </header>
       <header
        className={`middle-mobile-nav w-[100%] bg-[#232f3e] shadow-md shadow-[#3b4149] ${
          scrollDirection === "down" ? "scrolled-down" : "scrolled-up"
        }`}
      >
        <form className="mobile-search-schools m-2 p-2 flex flex-col gap-3">
            <div>
            <input type="text" placeholder="Search for your product. eg. Laptops" className="border-none rounded-sm w-full my-2 p-2"/>
            <div class="input-group my-2">
  <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Search for  school. eg. unilag"/>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='text-white'>Dropdown</span></button>
  <ul class="dropdown-menu dropdown-menu-end" style={{ zIndex: 3000 }}>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li class="dropdown-divider"> <hr/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
            <button className="mobile-submit-button rounded-sm p-2 bg-green-700 border">Search</button>
            </div>
        </form>
        <NavLink  className='mobile-sell-product-button'><button onClick={openModals} className='p-2 sell-product-btn btn-warning   text-black'>Sell Something</button></NavLink>
      </header>
      
      <div className='sell-product-modal w-[100%]'>
              {modals && <Postproduct closeModals={closeModals} openSuccessMessage={openSuccessMessage}/>}

              {successMessage && (
                        <div className="container  mt-3 sell-product-response">
                          <div className="bg-black rounded-lg flex flex-col justify-center items-center max-lg:p-2 max-lg:m-2 ">
                            <div className="flex flex-col justify-center w-full  items-center rounded-lg border-2 border-[#B59410] max-lg:p-4">
                              <button className="bg-white ml-auto" onClick={closeSuccessMessage}>
                              <MdCancel className="ml-auto w-[20px] h-[20px] bg-black text-white" />
                              </button>
                              <p className="text-white font-black text-center text-xl mb-2">{successMessage}</p>
                              <div><IoMdCloudDone className='sent-message-done' /></div>
                            </div>
                          </div>
                        </div>
                      )}
   </div>
   
    </div>
  );
};

export default Navbar;
