import React from 'react';
import { Miniheader, Minifooter } from '../Components/Subheaders';
import { AiFillMessage } from "react-icons/ai";


const Contact = () => {
  return (
    <div className='w-[100]'>
      <div><Miniheader/></div>
      <div className='text-4xl text-center max-lg:text-2xl'><strong>Contact Us</strong></div>
      <div>
        <div><AiFillMessage /></div>
        <div>
          At campusbuy, we have the best customer service agents with 24/7 services to respond to any questions, offer support and guidiance to difficulties you need assistance with.You can email us at <a href='louisjoseph131@gmail.com'>louisjoseph131@gmail.com</a>. If you found any bugs, difficult links or Navigation constraints, feel free to reach out to us. You can call any of our hotlines  08164910957, 09069412463, 07042380116, 09088317279. For your convenience, check our Frequently Asked Questions  
       <button className='p-2 rounded-m border border-green-600'>FAQ</button> </div>
        
      </div>
      <div><Minifooter/></div>
    </div>
  )
}

export default Contact