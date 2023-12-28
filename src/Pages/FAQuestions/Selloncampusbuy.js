import React, {useState} from 'react';
import { MdCancel } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";
import {NavLink} from 'react-router-dom';
import {Postproduct} from '../../Components/Postproduct';



const Selloncampusbuy = () => {
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
  

  return (
    <div className='container'>
        <div className='text-xl'><strong>Sell on Campusbuy</strong></div>
        <div className='mt-4'>
        <ul>
            <li className='my-3'>Click on 
            <NavLink to=''>
          <button className='p-2 sell-product-btn btn-warning text-black' onClick={openModals}>Sell Something</button>
        </NavLink></li>
        <li className='my-3'>Fill the form</li>
        <li className='my-3'>Click Submit button</li>
        </ul>
        </div>
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
    </div>
  )
}

export default Selloncampusbuy