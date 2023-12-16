import React from 'react';
import { MdAccountCircle } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";



const Account = () => {
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

    <div><form className='flex flex-col gap-4 m-2 p-2 border border-gray-400 rounded-[10px]  max-lg:m-0 max-lg:p-0'>
      <input type='text' placeholder='Firstname' className='p-2 m-2  border border-gray-400'/>
      <input type='text' placeholder='Lastname' className='p-2 m-2  border border-gray-400'/>
      <input type='text' placeholder='Email address' className='p-2 m-2  border border-gray-400'/>
      <input type='text' placeholder='Main Phone Number' className='p-2 m-2  border border-gray-400'/>
      <input type='text' placeholder='Second Phone Number' className='p-2 m-2  border border-gray-400'/>
      <div className='flex gap-2'><input type='password' placeholder='Password' className='p-2 m-2  w-full inline-block border border-gray-400'/>
      <button className='p-2 m-2 btn-danger rounded-md border'>Change Password</button></div>
      <div class="input-group mb-3">
  <input type="text" className="form-control border border-gray-400 m-2 p-2  max-lg:m-0 max-lg:p-0" aria-label="Text input with dropdown button" placeholder='School eg. Unilag'/>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
      <div class="input-group mb-3">
  <input type="text" className="form-control p-2 m-2 border  max-lg:m-0 max-lg:p-0 border-gray-400" aria-label="Text input with dropdown button" placeholder='Sex'/>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Male</a></li>
    <li><a class="dropdown-item" href="#">Female</a></li>
    <li><a class="dropdown-item" href="#">Other</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Prefer not to say</a></li>
  </ul>
</div>
<div><button className='p-2 m-2 btn-success border rounded-md  max-lg:m-0 max-lg:p-0'>Save Changes</button></div>
      </form></div>
      <div className='flex justify-between m-2 p-2  max-lg:m-0 max-lg:p-0'><button className='p-2 m-2 btn-danger rounded-md'>Logout</button>
      <button className='p-2 m-2  max-lg:m-0 max-lg:p-0 btn-danger rounded-md border'>Delete Account</button></div>
      </div>



      <div className='hidden max-lg:block w-[100%] text-[10px]'>
      <div className='flex justify-center relative'>
    <MdAccountCircle className='w-[20%] h-[15%]' />
    <MdModeEdit
      className='mb-2 mr-2 w-[20%] h-[20%]'
      style={{ color: 'orange', zIndex: 500, position: 'absolute', bottom: '3%', right: '35%' }}
    />
  </div>

    <div className='w-full'><form className='flex flex-col gap-4 w-full text-[10px] p-2 border border-gray-400 rounded-[10px]  '>
      <input type='text' placeholder='Firstname' className='p-2   border border-gray-400'/>
      <input type='text' placeholder='Lastname' className='p-2   border border-gray-400'/>
      <input type='text' placeholder='Email address' className='p-2   border border-gray-400'/>
      <input type='text' placeholder='Main Phone Number' className='p-2   border border-gray-400'/>
      <input type='text' placeholder='Second Phone Number' className='p-2   border border-gray-400'/>
      <div className='flex gap-2'><input type='password' placeholder='Password' className='p-2   w-full inline-block border border-gray-400'/>
      <button className='p-2  btn-danger rounded-md border'>Change Password</button></div>
      <div class="input-group mb-3">
  <input type="text" className="form-control border border-gray-400  p-2 text-[10px]  " aria-label="Text input with dropdown button" placeholder='School eg. Unilag'/>
  <button class="btn btn-outline-secondary dropdown-toggle text-[10px]" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end text-[10px]">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
      <div class="input-group mb-3">
  <input type="text" className="form-control p-2  border text-[10px]  border-gray-400" aria-label="Text input with dropdown button" placeholder='Sex'/>
  <button class="btn btn-outline-secondary dropdown-toggle text-[10px]" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end text-[10px]">
    <li><a class="dropdown-item" href="#">Male</a></li>
    <li><a class="dropdown-item" href="#">Female</a></li>
    <li><a class="dropdown-item" href="#">Other</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Prefer not to say</a></li>
  </ul>
</div>
<div><button className='p-2  btn-success border rounded-md text-[10px]  '>Save Changes</button></div>
      </form></div>
      <div className='flex justify-between  p-2  '><button className='p-2 text-[10px] btn-danger rounded-md'>Logout</button>
      <button className='p-2    btn-danger rounded-md border text-[10px]'>Delete Account</button></div>
      </div>

    </div>
  )
}

export default Account





