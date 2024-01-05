import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'; 
import Select from 'react-select';
import axios from 'axios';
import { MdAccountCircle } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";



const Account = () => {
const navigate = useNavigate();
  const [universities, setUniversities] = useState([])
  const API_KEY = 'https://campusbuy.onrender.com/getuniversities'

  const dispatch = useDispatch()
  const getSchools = (university)=> dispatch({ type:'GET_UNIVERSITIES', schools : university })

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(API_KEY);
        setUniversities(response.data);
        getSchools(response.data); // Pass the updated data directly
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


  const UPDATE_ACCOUNT_API_KEY = 'https://campusbuy.onrender.com/updateuser'
  const DELETE_USER_API_KEY = 'https://campusbuy.onrender.com/deleteuser'

  

  const Signout= async() => {
    try{
     await localStorage.removeItem('userData');
      navigate('/');

    }catch (error){
      console.error('Error signing out Account:', error);
    }
    
  }

  const { id } = useParams();
  const storedUserData = JSON.parse(localStorage.getItem('userData'));  



  // Create an Axios instance with default headers
  const axiosInstance = axios.create({
    baseURL: 'https://campusbuy.onrender.com', // Replace with your API base URL
    headers: {
      'Content-Type': 'application/json',
      // Other default headers can be added here
    },
  });
  
  // Function to set JWT token in the headers
  const setAuthToken = (token) => {
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common['Authorization'];
    }
  };
  
  // Use this function to set the token when the user logs in or the token is available
  setAuthToken(storedUserData.accessToken);
  
  // Now, you can use axiosInstance for your requests with the token included in the headers
  
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const userData = {};
      formData.forEach((value, key) => {
        userData[key] = value;
      });
  
      const response = await axiosInstance.put(`${UPDATE_ACCOUNT_API_KEY}/${storedUserData.id}`, userData);
  
      // Log the parsed user data
      console.log(response.data);
  
    } catch (error) {
      console.error('Error updating your account:', error);
      // Handle error as needed
    }
  };
  
  const deleteAccount = async()=> {
    try {
        const response = await axiosInstance.delete(`${DELETE_USER_API_KEY}/${storedUserData.id}`)
        console.log(response)
    } catch (error) {
        console.error('Error deleting your account:', error);
        // Handle error as needed
    }
  }

    const sexOptions = [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
      { value: 'preferNotToSay', label: 'Prefer not to say' },
    ];


  return (
    <div className=' w-full '>
      <div className='max-lg:hidden '>
      <div className='flex justify-center relative'>
    <MdAccountCircle className='w-[20%] h-[15%]' />
    <MdModeEdit
      className='mb-2 mr-2 w-[20%] h-[20%]'
      style={{ color: 'orange', zIndex: 500, position: 'absolute', bottom: '3%', right: '35%' }}
    />
  </div>

    <div><form onSubmit={updateUser} className='flex flex-col gap-4 m-2 p-2 border border-gray-400 rounded-[10px]  max-lg:m-0 max-lg:p-0'>
      <input type='text' placeholder='Firstname' name='firstname' className='p-2 m-2  border border-gray-400'/>
      <input type='text' placeholder='Lastname' name='lastname' className='p-2 m-2  border border-gray-400'/>
      <input type='text' placeholder='Email address' name='email' className='p-2 m-2  border border-gray-400'/>
      <input type='text' placeholder='Main Phone Number' name='mobile' className='p-2 m-2  border border-gray-400'/>
      <input type='text' placeholder='Second Phone Number' name='mobile2' className='p-2 m-2  border border-gray-400'/>
      <input type='text' name='password' placeholder='Password' className='p-2 m-2  w-full inline-block border border-gray-400'/>
      <div className='flex justify-between'>
      <div className="w-[100%]">
      <Select           
      name='university' 
      className="form-control p-2 m-2 border max-lg:m-0 max-lg:p-0 border-gray-400"
        value={selectedOption}
        onChange={handleChange}
        options={allUniversities.map((university) => ({
          value: university.fullname,
          label: university.fullname,
        }))}
        placeholder="Search for your School..."
        isClearable
      />
</div>
<div className="input-group mb-3">
        <Select
        name='sex' 
          className="form-control p-2 m-2 border max-lg:m-0 max-lg:p-0 border-gray-400"
          options={sexOptions}
          placeholder='Select Gender'
          isClearable
        />
      </div>
</div>

<div><button className='p-2 m-2 btn-success border rounded-md  max-lg:m-0 max-lg:p-0'>Save Changes</button></div>
      </form></div>
      <div className='flex justify-between m-2 p-2  max-lg:m-0 max-lg:p-0'><button onClick={Signout} className='p-2 m-2 btn-danger rounded-md'>Logout</button>
      <button onClick={deleteAccount} className='p-2 m-2  max-lg:m-0 max-lg:p-0 btn-danger rounded-md border'>Delete Account</button></div>
      </div>



      <div className='hidden max-lg:block w-[100%] text-[10px]'>
      <div className='flex justify-center relative'>
    <MdAccountCircle className='w-[20%] h-[15%]' />
    <MdModeEdit
      className='mb-2 mr-2 w-[20%] h-[20%]'
      style={{ color: 'orange', zIndex: 500, position: 'absolute', bottom: '3%', right: '35%' }}
    />
  </div>

    <div className='w-full'><form onSubmit={updateUser} className='flex flex-col gap-4 m-2 p-2 border border-gray-400 rounded-[10px]  max-lg:m-0 max-lg:p-0'>
      <input type='text' placeholder='Firstname' name='firstname' className='p-2   border border-gray-400'/>
      <input type='text' placeholder='Lastname' name='lastname' className='p-2   border border-gray-400'/>
      <input type='text' placeholder='Email address' name='email' className='p-2   border border-gray-400'/>
      <input type='text' placeholder='Main Phone Number' name='mobile' className='p-2   border border-gray-400'/>
      <input type='text' placeholder='Second Phone Number' name='mobile2' className='p-2   border border-gray-400'/>
      <input type='text' name='password' placeholder='Password' className='p-2   w-full inline-block border border-gray-400'/>
      <div>
      <div className="w-[100%]">
      <Select           
      name='university' 
      className="form-control   border  border-gray-400"
        value={selectedOption}
        onChange={handleChange}
        options={allUniversities.map((university) => ({
          value: university.fullname,
          label: university.fullname,
        }))}
        placeholder="Search for your School..."
        isClearable
      />
</div>
<div className="input-group mb-3">
        <Select
        name='sex' 
          className="form-control  border  border-gray-400"
          options={sexOptions}
          placeholder='Select Gender'
          isClearable
        />
      </div>
</div>

<div><button className='p-1  btn-success border rounded-md  '>Save Changes</button></div>
      </form></div>
      <div className='flex justify-between  p-2  '><button  onClick={Signout} className='p-1 text-[10px] btn-danger rounded-md'>Logout</button>
      <button onClick={deleteAccount}  className='p-1   btn-danger rounded-md border text-[10px]'>Delete Account</button></div>
      </div>

    </div>
  )
}

export default Account





