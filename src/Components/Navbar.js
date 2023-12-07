import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";
import {Mobile} from "../Constants/Hardjson.js"; 


const Navbar = () => {
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
    <div className=" w-[100%]">
        <header className='upper-mobile-nav w-[100%] flex items-center justify-between shadow-md shadow-[#3b4149] bg-[#131921]'>
            <div className="mobile-logo m-2 p-2">
            <Link><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={50} alt='logo'/></Link>
            </div>
            <div className="upper-mobile-links flex gap-2 m-2 p-2">
            <div><Link className='flex  flex-col gap-1 justify-center items-center'><RiAccountPinBoxFill className='mobile-header-react-icons'/>  <span  className='text-white text-[8px]'>  Account</span></Link></div>           
            <div><Link className='flex  flex-col gap-1 justify-center items-center'><FaHeart className='mobile-header-react-icons'/>  <span  className='text-white text-[8px]'>  Wishlist</span></Link></div>
            <div><Link className='flex  flex-col gap-1 justify-center items-center'><IoMdNotifications className='mobile-header-react-icons'/>  <span  className='text-white text-[8px]'>  Notification</span></Link></div>
            <div><Link className='flex  flex-col gap-1 justify-center items-center'><MdOutlineHelp  className='mobile-header-react-icons'/>  <span  className='text-white text-[8px]'>  Help</span></Link></div>
            </div>
        </header>
       <header
        className={`middle-mobile-nav bg-[#232f3e] shadow-md shadow-[#3b4149] ${
          scrollDirection === "down" ? "scrolled-down" : "scrolled-up"
        }`}
      >
        <form className="mobile-search-schools m-2 p-2 flex flex-col gap-3">
            <div>
            <input type="text" placeholder="Search for your product. eg. unilag" className="border-none rounded-sm w-full my-2 p-2"/>
            <div class="input-group my-2">
  <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Search for  school. eg. unilag"/>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='text-white'>Dropdown</span></button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li class="dropdown-divider"> <hr/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
            <button className="mobile-submit-button rounded-sm p-2 bg-green-700 border">Search</button>
            </div>
        </form>
        <NavLink to='/postproduct' className='mobile-sell-product-button'><button className='p-2 sell-product-btn btn-warning   text-black'>Sell Something</button></NavLink>
      </header>
      <header className='mobile categories-listing mt-4'>
      <div className='w-[100%] my-4 text-4xl max-lg:m-0 max-lg:text-xl  trending-products'>
        <h2>Our Categories</h2>
      </div>
  <div className="flex gap-2 flex-wrap">
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

    </div>
  );
};

export default Navbar;
