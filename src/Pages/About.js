import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Mobile} from "../Constants/Hardjson.js"; 
import { TbCurrencyNaira } from 'react-icons/tb';
import {Productcard} from '../Components/Productcards.js';
import Mobilesearch from '../Components/Mobilesearch.js'

const About = ({props}) => {
  // const {category} = props;
  return (
    <div className='w-[100%]'>
      <div className='w-[100%] flex flex-col gap-2 max-lg:hidden'>
      <div className='m-3 p-2 flex justify-start items-center'>
        <div  className='bg-[#f5f5f5] text-black p-2 m-2 rounded-lg '>Campusbuy</div>
        /
        <div className='bg-[#f5f5f5] text-black p-2 m-2 rounded-lg '>Mobile Phones {/* {category} */}</div>
      </div>
      <div className='flex gap-3'>
        <div className='flex flex-col gap-2 w-[40%]'>
        <div className='bg-[#f5f5f5] shadow-sm my-2'>
          <div className='bg-black text-white text-2xl p-3 m-2 text-center'><h2>Other Products in this Category</h2></div>
          <div className="flex gap-2 flex-wrap m-2 justify-center">
    {Mobile.map((mobile) => (
     <div className="w-[30%]">
       <div className="flex flex-col gap-2  m-2 p-1 " key={mobile.title}>
        <img src={mobile.image} alt={mobile.title} width={80} />
        <p>{mobile.title}</p>
      </div>

     </div>
    ))}
  </div>
        </div>
        <div className='bg-[#f5f5f5] shadow-sm my-2'> 
          <div className='bg-black text-white text-2xl p-1 m-2 text-center gap-2 flex'><h2>Price </h2> <TbCurrencyNaira className='naira' /></div>
          <div className='flex gap-2 justify-between m-2  items-center'>
           <div className='border flex flex-col gap-1 p-2'>
           <label>Min</label>
          <input type='text' className=' border border-none '/>
           </div>
           -
           <div className='border flex flex-col gap-1 p-2'>
           <label>Max</label>
          <input type='text' className=' border border-none '/>
           </div>
          </div>
        </div>

        <div className='bg-[#f5f5f5] shadow-sm my-2'>
          <div className='bg-black text-white text-2xl p-1 m-2 text-center '><h2>Brand </h2></div>
          <div className='flex gap-2 flex-col'>
           <div className='border flex  gap-1 p-2'>
          <input type='radio' />
           <label>- Apple</label>
           </div>
           <div className='border flex  gap-1 p-2'>
          <input type='radio' />
           <label>- Samsung</label>
           </div>
           <div className='border flex  gap-1 p-2'>
          <input type='radio' />
           <label>- Techno</label>
           </div>
           <div className='border flex  gap-1 p-2'>
          <input type='radio' />
           <label>- Infinix</label>
           </div>
           <div className='border flex  gap-1 p-2'>
          <input type='radio' />
           <label>- Nokia</label>
           </div>
           <div className='border flex  gap-1 p-2'>
          <input type='radio' />
           <label>- XIAOMI</label>
           </div>
          
          </div>
        </div>

        <div className='bg-[#f5f5f5] shadow-sm my-2'>
          <div className='bg-black text-white text-2xl p-1 m-2 text-center '><h2>Condition </h2></div>
          <div className='flex gap-2 flex-col'>
           <div className='border flex  gap-1 p-2'>
          <input type='radio' />
           <label>- New</label>
           </div>
           <div className='border flex  gap-1 p-2'>
          <input type='radio' />
           <label>- Refurbished</label>
           </div>
           <div className='border flex  gap-1 p-2'>
          <input type='radio' />
           <label>- Used</label>
           </div>
          </div>
        </div>
        </div>
        <div className= 'flex flex-col gap-2'>
        <div>
          <div className='text-2xl text-bold'><h1><strong>Mobile Phones in Unilag</strong></h1></div>
          <div className='flex m-2 px-1 py-3 shadow-lg items-center'>
          <div>Sort by:</div>
          <div><Link className='bg-black text-white rounded-sm border p-2 m-2'>Newest</Link></div>
          <div><Link className='bg-black text-white rounded-sm border p-2 m-2'>Oldest</Link></div>
          <div><Link className='bg-black text-white rounded-sm border p-2 m-2'>Cheapest</Link></div>
          <div><Link className='bg-black text-white rounded-sm border p-2 m-2'>Most Expensive</Link></div>
          <div><Link className='bg-black text-white rounded-sm border p-2 m-2'>Most Popular</Link></div>
          <div><Link className='bg-black text-white rounded-sm border p-2 m-2'>Least Popular</Link></div>
          </div>
        </div>
        <div className='flex-wrap flex justify-center'><Productcard/></div>
        </div>
      </div>
    </div>
    <div className='hidden max-lg:block'>
  <Mobilesearch />
</div>
    </div>

  )
}

export default About