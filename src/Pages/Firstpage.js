import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Firstheader } from '../Components/Subheaders';
import { Minifooter } from '../Components/Subheaders';
import Rectangle from '../Assets/Rectangle284.jpg';
import Rectangled from '../Assets/Rectangle283.jpg';
import Rectangler from '../Assets/Rectangle281.webp';
import Rectangles from '../Assets/Rectangle282.png';
import Model from '../Assets/Rectangle278.png';
import Models from '../Assets/Rectangle279.png';
import Modella from '../Assets/Rectangle280.png';

const Firstpage = () => {
  const backgroundImages = [Rectangle, Rectangled, Rectangler, Rectangles];
  const [randomImage, setRandomImage] = useState('');
  const modelImages = [Model, Models, Modella];
  const [randomModelImage, setRandomModelImage] = useState('');

  useEffect(() => {
    // Pick a random image from the array
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setRandomImage(backgroundImages[randomIndex]);
    const modelIndex = Math.floor(Math.random() * modelImages.length);
    setRandomModelImage(modelImages[modelIndex]);
  }, []);

  const mainBG = {
    backgroundImage: `url('${randomImage}')`,
    backgroundSize: 'cover', // or 'contain' based on your preference
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height:'100%'
  };

  return (
    <div className='' style={mainBG}>
      <div className='flex  justify-between  p-4 max-lg:hidden'>
      <div className='flex gap-2 items-center'>
          <NavLink><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={70} alt='logo'/></NavLink>
       <h2><strong className='text-[#363D94] text-xl'>Campusbuy</strong></h2>
        </div>
        <div>
          <Firstheader />
        </div>
        <div><NavLink className='text-white text-bold' to='#'>Sign up/Sign in</NavLink></div>
      </div>
      
      <div className='flex justify-between items-center max-lg:hidden'>
      <div className='w-[60%] mt-[-6rem]'>
      <div className=' mr-[auto]'><div className="input-group rounded-[10px] flex w-[100%] justify-start ">
  <input type="text" className="form-control py-3 m-2 w-[100%]  border shadow-lg" aria-label="Text input with segmented dropdown button" placeholder='Search for your School eg: Uniben'/>
  <button type="button" className="btn bg-[#FFCA28] p-3 rounded-[20px] text-black btn-outline-secondary"><strong>Search</strong></button>
  <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden firstpage-dropdown">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu dropdown-menu-end w-[100%]">
    <li><a className="dropdown-item first-pagelist border" href="#">Action</a></li>
    <li><a className="dropdown-item first-pagelist border" href="#">Another action</a></li>
    <li><a className="dropdown-item first-pagelist border" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item first-pagelist border" href="#">Separated link</a></li>
  </ul>
</div></div>
<div className=' m-4 mt-[2rem] flex flex-col gap-4 '><span className='text-4xl text-bold text-[#D27681]'>Do Business with your Neighbours and Colleagues through Campusbuy.</span>
<p className='text-xl text-white'>The most reliable platform for University, Polytechnic, Monotechnic and all Tertiary Institutions Campus trading</p></div>
      </div>
<div className='w-[35%]'><img src={randomModelImage}/></div>

      </div>

      <div className='hidden max-lg:block'>
      <div className='flex  justify-between  p-3'>
      <div className='flex flex-col gap-1 '>
          <NavLink><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={50} alt='logo'/></NavLink>
       <p><strong className='text-[#363D94]'>Campusbuy</strong></p>
        </div>
        <div>
          <Firstheader />
        </div>
        <div><NavLink className='text-white text-bold' to='#'>Sign up/Sign in</NavLink></div>
      </div>
      
      <div className='flex flex-col justify-center gap-4 items-center m-4 p-2'>
      <div>
      <div className='w-[100%] '><div className="input-group rounded-[10px] flex justify-center ">
  <input type="text" className="form-control py-3 m-2  border shadow-lg" aria-label="Text input with segmented dropdown button" placeholder='Search for your School eg: Uniben'/>
  <button type="button" className="btn bg-[#FFCA28] p-3 rounded-[20px] text-black btn-outline-secondary"><strong>Search</strong></button>
  <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden firstpage-dropdown">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu dropdown-menu-end w-[100%]">
    <li><a className="dropdown-item first-pagelist border" href="#">Action</a></li>
    <li><a className="dropdown-item first-pagelist border" href="#">Another action</a></li>
    <li><a className="dropdown-item first-pagelist border" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item first-pagelist border" href="#">Separated link</a></li>
  </ul>
</div></div>
<div className=' m-4 mt-[2rem] flex flex-col gap-4 '><span className='text-[2.2rem] text-bold text-[#D27681]'>Do Business with your Neighbours and Colleagues through Campusbuy.</span>
<p className='text-xl text-white'>The most reliable platform for University, Polytechnic, Monotechnic and all Tertiary Institutions Campus trading</p></div>

      </div>
<div className='w-[50%]  mt-[4rem]'><img src={randomModelImage}/></div>

      </div>
      </div>
      <div> <Minifooter/></div>
          </div>
    
  );
};

export default Firstpage;
