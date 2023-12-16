import React, { useState } from 'react';
import { Message } from '../../Constants/images';

const Messages = () => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheckedList, setIsCheckedList] = useState(Array(Message.length).fill(false));

  const handleMarkAsReadToggle = () => {
    const newIsCheckedAll = !isCheckedAll;
    setIsCheckedAll(newIsCheckedAll);
    setIsCheckedList(Array(Message.length).fill(newIsCheckedAll));
  };

  const handleCheckboxToggle = (index) => {
    const newIsCheckedList = [...isCheckedList];
    newIsCheckedList[index] = !newIsCheckedList[index];
    setIsCheckedList(newIsCheckedList);
    setIsCheckedAll(newIsCheckedList.every((isChecked) => isChecked));
  };

  return (
    <div className='container'>
     <div className=' max-lg:hidden'>
     <div className='text-2xl font-bold my-4 border shadow-md inline-block w-full  max-lg:text-xl'>
        <h1>Messages</h1>
      </div>
      <div className='flex gap-3 m-2 px-2 py-4  max-lg:m-0 max-lg:p-0' style={{ borderBottom: '1px solid #C0C9BB' }}>
        <input type="checkbox" checked={isCheckedAll} onChange={handleMarkAsReadToggle} />
        <button>Mark as Read</button>
      </div>
      <div className='flex gap-3 m-2 p-2 w-[100%]  max-lg:m-0 max-lg:p-0'>
        <div className='w-[100%]'>
          {Message.map((notice, index) => (
            <div key={index} className='flex gap-4 my-3 items-center bg-#C0C9BB' style={{ borderBottom: '1px solid #C0C9BB' }}>
              <div><input type="checkbox" checked={isCheckedList[index]} onChange={() => handleCheckboxToggle(index)} /></div>
              <div className='flex gap-3 items-center mb-3'>
                <img src={notice.image} width={70} />
                <div>
                  <div><strong>{notice.name}</strong></div>
                  <div><strong>{notice.title}</strong> Check Now!</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>

     <div className='hidden max-lg:block'>
     <div className='text-xl font-bold my-4 border shadow-md inline-block w-full '>
        <h1>Messages</h1>
      </div>
      <div className='flex gap-3  ' style={{ borderBottom: '1px solid #C0C9BB' }}>
        <input type="checkbox" checked={isCheckedAll} onChange={handleMarkAsReadToggle} />
        <button>Mark All as Read</button>
      </div>
      <div className='flex gap-3  w-[100%]  '>
        <div className='w-[100%]'>
          {Message.map((notice, index) => (
            <div key={index} className='flex  my-3 gap-3 items-center justify-start bg-#C0C9BB' style={{ borderBottom: '1px solid #C0C9BB' }}>
              <div><input type="checkbox" checked={isCheckedList[index]} onChange={() => handleCheckboxToggle(index)} /></div>
              <div className='flex gap-3 items-center mb-3'>
                <img src={notice.image} width={50} />
                <div>
                  <div><strong>{notice.name}</strong></div>
                  <div>{notice.title} <strong> Check Now!</strong></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
    </div>
  );
}

export default Messages;

