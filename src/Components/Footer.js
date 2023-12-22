import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSend } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { TbPremiumRights } from "react-icons/tb";
import { MdAddIcCall } from "react-icons/md";

const Footer = () => {

  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = document.documentElement.scrollTop;

    if (currentScrollPos > prevScrollPos) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);


  return (
    <>
    <footer className='py-4 max-lg:hidden'>
      <div className='container-xxl'>
        <div className='row p-4 m-4'>
          <div className='col-5'>
            <div className='footer-top-data d-flex  align-items-center justify-content-center '>
              <BsSend className= 'text-white sender'/>
              <h4 className='text-white text-xl'>Sign Up for Newsletter</h4>
            </div>
          </div>
          <div className='col-6'>
            <form className='bg-white footer-top-newsletter d-flex  align-items-center '>
              <input className='input' placeholder='Enter Your Email' type='text' />
              <button><strong>Subscribe</strong></button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4 text-white p-4 max-lg:hidden'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3 flex flex-col gap-2'>
            <h4 className='text-2xl'>Contact Us</h4>
            <div className=' flex flex-col gap-2'>
              <h6 className='text-xl'>Campusbuy Office</h6>
              <p>Block 26, 23 road, Festac Extension, Old Ojo road, Satellite-town, Lagos, Nigeria. </p>
              <p>+2348164910957, +2347042380116, +2349069412463, +2348188317279</p>
              <p>louisjoseph131@gmail.com, louismatrix47@gmail.com, udegbueconfidence@gmail.com</p>
            <div className='social-media-links d-flex align-items-center'>
             <Link><img className='footer-social-media-images' src='https://res.cloudinary.com/dneejvhch/image/upload/v1697455019/Isioma_project/work/facebook_egls0e.png' alt='facebook' width={30}/></Link>
             <Link><img className='footer-social-media-images' src='https://res.cloudinary.com/dneejvhch/image/upload/v1697455239/Isioma_project/work/twitter_njn3rw.png' alt='twitter' width={30}/></Link>
             <Link><img className='footer-social-media-images' src='https://res.cloudinary.com/dneejvhch/image/upload/v1697455238/Isioma_project/work/linkedin_zxht6a.png' alt='linkedIn' width={30}/></Link>
             <Link><img className='footer-social-media-images' src='https://res.cloudinary.com/dneejvhch/image/upload/v1697455238/Isioma_project/work/instagram_gt63ic.png' alt='instagram' width={30}/></Link>
             <Link><img className='footer-social-media-images' src='https://res.cloudinary.com/dneejvhch/image/upload/v1697455241/Isioma_project/work/wow_s7fgmt.png' alt='anything' width={30}/></Link>
            </div>
            </div>
          </div>
          <div className='col-2 flex flex-col gap-2'>
          <h4 className='text-2xl'>Our Policy</h4>
            <div className='flex flex-col gap-2'>
             <p> <Link className='text-white' href = '#'>Privacy policy</Link></p>
             <p> <Link className='text-white' href = '#'>Shipping policy</Link></p>
             <p> <Link className='text-white' href = '#'>Payment policy</Link></p>
             <p> <Link className='text-white' href = '#'>Cookie policy</Link></p>
             <p> <Link className='text-white' href = '#'>Copyright Infringement policy</Link></p>
             <p> <Link className='text-white' href = '#'>Terms of Service </Link></p>
             <p> <Link className='text-white' href = '#'>Blog </Link></p>
          </div>
          </div>
          <div className='col-2 flex flex-col gap-2'>
          <h4 className='text-2xl'>Account</h4>
            <div className='flex flex-col gap-2'>
              <p><Link className='text-white' href = '#'>Search</Link></p>
              <p><Link className='text-white' href = '#'>About Us</Link></p>
              <p><Link className='text-white' href = '#'>FAQ</Link></p>
              <p><Link className='text-white' href = '#'>Contact</Link></p>
              <p><Link className='text-white' href = '#'>Safety Tips</Link></p>
          </div>
          </div>
          <div className='col-2 flex flex-col gap-2'>
          <h4 className='text-2xl'>Quick Links</h4>
            <div className='flex flex-col gap-2'>
              <p><Link className='text-white' href = '#'>Apartments</Link></p>
              <p><Link className='text-white' href = '#'>Accessories</Link></p>
              <p><Link className='text-white' href = '#'>Laptops</Link></p>
              <p><Link className='text-white' href = '#'>Phones</Link></p>
              <p><Link className='text-white' href = '#'>Bags</Link></p>
              <p><Link className='text-white' href = '#'>Clothes</Link></p>
              <p><Link className='text-white' href = '#'>Hair and Wigs</Link></p>
          </div>
          </div>
          <div className='col-3 flex flex-col gap-2'>
          <h4 className='text-2xl'>Our App</h4>
            <div>
              <p>Download our app for convenience in finding products, contacting buyers and getting daily notifications on your favorite products.</p>
              <div className='social-media-links d-flex align-items-center'>
             <Link><img className='footer-app-store-images' src='https://res.cloudinary.com/dneejvhch/image/upload/v1701484988/Campusbuy/app-store-6647240_1280_l5qexl.webp' alt='Applestore' width={150}/></Link>
             <Link><img className='footer-app-store-images' src='https://res.cloudinary.com/dneejvhch/image/upload/v1701485419/Campusbuy/en_badge_web_generic_e1sd86.png' alt='Googleplay' width={150}/></Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4 max-lg:hidden'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>
              &copy; {new Date().getFullYear()}; Powered by Campusbuy.Inc(" ")
            </p>
          </div>
        </div>
      </div>
    </footer>
    <footer className={`mobile-footer w-[100%] hidden max-lg:block bg-[#232f3e] shadow-md shadow-[#3b4149] ${
          scrollDirection === "down" ? "scrolled-down" : "scrolled-up"
        }`}>
    <div className="upper-mobile-links flex gap-2 m-2 p-2 justify-between items-center">
            <div><NavLink className='flex  flex-col gap-1 justify-center items-center'><MdHome className='mobile-footer-react-icons'/>  <span  className='text-white text-[10px]'>  Home</span></NavLink></div>           
            <div><NavLink to= '/firstpage' className='flex  flex-col gap-1 justify-center items-center'><MdLocalShipping className='mobile-footer-react-icons'/>  <span  className='text-white text-[10px]'>  Logistics</span></NavLink></div>
            <div><NavLink className='flex  flex-col gap-1 justify-center items-center'><MdPayments className='mobile-footer-react-icons'/>  <span  className='text-white text-[10px]'>  Excro Payment</span></NavLink></div>
            <div><NavLink className='flex  flex-col gap-1 justify-center items-center'><TbPremiumRights  className='mobile-footer-react-icons'/>  <span  className='text-white text-[10px]'>  Premium Services</span></NavLink></div>
            <div><NavLink className='flex  flex-col gap-1 justify-center items-center'><MdAddIcCall  className='mobile-footer-react-icons'/>  <span  className='text-white text-[10px]'>  Contact</span></NavLink></div>
            </div>
    </footer>
    </>
  )
}

export default Footer