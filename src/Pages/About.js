import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom'
import { Miniheader, Minifooter } from '../Components/Subheaders';
import {Postproduct} from '../Components/Postproduct';
import { MdCancel } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";


export const About= ()=> {

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
  
  



return(
    <div className=' w-[100%] flex flex-col justify-center items-center  max-lg:py-5'>
    <div className='w-[98%]'><Miniheader/></div>
   <div className='container max-lg:mb-6'>
    <div className='container'>
        
    <div>
   <div className='bg-blue-700 text-2xl inline-block w-full p-4 border mb-4'> <p><strong> Our Company</strong></p></div>
   <div className=' flex justify-center'> <img className='w-[60%]' src='https://res.cloudinary.com/dneejvhch/image/upload/v1703146123/Campusbuy/Rectangle_295_beijh7.png' alt='Our Company'/></div>
    </div>

    <div className='mt-4'>
        <div className='mb-4'><strong>We bring commerce to your doorstep by connecting trade with your immediate environment.</strong> </div>
        <div>
        At campusbuy, we focus on connecting buyers and sellers from the same locality. This means that the seller or buyer are never faraway from each other. in this way, we eliminate one of the ajor hinderances of trade <strong>DISTANCE</strong>. Efficient business to business websites exist and they do a good job. However, Distance in trade is the problem we are trying to solve. Normally, Logistics services look like the perfect answer to distant trading. However, logistics cost more money, wastes time and could develop complications. It is always easier and more convenient for both the buyer and the seller if there is no distance between them. Many times people have gone through the difficulty of buying things far away because they could not find them nearby. It may not mean it was not available nearby, they just could not connect with the sellers. What we wish to solve are the problems associated with distance trading.  We wish to connect buyers and sellers within their locality, together  and our focus is in the tertiary institutions.
     Also, second hand products trading is a vibing market. It has thrived always in the background looking for an outlet. A lot of people have things they do not need anymore and wish they could sell but have no way of putting it out there for buyers to see. This is another problem we wish to solve. We are launching a platform where people can put things directly to people who really need those items.( The items a student possesses are most likely what another student needs). We are connecting trade between a student and another student. These are people in similar situations. It makes trading likely and when done with us, it becomes possible and easy.
Campusbuy.Inc, launched this month, is a pioneering business-to-business platform designed exclusively for tertiary institutions. Our mission is to foster a dynamic environment for students to seamlessly buy and sell goods and services within their academic community. Unlike traditional e-commerce platforms, Campusbuy does not coordinate transactions but rather provides the essential digital space for buyers and sellers to connect, creating a vibrant trading hub on university and other tertiary campuses.

        </div>

    </div>
    <div className='flex flex-col gap-5 mt-4'>
        <div className='bg-black p-2 text-2xl inline-block w-full my-4 text-white'>How to use Campusbuy</div>
        <div className='my-2'>
            <div className='text-xl text-bold '><strong>Sell on Campusbuy</strong></div>
            <div className='flex justify-between p-4'>
            <div className='flex flex-col gap-3 '>
                <div><strong>1. </strong>Type in your school and choose it on the homepage</div>
                <div><strong>2. </strong>Click on  
                 <NavLink to=''>
          <button className='p-2 sell-product-btn btn-warning text-black' onClick={openModals}>Sell Something</button>
        </NavLink>
                 </div>
                 <div><strong>3. </strong>Fill the form.</div>
                 <div><strong>4. </strong>Click Submit button.</div>
            </div>
                <div className='w-[40%] max-lg:hidden'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1703146123/Campusbuy/Rectangle_295_beijh7.png' alt='sell_on_campusbuy'/></div>
    
            </div>
        </div>

        <div  className='my-2 '>
            <div className='text-xl text-bold '><strong>Buy on Campusbuy</strong></div>
            <div className='flex justify-between p-4'>
            <div className='flex flex-col gap-3 '>
            <div><strong>1. </strong>Type in your school and choose it on the homepage</div>
                <div><strong>1. </strong>Search for your Product on the search bar</div>
                 <div><strong>2. </strong>Click on the product you want to buy.</div>
                 <div><strong>3. </strong>Contact the seller via the seller information.</div>
                 <div><strong>4. </strong>Meet the seller in a public place and do business.</div>
            </div>
                <div className='w-[40%] max-lg:hidden'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1703146123/Campusbuy/Rectangle_295_beijh7.png' alt='sell_on_campusbuy'/></div>
    
            </div>
        </div>
    </div>
    </div>
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
    <div className='w-[98%]'><Minifooter/></div>

</div>
)
}