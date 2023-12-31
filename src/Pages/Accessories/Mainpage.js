import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Miniheader, Minifooter } from '../../Components/Subheaders';
import Account from './Account';
import Wishlist from './Wishlist';
import Notifications from './Notifications';
import Messages from './Messages';
import Callbacks from './Callbacks';
import Yourproducts from './Yourproducts';

const Mainpage = () => {
  const [activeComponent, setActiveComponent] = useState(); // Initial active component
  


  const renderComponent = () => {
    switch (activeComponent) {
      case 'Account':
        return <Account />;
      case 'Wishlist':
        return <Wishlist />;
      case 'Notifications':
        return <Notifications />;
      case 'Messages':
        return <Messages />;
      case 'Yourproducts':
        return <Yourproducts />;
      case 'Callbacks':
        return <Callbacks />;
      default:
        return null;
    }
  };
  


  const handleNavLinkClick = (componentName) => {
    setActiveComponent(componentName);
  };

   const returnedPage = useSelector(state => state.activePage.activePage);

    // Use the result in a meaningful way
    const navigate = useNavigate();
   

  useEffect(() => {
    // Set the active component when the returnedPage changes
    setActiveComponent(returnedPage);
  }, [returnedPage]);

  const { id } = useParams();

  useEffect(() => {
    // Check if the userId matches the id from useParams
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.id) {
      // Use the stored user data id as a parameter for the route
      navigate(`/mainpage/${storedUserData.id}`);
    }
  }, [navigate]);
  
    
  

  
  return (
    <div className='text-center container'>
      <div className=''><Miniheader /></div>
      <div className='container'>
        <div className='row max-lg:hidden '>
          <div className='col-2 m-2 flex flex-col gap-2 '>
            <NavLink
              className='m-2 p-2 border border-gray-400   '
              onClick={() => handleNavLinkClick('Account')}
              activeClassName='active-link'
            >
              Account
            </NavLink>
            <NavLink
              className='m-2 p-2 border border-gray-400  '
              onClick={() => handleNavLinkClick('Wishlist')}
              activeClassName='active-link'
            >
              Wishlist
            </NavLink>
            <NavLink
              className='m-2 p-2 border border-gray-400  '
              onClick={() => handleNavLinkClick('Notifications')}
              activeClassName='active-link'
            >
              Notifications
            </NavLink>
            <NavLink
              className='m-2 p-2 border border-gray-400  '
              onClick={() => handleNavLinkClick('Messages')}
              activeClassName='active-link'
            >
              Messages
            </NavLink>
            <NavLink
              className='m-2 p-2 border border-gray-400  '
              onClick={() => handleNavLinkClick('Yourproducts')}
              activeClassName='active-link'
            >
              Your Products
            </NavLink>
            <NavLink
              className='m-2 p-2 border border-gray-400  '
              onClick={() => handleNavLinkClick('Callbacks')}
              activeClassName='active-link'
            >
              Callback Requests
            </NavLink>
          </div>
          <div className='col-9 m-2 shadow-md border border-gray-400'>{renderComponent()}</div>
        </div>
      </div>
      <div className='w-[100%] hidden max-lg:block'>
        <div className='row '>
          <div className='w-[30%]  flex flex-col gap-2 justify-start items-center text-sm '>
            <NavLink
              className=' border border-gray-400 text-center p-2 '
              onClick={() => handleNavLinkClick('Account')}
              activeClassName='active-link'
            >
              Account
            </NavLink>
            <NavLink
              className=' border border-gray-400 text-center p-2  '
              onClick={() => handleNavLinkClick('Wishlist')}
              activeClassName='active-link'
            >
              Wishlist
            </NavLink>
            <NavLink
              className=' border border-gray-400 text-center p-2  '
              onClick={() => handleNavLinkClick('Notifications')}
              activeClassName='active-link'
            >
              Notifications
            </NavLink>
            <NavLink
              className=' border border-gray-400 text-center p-2  '
              onClick={() => handleNavLinkClick('Messages')}
              activeClassName='active-link'
            >
              Messages
            </NavLink>
            <NavLink
              className=' border border-gray-400 text-center p-2  '
              onClick={() => handleNavLinkClick('Yourproducts')}
              activeClassName='active-link'
            >
              Your Products
            </NavLink>
            <NavLink
              className=' border border-gray-400 text-center p-2  '
              onClick={() => handleNavLinkClick('Callbacks')}
              activeClassName='active-link'
            >
              Callbacks
            </NavLink>
          </div>
          <div className='w-[70%] shadow-md border border-gray-400'>{renderComponent()}</div>
        </div>
      </div>
      <div className=''><Minifooter /></div>
    </div>
  );
};

export default Mainpage;
