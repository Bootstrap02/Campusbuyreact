import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { NavLink, Link } from 'react-router-dom';
import { Firstheader } from '../Components/Subheaders';
import { Minifooter } from '../Components/Subheaders';
import axios from 'axios';
import Select from 'react-select';

const Firstpage = () => {
  const backgroundImages = [
  'https://res.cloudinary.com/dneejvhch/image/upload/v1702923189/Campusbuy/Rectangle282_jjals7.png',
'https://res.cloudinary.com/dneejvhch/image/upload/v1702923184/Campusbuy/Rectangle281_e14kee.webp',
'https://res.cloudinary.com/dneejvhch/image/upload/v1702923224/Campusbuy/Rectangle284_nwr2av.jpg',
'https://res.cloudinary.com/dneejvhch/image/upload/v1702923226/Campusbuy/Rectangle283_cg0ya0.jpg'
];
  const [randomImage, setRandomImage] = useState('');
  const modelImages = [
'https://res.cloudinary.com/dneejvhch/image/upload/v1702967639/Campusbuy/Rectangle_290_nlqol3.png',
'https://res.cloudinary.com/dneejvhch/image/upload/v1702967639/Campusbuy/Rectangle_291_yilcyz.png',
'https://res.cloudinary.com/dneejvhch/image/upload/v1702967639/Campusbuy/Rectangle_288_mvlnvq.png',
'https://res.cloudinary.com/dneejvhch/image/upload/v1702967639/Campusbuy/Rectangle_292_jimjt4.png',
'https://res.cloudinary.com/dneejvhch/image/upload/v1702967638/Campusbuy/Rectangle_289_hvqdza.png',
'https://res.cloudinary.com/dneejvhch/image/upload/v1702923187/Campusbuy/Rectangle278_mhr17c.png'
];

const [universities, setUniversities] = useState([])
  const [randomModelImage, setRandomModelImage] = useState('');
  const API_KEY = 'https://bootstrapnode.cyclic.app/getuniversities'

  const dispatch = useDispatch()
  const getSchools = (university)=> dispatch({ type:'GET_UNIVERSITIES', schools : university })

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setRandomImage(backgroundImages[randomIndex]);
  
    const modelIndex = Math.floor(Math.random() * modelImages.length);
    setRandomModelImage(modelImages[modelIndex]);
  
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(API_KEY);
        setUniversities(response.data);
        getSchools(response.data); // Pass the updated data directly
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching universities:', error);
        // Handle error as needed
      }
    };
  
    fetchUniversities();
  }, []);
  
  const [selectedOption, setSelectedOption] = useState(null);



  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

const allUniversities= useSelector(state => state.schools.universities)

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
        <div className='text-white'>
          <Firstheader />
        </div>
        <div><NavLink className='text-white text-bold' to='/signin'>Sign up/Sign in</NavLink></div>
      </div>
      <div className='flex justify-between items-center max-lg:hidden'>
      <div className='w-[60%] mt-[-6rem]'>
        
        <div className="search-container flex w-[100%]">
      <Select className='w-[100%]  rounded-md border-2 border-black'
        value={selectedOption}
        onChange={handleChange}
        options={allUniversities.map((university) => ({
          value: university.fullname,
          label: university.fullname,
        }))}
        placeholder="Search for..."
        isClearable
      />
<NavLink to='/home'><button className="search-button p-2 bg-[#FFD700] border-2 rounded-md border-black" onClick={() => console.log(selectedOption)}>Search</button>
</NavLink></div>
        <div className='m-4 mt-[2rem] flex flex-col gap-4 '>
          <span className='text-4xl text-bold text-[#D27681]'>
            do business with your neighbours and colleagues through campusbuy.
          </span>
          <p className='text-xl text-white'>
            the most reliable platform for university, polytechnic, monotechnic, and all tertiary institutions campus trading
          </p>
        </div>
      </div>
      <div className='w-[35%]'><img src={randomModelImage} alt='random model' /></div>
    </div>

      

      <div className='hidden max-lg:block'>
      <div className='flex  justify-between  p-3'>
      <div className='flex flex-col gap-1 '>
          <NavLink to='/'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={50} alt='logo'/></NavLink>
       <p><strong className='text-[#363D94]'>Campusbuy</strong></p>
        </div>
        <div>
          <Firstheader />
        </div>
        <div><NavLink to='/signin' className='text-white text-bold' >Sign up/Sign in</NavLink></div>
      </div>
      
      <div className='flex flex-col justify-center gap-4 items-center  p-2'>
      <div className='mt-[4rem]'>
      <div className='w-[100%] '><div className="search-container flex w-[100%]">
      <Select className='w-[100%]  rounded-md border-2 border-black'
        value={selectedOption}
        onChange={handleChange}
        options={allUniversities.map((university) => ({
          value: university.fullname,
          label: university.fullname,
        }))}
        placeholder="Search for..."
        isClearable
      />
<NavLink to='/home'><button className="search-button p-2 bg-[#FFD700] border-2 rounded-md border-black" onClick={() => console.log(selectedOption)}>Search</button>
</NavLink></div></div>
<div className='  mt-[3rem] flex flex-col gap-4 '><span className='text-[2rem] text-bold text-[#D27681]'>do business with your neighbours and colleagues through campusbuy.</span>
<p className='text-xl text-white'>the most reliable platform for university, polytechnic, monotechnic and all tertiary institutions campus trading</p></div>

      </div>
<div className='w-[50%]  my-[4rem]'><img src={randomModelImage}/></div>

      </div>
      </div>
      <div> <Minifooter/></div>
          </div>
    
  );
};

export default Firstpage;

