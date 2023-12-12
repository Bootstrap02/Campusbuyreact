// import react from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import {Mobile} from "../Constants/Hardjson.js"; 

// const Help = ()=> {
//     return(
//         <div>
//             <div className='bg-[#f5f5f5] shadow-sm my-2'>
//           <div className='bg-black text-white text-xl p-2 m-1 text-center'><h2>Other Products in this Category</h2></div>
//           <div className="flex gap-2 flex-wrap m-2 justify-center">
//     {Mobile.map((mobile) => (
//      <div className="w-[30%]">
//        <div className="flex flex-col gap-2  m-2 p-1 " key={mobile.title}>
//         <img src={mobile.image} alt={mobile.title} width={40} />
//         <p>{mobile.title}</p>
//       </div>

//      </div>
//     ))}
//   </div>
//         </div>
//         <div>
//           <div className='text-xl text-bold'><h1><strong>Mobile Phones in Unilag</strong></h1></div>
//          <div>
//          <div className='my-2'>Filter:</div>
//          <div className='flex m-1 p-1 shadow-lg items-center'>
//           <div className='col-2'>
//           <div className=''>
//             <button className='bg-yellow-600'>Search</button>   
//           </div>
//           </div>
//           <div className='col-4'>
          
//           <div className='bg-green-900 text-black text-2xl p-1 m-2 text-center gap-2 flex'><h2>Price </h2> <TbCurrencyNaira className='naira' /></div>
//           <div className='flex gap-2 justify-between m-2  items-center'>
//            <div className='border flex flex-col  p-1'>
//            <label>Min</label>
//           <input type='text' className=' border border-none '/>
//            </div>
//            -
//            <div className='border flex flex-col  p-1'>
//            <label>Max</label>
//           <input type='text' className=' border border-none '/>
//           </div>
//         </div>
//           </div>

//           <div class="col-3 dropdown">
//   <button className="btn btn-secondary bg-green-900 dropdown-toggle p-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//   <div className='flex gap-2 justify-center items-center'><span  className='text-white rounded-sm border p-2 m-1 text-sm'>  Brand</span></div>
//   </button>
//   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//     <li><Link className="dropdown-item " to="/account">Account</Link></li>
//     <li><Link className="dropdown-item " to="/settings">Settings</Link></li>
//     <li><Link className="dropdown-item " to="#">Sign up/Sign in</Link></li>
//   </ul>
// </div>
//           <div class="col-3 dropdown">
//   <button className="btn btn-secondary bg-green-900 dropdown-toggle p-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//   <div className='flex gap-2 justify-center items-center'><span  className='text-white rounded-sm border p-2 m-1 text-sm'>  Condition</span></div>
//   </button>
//   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//     <li><Link className="dropdown-item " to="/account">Account</Link></li>
//     <li><Link className="dropdown-item " to="/settings">Settings</Link></li>
//     <li><Link className="dropdown-item " to="#">Sign up/Sign in</Link></li>
//   </ul>
// </div>
//           </div>
//          </div>
//         </div>
//         <section className=' product-listings  flex-col justify-start items-center  hidden max-lg:flex'>
//     <div className=' w-[100%]   justify-center   max-lg:flex-col'>
//     <Mobileproductcard/>
//     </div>
//     </section>
//         </div>
//     )
// }

// export default Help;