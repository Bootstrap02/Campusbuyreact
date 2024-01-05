import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";
import {Postproduct} from './Postproduct';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import Select from 'react-select';



const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
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


  const [universities, setUniversities] = useState([]);
  const API_KEY = 'https://campusbuy.onrender.com/getuniversities'


  const dispatch = useDispatch()
  const getSchools = (university)=> dispatch({ type:'GET_UNIVERSITIES', schools : university });
  const allUniversities= useSelector(state => state.schools.universities)


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
    <div className=" w-[100%] ">
        <header className='upper-mobile-nav w-[100%] flex items-center justify-between shadow-md shadow-[#3b4149] bg-[#131921]'>
            <div className="mobile-logo  px-2 ">
            <NavLink to='/'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={80} alt='logo'/></NavLink>
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
            
            
            
            
            
            
            
            <div><a  onClick={() => {  
              loggedinOrOut() 
            sendWishlist('Wishlist')}} 
            className='flex  flex-col gap-1 justify-center items-center' ><FaHeart className='mobile-header-react-icons'/>  <span  className='text-white text-[8px]'>  Wishlist</span></a></div>
            <div><a onClick={() =>{ 
              loggedinOrOut()
            sendNotifications('Notifications')
           }} className='flex  flex-col gap-1 justify-center items-center' ><IoMdNotifications className='mobile-header-react-icons'/>  <span  className='text-white text-[8px]'>  Notification</span></a></div>
            <div><NavLink className='flex  flex-col gap-1 justify-center items-center'  to='/faqs'><MdOutlineHelp  className='mobile-header-react-icons'/>  <span  className='text-white text-[8px]'>  FAQs</span></NavLink></div>
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
</div>
            <button className="mobile-submit-button rounded-sm p-2 bg-green-700 border">Search</button>
            </div>
        </form>
        <NavLink  className='mobile-sell-product-button'><button onClick={openModals} className='p-2 sell-product-btn btn-warning   text-black'>Sell Something</button></NavLink>
      </header>
      
      <div className='sell-product-modal w-[100%]'>
              {modals && <Postproduct closeModals={closeModals} openSuccessMessage={openSuccessMessage}/>}

              {successMessage && (
                        <div className="  mt-3 sell-product-response">
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
