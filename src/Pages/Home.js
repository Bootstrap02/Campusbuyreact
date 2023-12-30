import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import { Productcards, Mobileproductcard } from '../Components/Productcards.js';
import {Mobile} from "../Constants/Hardjson.js"; 


const Home = () => { 
  const [categories, setCategories]= useState([]);
  // const [selectCategory, setSelectCategory]= useState();
   const API_KEY=[
    {APARTMENTS_API_KEY : 'https://bootstrapnode.cyclic.app/getproducts?category=Electronics'},
   {PHONES_API_KEY :'https://bootstrapnode.cyclic.app/getproducts?category=Phoness'},
   {BEDS_AND_FURNITURES_API_KEY :'https://bootstrapnode.cyclic.app/getproducts?category=Beds and Furnitures'},
   {LAPTOPS_API_KEY: 'https://bootstrapnode.cyclic.app/getproducts?category=Laptops'},
   {GENERATORS_API_KEY: 'https://bootstrapnode.cyclic.app/getproducts?category=Generators'},
   {TUTORIALS_API_KEY: 'https://bootstrapnode.cyclic.app/getproducts?category=Tutorials'},
   {HAIRS_AND_WIGS_API_KEY: 'https://bootstrapnode.cyclic.app/getproducts?category=Hairs and Wigs'},
   {CLOTHES_API_KEY: 'https://bootstrapnode.cyclic.app/getproducts?category=Clothes'},
   {ELECTRICAL_APPLIANCES_API_KEY : 'https://bootstrapnode.cyclic.app/getproducts?category=Electrical Appliances'},
   {TEXTBOOKS_HANDOUT_AND_MATERIALS_API_KEY : 'https://bootstrapnode.cyclic.app/getproducts?category=Textbooks, Handouts and Materials'},
    {ALL_PRODUCTS_API_KEY : 'https://bootstrapnode.cyclic.app/getproducts'},
   ]

   const dispatch = useDispatch()
  const getCategory = (category)=> dispatch({ type:'GET_CATEGORY', category : category })
  const returnedCategory= useSelector(state => state.categories.categories)

// const selectedCategory= (category) => {
//   setSelectCategory(category)
// }



    const fetchCategories = async (categoryApi) => {
      try {
        const response = await axios.get(categoryApi);
        setCategories(response.data);
        getCategory(response.data); // Pass the updated data directly
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Handle error as needed
      }
    };
  
    
  

  
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
             <p><NavLink onClick={()=>{fetchCategories(API_KEY[0].APARTMENTS_API_KEY)  
              console.log(returnedCategory)}} className='text'>Apartments</NavLink></p>
             <p><NavLink onClick={()=>{fetchCategories(API_KEY[1].PHONES_API_KEY)  
              console.log(returnedCategory)}} className='text'>Phones</NavLink></p>
             <p><NavLink onClick={()=>{fetchCategories(API_KEY[2].LAPTOPS_API_KEY)  
              console.log(returnedCategory)}} className='text'>Laptops</NavLink></p>
             <p><NavLink onClick={()=>{fetchCategories(API_KEY[3].BEDS_AND_FURNITURES_API_KEY)  
              console.log(returnedCategory)}} className='text'>Beds and Furnitures</NavLink></p>
             <p><NavLink onClick={()=>{fetchCategories(API_KEY[4].CLOTHES_API_KEY)  
              console.log(returnedCategory)}} className='text'>Clothes</NavLink></p>
             <p><NavLink onClick={()=>{fetchCategories(API_KEY[5].HAIRS_AND_WIGS_API_KEY)  
              console.log(returnedCategory)}} className='text'>Hairs and Wigs</NavLink></p>
             <p><NavLink onClick={()=>{fetchCategories(API_KEY[6].TUTORIALS_API_KEY)  
              console.log(returnedCategory)}} className='text'>Tutorials</NavLink></p>
             <p><NavLink onClick={()=>{fetchCategories(API_KEY[7].GENERATORS_API_KEY)  
              console.log(returnedCategory)}} className='text'>Generators</NavLink></p>
             <p><NavLink onClick={()=>{fetchCategories(API_KEY[8].ELECTRICAL_APPLIANCES_API_KEY)  
              console.log(returnedCategory)}} className='text'>Eletrical Appliances</NavLink></p>
             <p><NavLink onClick={()=>{fetchCategories(API_KEY[9].TEXTBOOKS_HANDOUT_AND_MATERIALS_API_KEY)  
              console.log(returnedCategory)}} className='text'>Textbooks, Handouts and Materials</NavLink></p>
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
 <div className="w-[30%]" key={mobile.title}>
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