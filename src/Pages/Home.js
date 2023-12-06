import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Productcards from '../Components/Productcards';


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
    <br/>
    <section className=' product-listings m-2 p-2 max-lg:m-0 max-lg:p-0 max-lg:flex max-lg:flex-col justify-center'>
      <div className='w-[100%] m-4 text-4xl max-lg:m-0 max-lg:text-xl max-lg:w-[90%] trending-products'>
        <h2>Trending Products</h2>
      </div>
    <div className=' max=lg:w-[90%] flex-wrap flex justify-center   max-lg:flex-col'>
    <Productcards/>
    </div>
    </section>
    </div>
  )
}

export default Home