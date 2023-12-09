import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Productcards, Mobileproductcard } from '../Components/Productcards.js';
import {Mobile} from "../Constants/Hardjson.js"; 


const Home = () => { 
  return (
    <div className='container '>
    <section className='home-wrapper-1 m-2 p-2 max-lg:hidden'>
      <div className='container-xxl  '>
        <div className='row'>
          <div className='col-6'>
          <div className='homepage-hot-categories p-3'>
            <div className=' flex flex-col gap-2'>
            <h2 className='header text-xl'><strong>Our Hot Categories</strong></h2>
            <div className='flex flex-col gap-1'>
             <p><Link className='text'>Apartments</Link></p>
             <p><Link className='text'>Phones</Link></p>
             <p><Link className='text'>Laptops</Link></p>
             <p><Link className='text'>Beds and Furnitures</Link></p>
             <p><Link className='text'>Clothes</Link></p>
             <p><Link className='text'>Hairs and Wigs</Link></p>
             <p><Link className='text'>Tutorials</Link></p>
             <p><Link className='text'>Generators</Link></p>
             <p><Link className='text'>Eletrical Appliances</Link></p>
             <p><Link className='text'>Textbooks, Handouts and Materials</Link></p>
            </div>
            </div>
            <div>
              <img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697455241/Isioma_project/work/wow_s7fgmt.png' alt='anything' width={320}/>
              </div>
            </div>
            <div className='col-6'>
            
          </div>
          </div>
          <div className='col-6'>
        <div className='row homepage-hot-seller-deals justify-content-center'>
          <div className='col-5 best-sellers m-2  '>
           <div className='row'>
           <div className='col-7'> <Link><h6><u>Best sellers</u></h6></Link>
            <h5 className='text-black'>Home Interiors King-sized Beds</h5>
            <p className='text-black'>Get for as low as: <strong>NGN 120,000</strong> only</p>
            </div>
            <div className='col-5'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1701424575/Campusbuy/135086141_NzM2LTczNi1kM2ZmMzAyZjNm_mjzzks.webp' alt='bed' width={100}/></div>
           </div>
          </div>
          <div className='col-5 newest-products m-2  '>
           <div className='row'>
           <div className='col-7'> <Link><h6><u>Newest products</u></h6></Link>
            <h5 className='text-black'>Kritex Nigeria Limited</h5>
            <p className='text-black'>Laptop HP Pavilion Dv6 8GB Intel Core... <strong>NGN 125,000</strong> only</p>
            </div>
            <div className='col-5'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1701426246/Campusbuy/lenovo-laptops-thinkbook-16-gen-4-intel-hero_tngndc.webp' alt='bed' width={100}/></div>
           </div>
          </div>
          <div className='col-5 main-stores m-2  '>
           <div className='row'>
           <div className='col-7'> <Link><h6><u>Main stores</u></h6></Link>
            <h5 className='text-black'>Ofactor Technologies</h5>
            <p className='text-black'>Apple iPhone XS 256 GB Black <strong>NGN 210,000</strong> only</p>
            </div>
            <div className='col-5'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1701424575/Campusbuy/135086141_NzM2LTczNi1kM2ZmMzAyZjNm_mjzzks.webp' alt='bed' width={100}/></div>
           </div>
          </div>
          <div className='col-5 hot-deals  m-2 '>
           <div className='row'>
           <div className='col-7'><Link><h6><u>Hot deals</u></h6></Link>
            <h5 className='text-black'>Aluta General Merchandise</h5>
            <p className='text-black'>4.5kva Kemage Keystart Generator  <strong>NGN 200,000</strong> only</p>
            </div>
            <div className='col-5'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1701424576/Campusbuy/80472425_MTM2NS0xNTAwLWNkNmMxMGRiZWUtMQ_jy1xxw.webp' alt='bed' width={100}/></div>
           </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>

    <section className=' product-listings mt-[15rem] flex-col justify-start items-center  hidden max-lg:flex'>

<header className='mobile categories-listing mt-4'>
  <div className='w-[100%] my-4 text-4xl max-lg:m-0 max-lg:text-xl  trending-products'>
    <h2>Our Categories</h2>
  </div>
<div className="flex gap-2 justify-center flex-wrap">
{Mobile.map((mobile) => (
 <div className="w-[30%]">
   <div className="flex flex-col gap-2  m-2 p-1 " key={mobile.title}>
    <img src={mobile.image} alt={mobile.title} width={100} />
    <p>{mobile.title}</p>
  </div>

 </div>
))}
</div>
<button className="bg-black text-white p-2 text-xl mt-3 ml-3 rounded-md">See More</button>
</header>
</section>

    <br/>
    <div className='w-[100%] my-4 text-4xl max-lg:m-0 max-lg:text-xl  trending-products'>
        <h2>Trending Products</h2>
      </div>
    <section className=' product-listings m-2 p-2 max-lg:hidden'>
    <div className=' w-[100%] flex-wrap flex justify-center '>
    <Productcards/>
    </div>
    </section>
    <section className=' product-listings  flex-col justify-start items-center  hidden max-lg:flex'>
    <div className=' w-[100%]   justify-center   max-lg:flex-col'>
    <Mobileproductcard/>
    </div>
    </section>
    </div>
  )
}

export default Home