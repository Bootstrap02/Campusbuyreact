import react from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Mobile} from "../Constants/Hardjson.js"; 
import { TbCurrencyNaira } from 'react-icons/tb';
import {Mobileproductcard} from './Productcards.js';
import { RiArrowUpDownLine } from "react-icons/ri";




const Mobilesearch = ()=> {
    return(
        <div className='w-[100%] mt-[17rem]'>
            <div className='bg-[#f5f5f5] shadow-sm my-2'>
          <div className='bg-black text-white text-xl p-2 m-1 text-center'><h2>Other Products in this Category</h2></div>
          <div className="flex gap-2 flex-wrap m-2 justify-center">
    {Mobile.map((mobile) => (
     <div className="w-[30%]">
       <div className="flex flex-col gap-2  m-2 p-1 " key={mobile.title}>
        <img src={mobile.image} alt={mobile.title} width={40} />
        <p>{mobile.title}</p>
      </div>

     </div>
    ))}
  </div>
        </div>
        <div>
          <div className='text-xl text-bold text-center pb-2 mb-2' style={{borderBottom:'solid gray 1px'}}><h1><strong>Mobile Phones in Unilag</strong></h1></div>
         <div className='mb-3'>
         <div className='my-2 text-bold text-center text-xl'><strong>Filter</strong></div>
         <div className='flex  shadow-lg items-start justify-between'>
          <div className='col-2'>
          <div className=''>
            <button className='bg-yellow-500 rounded-md p-1 border'>Search</button>   
          </div>
          </div>
          <div className='col-4'>
          
          <div className='bg-green-900 text-white text-2xl rounded-md p-1 m-1text-center gap-2 flex justify-center items-center'><h2>Price </h2> <TbCurrencyNaira className='naira' /></div>
          <div className='flex justify-between   items-center '>
           <div className='border flex flex-col   w-[30%]'>
           <label>Min</label>
          <input type='text' className=' border border-none w-[100%] '/>
           </div>
           -
           <div className='border flex flex-col   w-[30%]'>
           <label>Max</label>
          <input type='text' className=' border border-none w-[100%] '/>
          </div>
        </div>
          </div>

          <div class="col-2 dropdown">
  <button className="btn btn-secondary bg-green-900 dropdown-toggle p-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='flex gap-2 justify-center items-center'><span  className='text-white rounded-sm border p-2 m-1 text-sm'>  Brand</span></div>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item " to="/account">Account</Link></li>
    <li><Link className="dropdown-item " to="/settings">Settings</Link></li>
    <li><Link className="dropdown-item " to="#">Sign up/Sign in</Link></li>
  </ul>
</div>
          <div class="col-3 dropdown">
  <button className="btn btn-secondary bg-green-900 dropdown-toggle p-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='flex gap-2 justify-center items-center'><span  className='text-white rounded-sm border p-2 m-1 text-sm'>  Condition</span></div>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item " to="/account">Account</Link></li>
    <li><Link className="dropdown-item " to="/settings">Settings</Link></li>
    <li><Link className="dropdown-item " to="#">Sign up/Sign in</Link></li>
  </ul>
</div>
          </div>
         </div>
         <div className='mb-3'>
         <div className='flex  shadow-lg items-start justify-start gap-4'>
         <div className='my-2 text-bold text-center text-xl'><strong>Sort by:</strong></div>
          

          
          <div class="col-3 dropdown">
  <button className="btn btn-secondary bg-green-900 dropdown-toggle p-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='flex gap-2 justify-center items-center'><span  className='text-white rounded-sm border p-2 m-1 text-sm'>  Recommended</span> <RiArrowUpDownLine className='mobile-header-react-icons'/></div>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item " to="/account">Recommended</Link></li>
    <li><Link className="dropdown-item " to="/settings">Lowest to Highest</Link></li>
    <li><Link className="dropdown-item " to="#">Sign up/Sign in</Link></li>
  </ul>
</div>
          </div>
         </div>
        </div>
        <section className=' product-listings  flex-col justify-start items-center  hidden max-lg:flex'>
    <div className=' w-[100%]   justify-center   max-lg:flex-col'>
    <Mobileproductcard/>
    </div>
    </section>
        </div>
    )
}

export default Mobilesearch;