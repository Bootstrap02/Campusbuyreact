import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import { MdLocalShipping } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { TbPremiumRights } from "react-icons/tb";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";
import Select from 'react-select';
import Navbar from './Navbar';
import {Postproduct} from './Postproduct'





const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [modals, setModals] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

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
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }

    setPrevScrollPos(currentScrollPos);
  };


  const [universities, setUniversities] = useState([]);
  const API_KEY = 'https://campusbuy.onrender.com/getuniversities'


  const dispatch = useDispatch()
  const getSchools = (university)=> dispatch({ type:'GET_UNIVERSITIES', schools : university });
  const allUniversities= useSelector(state => state.schools.universities)



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(()=>{
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(API_KEY);
        setUniversities(response.data);
        getSchools(response.data); // Pass the updated data directly
      } catch (error) {
        console.error('Error fetching universities:', error);
        // Handle error as needed
      }
    };
  
    fetchUniversities();
  },[])
 
  const accessedToken =   JSON.parse(localStorage.getItem('userData'));

  const Signout= async() => {
    try{
     await localStorage.removeItem('userData');
      navigate('/');

    }catch (error){
      console.error('Error signing out Account:', error);
    }
    
  }

  const loginOrOut = () =>{
    if(accessedToken){
      Signout();
  }else{
    navigate('/signin')
  }
}


const Loggedin= async() => {
  try{
    navigate(`/mainpage/${accessedToken.id}`);

  }catch (error){
    console.error('Error navigating to Your Account:', error);
  }
  
}

  const loggedinOrOut = () =>{
    if(accessedToken){
      Loggedin();
  }else{
    navigate('/signin')
  }
}

  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const sendWishlist = (activePage) => dispatch({ type: 'GET_ACTIVEPAGE', activePage });
  const sendNotifications = (activePage) => dispatch({ type: 'GET_ACTIVEPAGE', activePage });
  const sendAccount = (activePage) => dispatch({ type: 'GET_ACTIVEPAGE', activePage });
  const sendMessages = (activePage) => dispatch({ type: 'GET_ACTIVEPAGE', activePage });
  const sendYourproducts = (activePage) => dispatch({ type: 'GET_ACTIVEPAGE', activePage });
  const sendCallbacks = (activePage) => dispatch({ type: 'GET_ACTIVEPAGE', activePage });

  
  return (
    <>
    <header className='w-[100%] header-top-strip py-3 max-lg:hidden'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3 text-center'>
            <NavLink to='/firstpage' className='bg-secondary p-1 flex gap-2 justify-center items-center mx-4'>
            <MdLocalShipping className='header-react-icons'/><span  className=' text-white'>  Logistics</span></NavLink>
            <p className='text-secondary mb-0'>Let's bring your order to your doorpost</p>
          </div>
          <div className='col-3 text-center'>
            <NavLink to='/' className='bg-secondary p-1 flex gap-2 justify-center items-center mx-4'>
            <MdPayments className='header-react-icons'/>  <span  className=' text-white'>  Excro Payment</span></NavLink>
            <p className='text-secondary mb-0'>Pay for your order with ease</p>
          </div>
          <div className='col-3 text-center'>
            <NavLink to='/' className='bg-secondary p-1 flex gap-2 justify-center items-center mx-4'>
            <TbPremiumRights className='header-react-icons' />  <span  className=' text-white'>  Premium Services</span></NavLink>
            <p className='text-secondary mb-0'>Show your Products to more Customers</p>
          </div>
          <div className='col-md-3 search-for-schools'>
          <div className="search-container flex w-[100%]">
      <Select className='w-[100%]  rounded-md border-2 border-black'
        value={selectedOption}
        onChange={handleChange}
        options={allUniversities.map((university) => ({
          value: university.fullname,
          label: university.fullname,
        }))}
        placeholder="Search for your school"
        isClearable
      />
<NavLink to='/home'><button className="search-button p-2 bg-[#FFD700] border-2 rounded-md border-black" onClick={() => console.log(selectedOption)}>Search</button>
</NavLink></div>
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
      <RiAccountPinBoxFill className='header-react-icons' />
      <span className='text-white'> Account</span>
    </div>
  </button>
  <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          <li>
            <a
              className='dropdown-item'
              
              onClick={() => {
                loggedinOrOut()
                sendAccount('Account');
                console.log('Clicked Account');
              }}
              >
              Account
            </a>
          </li>
          <li>
            <a
              className='dropdown-item'
              
              onClick={() => { loggedinOrOut() 
                sendMessages('Messages')}}
            >
              Messages
            </a>
          </li>
          <li>
            <a
              className='dropdown-item'
              
              onClick={() => { loggedinOrOut() 
                sendYourproducts('Yourproducts')}}
            >
              Your Products
            </a>
          </li>
          <li>
            <a
              className='dropdown-item'
              
              onClick={() => {  loggedinOrOut() 
                sendCallbacks('Callbacks')}}
            >
              Callbacks
            </a>
          </li>
          <li>
            <a onClick={loginOrOut} className='dropdown-item'>
             {accessedToken ? 'Sign Out' : 'Sign Up/Sign In'}
            </a>
          </li>
          

        </ul>
      </div>
      <div className='col-3'>
        <a
          
          className='bg-secondary p-1 flex gap-2 justify-center items-center mx-4'
          onClick={() => {  loggedinOrOut() 
            sendWishlist('Wishlist')}}
        >
          <FaHeart className='header-react-icons' />
          <span className=' text-white'> Wishlist</span>
        </a>
      </div>
      <div className='col-3'>
        <a
          
          className='bg-secondary p-1 flex gap-2 justify-center items-center'
           onClick={() =>{ loggedinOrOut()
            sendNotifications('Notifications')
           }}
         
        >
          <IoMdNotifications className='header-react-icons' />
          <span className=' text-white'> Notification</span>
        </a>
      </div>
      <div className='col-3'>
        <NavLink>
          <button className='p-2 sell-product-btn btn-warning text-black' onClick={openModals}>Sell Something</button>
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
        <NavLink to='/faqs'><span  className=' text-white'>FAQs</span></NavLink>
      </div>
    </div>
   </div>
   </header> 
   <header className='header-mobile w-[100%] hidden max-lg:block'>
    <Navbar/>
    </header>  
    <div className='sell-product-modal w-[100%]'>
              {modals && <Postproduct closeModals={closeModals} openSuccessMessage={openSuccessMessage}/>}

              {successMessage && (
                        <div className=" max-lg:w-[300px] mt-3 sell-product-response">
                          <div className="bg-black rounded-lg flex flex-col justify-center items-center max-lg:p-2 max-lg:m-2 ">
                            <div className="flex flex-col justify-center w-full  items-center rounded-lg border-2 border-[#B59410] max-lg:p-4">
                              <button className="bg-white ml-auto" onClick={closeSuccessMessage}>
                              <MdCancel className="ml-auto w-[30px] h-[30px] bg-black text-white" />
                              </button>
                              <p className="text-white font-black text-center text-xl mb-2">{successMessage}</p>
                              <div><IoMdCloudDone className='sent-message-done' /></div>
                            </div>
                          </div>
                        </div>
                      )}

            </div>
    </>
  )
}

export default Header