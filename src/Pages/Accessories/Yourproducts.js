import React, { useState } from 'react';
import { Yourproductscards } from '../../Components/Productcards';
import { Productcard } from '../../Components/Productcards';
import { Yourproductsmobilecards } from '../../Components/Productcards';
import { Mobileproductcard } from '../../Components/Productcards';
import {Card} from '../../Constants/images';

const Yourproducts = () => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheckedList, setIsCheckedList] = useState(Array(Card.length).fill(false));

  const handleMarkAllToggle = () => {
    const newIsCheckedAll = !isCheckedAll;
    setIsCheckedAll(newIsCheckedAll);
    setIsCheckedList(Array(Card.length).fill(newIsCheckedAll));
  };

  const handleCheckboxToggle = (index) => {
    const newIsCheckedList = [...isCheckedList];
    newIsCheckedList[index] = !newIsCheckedList[index];
    setIsCheckedList(newIsCheckedList);
    setIsCheckedAll(newIsCheckedList.every((isChecked) => isChecked));
  };

  return (
    <div>
      <div className='max-lg:hidden'>
      <div className='text-2xl text-bold my-4  '>
        <h1>Yourproducts</h1>
      </div>
      <div className='flex justify-between m-2 px-2 py-4  max-lg:m-0 max-lg:p-0' style={{ borderBottom: '1px solid #C0C9BB' }}>
        <div className='flex gap-3'>
          <input type="checkbox" checked={isCheckedAll} onChange={handleMarkAllToggle} />
          <button>Mark all</button>
        </div>
        <button className='p-2 m-2 btn-danger rounded-md border'>Delete</button>
      </div>
      <div className='flex flex-col gap-3 m-2 px-2 py-4  max-lg:m-0 max-lg:p-0'>
        <Yourproductscards isCheckedList={isCheckedList} onCheckboxToggle={handleCheckboxToggle} />
      </div>

      <div className='container mt-6'>
         <div className='w-[100%] my-4 text-4xl text-center max-lg:m-0 max-lg:text-xl  trending-products'>
         <h2>Other products you might like</h2>
       </div>
       <div className='flex-wrap flex justify-center'> <Productcard/></div>
            </div>
      </div>

      <div className='hidden max-lg:block'>
      <div className='text-2xl text-bold my-4  '>
        <h1>Yourproducts</h1>
      </div>
      <div className='flex justify-between m-2  py-4  ' style={{ borderBottom: '1px solid #C0C9BB' }}>
        <div className='flex gap-3'>
          <input type="checkbox" checked={isCheckedAll} onChange={handleMarkAllToggle} />
          <button>Mark all</button>
        </div>
        <button className='p-2 m-2 btn-danger rounded-md border'>Delete</button>
      </div>
      <div className='flex flex-col gap-3   '>
        <Yourproductsmobilecards isCheckedList={isCheckedList} onCheckboxToggle={handleCheckboxToggle} />
      </div>

      <div className=' mt-6'>
         <div className='w-[100%] my-4 text-2xl text-center trending-products'>
         <h2>Other products you might like</h2>
       </div>
       <div className='flex-wrap flex justify-center'> <Mobileproductcard/></div>
            </div>

      </div>
    </div>
  );
}

export default Yourproducts;
