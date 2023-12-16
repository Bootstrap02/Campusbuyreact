
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Account from './Account';
import Wishlist from './Wishlist';
import Notifications from './Notifications';
import Messages from './Messages';
import Callbacks from './Callbacks';
import useActiveComponent from '../../Hooks/UseActiveComponent';

const Mainpage = () => {
  const { activeComponent, setActive } = useActiveComponent();



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
      case 'Callbacks':
        return <Callbacks />;
      default:
        return null;
    }
  };

  const handleNavLinkClick = (componentName) => {
    setActive(componentName);
  };

  return (
    <div className='container text-center'>
      <div className='row max-lg:hidden '>
        <div className='col-2 m-2 flex flex-col gap-2  border-4 border-red-800'>
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
            onClick={() => handleNavLinkClick('Callbacks')}
            activeClassName='active-link'
          >
            Callback Requests
          </NavLink>
        </div>
        <div className='col-9 m-2 shadow-md border border-gray-400'>{renderComponent()}</div>
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
            onClick={() => handleNavLinkClick('Callbacks')}
            activeClassName='active-link'
          >
            Callbacks
          </NavLink>
        </div>
        <div className='w-[70%] shadow-md border border-gray-400'>{renderComponent()}</div>
      </div>
     </div>
    </div>
  );
};

export default Mainpage;
