import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Miniheader, Minifooter } from '../Components/Subheaders'
import Buyoncampusbuy from './FAQuestions/Buyoncampusbuy';
import Customersupport from './FAQuestions/Customersupport';
import Deliveryservice from './FAQuestions/Deliveryservice';
import Paymentservice from './FAQuestions/Paymentservice';
import Selloncampusbuy from './FAQuestions/Selloncampusbuy';
import Subscribenewsletter from './FAQuestions/Subscribenewsletter';
import Unsubscribenewsletter from './FAQuestions/Unsubscribenewsletter';
import useActiveComponent from '../Hooks/UseActiveComponent';

const Mainpage = () => {
  const { activeComponent, setActive } = useActiveComponent();



  const renderComponent = () => {
    switch (activeComponent) {
      case 'how do i contact customer support':
        return <Customersupport />;
      case 'How can i sell on Campusbuy':
        return <Selloncampusbuy />;
      case 'How can i buy on Campusbuy':
        return <Buyoncampusbuy />;
      case 'Does campusbuy offer delivery services':
        return <Deliveryservice />;
      case 'Does campusbuy offer payment services':
        return <Paymentservice />;
      case 'how can i subscribe to campusbuy newsletter':
        return <Subscribenewsletter />;
      case 'how can i unsubscribe to campusbuy newsletter':
        return <Unsubscribenewsletter />;
      default:
        return null;
    }
  };

  const handleNavLinkClick = (componentName) => {
    setActive(componentName);
  };

  return (
    <div className=' text-center container '>
      <div className=''><Miniheader/></div>
     <div className='container'>
     <div className='row max-lg:hidden '>
        <div className='col-2 m-2 flex flex-col gap-2 '>
          <NavLink
            className='m-2 p-2 border border-gray-400   '
            onClick={() => handleNavLinkClick('how do i contact customer support')}
            activeClassName='active-link'
          >
            how do i contact customer support
          </NavLink>
          <NavLink
            className='m-2 p-2 border border-gray-400  '
            onClick={() => handleNavLinkClick('How can i sell on Campusbuy')}
            activeClassName='active-link'
          >
            How can i sell on Campusbuy
          </NavLink>
          <NavLink
            className='m-2 p-2 border border-gray-400  '
            onClick={() => handleNavLinkClick('How can i buy on Campusbuy')}
            activeClassName='active-link'
          >
            How can i buy on campusbuy
          </NavLink>
          <NavLink
            className='m-2 p-2 border border-gray-400  '
            onClick={() => handleNavLinkClick('Does campusbuy offer delivery services')}
            activeClassName='active-link'
          >
            Does campusbuy offer delivery services
          </NavLink>
          <NavLink
            className='m-2 p-2 border border-gray-400  '
            onClick={() => handleNavLinkClick('Does campusbuy offer payment services')}
            activeClassName='active-link'
          >
            Does campusbuy offer payment services
          </NavLink>
          <NavLink
            className='m-2 p-2 border border-gray-400  '
            onClick={() => handleNavLinkClick('how can i subscribe to campusbuy newsletter')}
            activeClassName='active-link'
          >
            how can i subscribe to campusbuy newsletter
          </NavLink>
          <NavLink
            className='m-2 p-2 border border-gray-400  '
            onClick={() => handleNavLinkClick('how can i unsubscribe to campusbuy newsletter')}
            activeClassName='active-link'
          >
            how can i unsubscribe to campusbuy newsletter
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
            onClick={() => handleNavLinkClick('how do i contact customer support')}
            activeClassName='active-link'
          >
             how do i contact customer support
          </NavLink>
          <NavLink
            className=' border border-gray-400 text-center p-2  '
            onClick={() => handleNavLinkClick('How can i sell on Campusbuy')}
            activeClassName='active-link'
          >
            How can i sell on Campusbuy
          </NavLink>
          <NavLink
            className=' border border-gray-400 text-center p-2  '
            onClick={() => handleNavLinkClick('How can i buy on Campusbuy')}
            activeClassName='active-link'
          >
             How can i buy on Campusbuy
          </NavLink>
          <NavLink
            className=' border border-gray-400 text-center p-2  '
            onClick={() => handleNavLinkClick('Does campusbuy offer delivery services')}
            activeClassName='active-link'
          >
            Does campusbuy offer delivery services
          </NavLink>
          <NavLink
            className=' border border-gray-400 text-center p-2  '
            onClick={() => handleNavLinkClick('Does campus buy offer payment services')}
            activeClassName='active-link'
          >
             Does campus buy offer payment services
          </NavLink>
          <NavLink
            className=' border border-gray-400 text-center p-2  '
            onClick={() => handleNavLinkClick('how can i subscribe to campusbuy newsletter')}
            activeClassName='active-link'
          >
            how can i subscribe to campusbuy newsletter
          </NavLink>
          <NavLink
            className=' border border-gray-400 text-center p-2  '
            onClick={() => handleNavLinkClick('how can i unsubscribe to campusbuy newsletter')}
            activeClassName='active-link'
          >
            how can i unsubscribe to campusbuy newsletter
          </NavLink>
        </div>
        <div className='w-[70%] shadow-md border border-gray-400'>{renderComponent()}</div>
      </div>
     </div>
     <div  className=''><Minifooter/></div>
    </div>
  );
};

export default Mainpage;
