import React from 'react';
import { MdCancel } from "react-icons/md";

export const Postproduct = ({ closeModals, openSuccessMessage }) => {
    
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Product posted successfully!");
      closeModals();
      openSuccessMessage();
    } catch (error) {
      console.error("Callback sending failed:", error);
      // Handle error (show an error message to the user, etc.)
    }
  };

  return (
    <div className="container border">
        <div className='w-[100%] max-lg:hidden'>
        <div className="p-3 flex justify-between  w-[100%] items-center text-white my-3 shadow-lg shadow-gray-700 ">
          <h3>Input product details</h3>
          <h1 className='text-4xl text-bold text-green-700'>Your Product</h1>
          <MdCancel onClick={closeModals} className=" w-[30px] h-[30px] sell-product-cancel-button" />
        </div>

      <form onSubmit={handleFormSubmit} className="w-[100%] flex flex-col  text-white gap-3 py-3 ">

<div className='flex flex-col gap-3 w-[100%] my-3'>
<div className="w-[100%] flex gap-2 rounded-sm border-2 border-[#FFD700] items-center pl-2">
           <label><h3><strong>Product title</strong></h3></label>
          <input className="border text-black border-gray-600 w-[100%] inline-block p-2" type="text" placeholder="Your Product Name" />
        </div>
        <div className="w-[100%] flex gap-2 rounded-sm border-2 border-[#FFD700] items-center pl-2">
            <label><strong>Product description</strong></label>
          <textarea className="border text-black border-gray-600 w-[100%] inline-block p-4" type="text" placeholder="Your Product Name" />
        </div>
</div>
        

        <div className="w-[100%] flex justify-between my-3 ">

           <div className='flex m-2 p-1  border-2 border-[#FFD700] rounded-sm'>
           <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01"><strong>Category</strong></label>
  </div>
  <select className="custom-select text-black" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
           </div>

           <div className='flex m-2 p-1  border-2 border-[#FFD700] rounded-sm'>
           <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01"><strong>Condition</strong></label>
  </div>
  <select className="custom-select text-black" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
           </div>

           <div className='flex m-2 p-1  border-2 border-[#FFD700] rounded-sm'>
           <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01"><strong>Person</strong></label>
  </div>
  <select className="custom-select text-black" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
           </div>
        </div>

        <div className="w-[100%] flex justify-between my-3 ">

        <div className=" flex flex-col gap-1">
            <label><strong>Price</strong></label>
          <input className=" text-black  border-2 border-[#FFD700] rounded-sm  w-[100%] inline-block p-2" type="text" placeholder="Product Price" />
        </div>

        <div className=" flex flex-col gap-1">
            <label><strong>Product Brand</strong></label>
          <input className=" text-black  border-2 border-[#FFD700] rounded-sm  w-[100%] inline-block p-2" type="text" placeholder="Product Brand" />
        </div>

        <div className=" flex flex-col gap-1">
            <label><strong>Location</strong></label>
          <input className=" text-black  border-2 border-[#FFD700] rounded-sm  w-[100%] inline-block p-2" type="text" placeholder="eg. Maingate" />
        </div>

</div>

<div className="w-[100%] flex justify-between my-3">

<div className='flex m-2 p-1  border-2 border-[#FFD700] rounded-sm'>
<div class="input-group-prepend">
<label class="input-group-text" for="inputGroupSelect01"><strong>Number of Stock</strong></label>
</div>
<select className="custom-select text-black" id="inputGroupSelect01">
<option selected>Choose...</option>
<option value="1">1 - 10</option>
<option value="2">10 - 50</option>
<option value="3">50 and above</option>
</select>
</div>

<div className='flex m-2 p-1  border-2 border-[#FFD700] rounded-sm'>
<div class="input-group-prepend">
<label class="input-group-text" for="inputGroupSelect01"><strong>Color</strong></label>
</div>
<select className="custom-select text-black" id="inputGroupSelect01">
<option selected>Choose...</option>
<option value="1">Red</option>
<option value="2">Black</option>
<option value="3">White</option>
</select>
</div>

<div className='flex m-2 p-1  border-2 border-[#FFD700] rounded-sm'>
<div class="input-group-prepend">
<label class="input-group-text" for="inputGroupSelect01"><strong>Faults</strong></label>
</div>
<select className="custom-select text-black" id="inputGroupSelect01">
<option selected>Choose...</option>
<option value="1">None</option>
<option value="2">One</option>
<option value="3">Two</option>
<option value="4">Three</option>
</select>
</div>

<div className='flex m-2 p-1  border-2 border-[#FFD700] rounded-sm'>
<div class="input-group-prepend">
<label class="input-group-text" for="inputGroupSelect01"><strong>Age</strong></label>
</div>
<select className="custom-select text-black" id="inputGroupSelect01">
<option selected>Choose...</option>
<option value="1">New</option>
<option value="2">Less than 6 Months</option>
<option value="3">less than 1 Year</option>
<option value="4"> 2 Years</option>
<option value="5">Three Years</option>
<option value="6">Above</option>
</select>
</div>

</div>

<div className="w-[100%] flex justify-between my-3">

<div className=" flex flex-col gap-1">
    <button className='p-2 bg-black border-2 border-[#FFD700]'><strong>Image_1</strong></button>
</div>

<div className=" flex flex-col gap-1">
<button className='p-2 bg-black border-2 border-[#FFD700]'><strong>Image_2</strong></button>
</div>

<div className=" flex flex-col gap-1">
<button className='p-2 bg-black border-2 border-[#FFD700]'><strong>Image_3</strong></button>
</div>

<div className=" flex flex-col gap-1">
<button className='p-2 bg-black border-2 border-[#FFD700]'><strong>Image_4</strong></button>
</div>

</div>

<div className="w-[100%] my-3 ">
            <label><strong className='text-xl'>Any other product Details</strong></label>
          <textarea className="rounded-sm border-2 border-[#FFD700]  text-black  w-[100%] inline-block p-4" type="text" placeholder="Your Product Name" />
        </div>

        <div className='text-2xl  w-[100%] inline-block p-4 text-center border-2 border-[#FFD700] bg-black rounded-sm text-white'><strong>Your Personal Information</strong></div>

        <div className="w-[100%] flex  gap-5 my-3">

<div className=" flex flex-col gap-1 w-full">
    <label><strong>Your Name</strong></label>
  <input className=" text-black rounded-sm border-2 border-[#FFD700] w-[100%] inline-block p-2" type="text" placeholder="Add your name" />
</div>

<div className=" flex flex-col gap-1 w-full">
    <label><strong>Your Location</strong></label>
  <input className=" text-black rounded-sm border-2 border-[#FFD700] w-[100%] inline-block p-2" type="text" placeholder="Add your location" />
</div>
</div>


<div className="w-[100%] flex justify-between my-3">

<div className=" flex flex-col gap-1">
    <label><strong>Phone Number_1</strong></label>
  <input className=" text-black rounded-sm border-2 border-[#FFD700]  w-[100%] inline-block p-2" type="text" placeholder="Your first phone number" />
</div>

<div className=" flex flex-col gap-1">
    <label><strong>Phone Number_2</strong></label>
  <input className=" text-black rounded-sm border-2 border-[#FFD700]  w-[100%] inline-block p-2" type="text" placeholder="Your second phone number" />
</div>

<div className=" flex flex-col gap-1">
    <label><strong>Number of sold</strong></label>
  <input className=" text-black rounded-sm border-2 border-[#FFD700]  w-[100%] inline-block p-2" type="text" placeholder="number of sold items" />
</div>

</div>

<div className="">
<button className='p-2 bg-black rounded-sm border-2 border-[#FFD700] '><strong>Add Your Photo</strong></button>
</div>
        <div>
        <button className="border-2 bg-green-700 p-2 inline-block w-full m-2"><strong>Post Product</strong></button>
        </div>
       
      </form>
        </div>



        <div className='hidden max-lg:block'>
        <div className="p-1 flex justify-between  w-[100%] items-center text-white my-3 shadow-lg shadow-gray-700 ">
          <h3 className='text-[10px]'>Input product details</h3>
          <h1 className='text-2xl text-bold text-green-700'>Your Product</h1>
          <MdCancel onClick={closeModals} className=" w-[20px] h-[20px] sell-product-cancel-button" />
        </div>

      <form onSubmit={handleFormSubmit} className="w-[100%] flex flex-col  text-white gap-3 py-1 ">

<div className='flex flex-col gap-2 w-[100%] my-3'>
<div className="w-[100%] flex gap-1 rounded-sm border-2 items-center border-[#FFD700]">
           <label className='text-[8px]'><strong>Product title</strong></label>
          <input className="border text-black border-gray-600 w-[100%] inline-block p-2" type="text" placeholder="Your Product Name" />
        </div>
        <div className="w-[100%] flex gap-1 rounded-sm border-2 items-center border-[#FFD700]">
            <label className='text-[8px]'><strong>Product description</strong></label>
          <textarea className="border text-black border-gray-600 w-[100%] inline-block p-4" type="text" placeholder="Your Product Name" />
        </div>
</div>
        

        <div className="w-[100%] flex justify-between  my-3 flex-wrap ">

           <div className='flex flex-col  p-1  border-2 border-[#FFD700] rounded-sm'>
           <div class="input-group-prepend">
    <label className='text-[8px]' class="input-group-text" for="inputGroupSelect01"><strong>Category</strong></label>
  </div>
  <select className="custom-select text-black" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
           </div>

           <div className='flex flex-col  p-1  border-2 border-[#FFD700] rounded-sm'>
           <div class="input-group-prepend">
    <label className='text-[8px]' class="input-group-text" for="inputGroupSelect01"><strong>Condition</strong></label>
  </div>
  <select className="custom-select text-black" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
           </div>

           <div className='flex flex-col p-1  border-2 border-[#FFD700] rounded-sm'>
           <div class="input-group-prepend">
    <label className='text-[8px]' class="input-group-text" for="inputGroupSelect01"><strong>Person</strong></label>
  </div>
  <select className="custom-select text-black" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
           </div>
        </div>

        <div className="w-[100%] flex flex-wrap justify-between my-3">

        <div className=" flex flex-col gap-1">
            <label className='text-[8px]'><strong>Price</strong></label>
          <input className=" text-black  border-2 border-[#FFD700] rounded-sm  w-[100%] inline-block p-2" type="text" placeholder="Product Price" />
        </div>

        <div className=" flex flex-col gap-1">
            <label className='text-[8px]'><strong>Product Brand</strong></label>
          <input className=" text-black  border-2 border-[#FFD700] rounded-sm  w-[100%] inline-block p-2" type="text" placeholder="Product Brand" />
        </div>

        <div className=" flex flex-col gap-1">
            <label className='text-[8px]'><strong>Location</strong></label>
          <input className=" text-black  border-2 border-[#FFD700] rounded-sm  w-[100%] inline-block p-2" type="text" placeholder="eg. Maingate" />
        </div>

</div>

<div className="w-[100%] flex flex-wrap justify-between my-3">

<div className='flex  p-1  border-2 border-[#FFD700] rounded-sm'>
<div class="input-group-prepend">
<label className='text-[8px]' class="input-group-text" for="inputGroupSelect01"><strong>Number of Stock</strong></label>
</div>
<select className="custom-select text-black" id="inputGroupSelect01">
<option selected>Choose...</option>
<option value="1">1 - 10</option>
<option value="2">10 - 50</option>
<option value="3">50 and above</option>
</select>
</div>

<div className='flex  p-1  border-2 border-[#FFD700] rounded-sm'>
<div class="input-group-prepend">
<label className='text-[8px]' class="input-group-text" for="inputGroupSelect01"><strong>Color</strong></label>
</div>
<select className="custom-select text-black" id="inputGroupSelect01">
<option selected>Choose...</option>
<option value="1">Red</option>
<option value="2">Black</option>
<option value="3">White</option>
</select>
</div>

<div className='flex  p-1  border-2 border-[#FFD700] rounded-sm'>
<div class="input-group-prepend">
<label className='text-[8px]' class="input-group-text" for="inputGroupSelect01"><strong>Faults</strong></label>
</div>
<select className="custom-select text-black" id="inputGroupSelect01">
<option selected>Choose...</option>
<option value="1">None</option>
<option value="2">One</option>
<option value="3">Two</option>
<option value="4">Three</option>
</select>
</div>

<div className='flex  p-1  border-2 border-[#FFD700] rounded-sm'>
<div class="input-group-prepend">
<label className='text-[8px]' class="input-group-text" for="inputGroupSelect01"><strong>Age</strong></label>
</div>
<select className="custom-select text-black" id="inputGroupSelect01">
<option selected>Choose...</option>
<option value="1">New</option>
<option value="2">Less than 6 Months</option>
<option value="3">less than 1 Year</option>
<option value="4"> 2 Years</option>
<option value="5">Three Years</option>
<option value="6">Above</option>
</select>
</div>

</div>

<div className="w-[100%] flex flex-wrap justify-between my-3">

<div className=" flex flex-col gap-1">
    <button className='p-2 bg-black border-2 border-[#FFD700]'><strong>Image_1</strong></button>
</div>

<div className=" flex flex-col gap-1">
<button className='p-2 bg-black border-2 border-[#FFD700]'><strong>Image_2</strong></button>
</div>

<div className=" flex flex-col gap-1">
<button className='p-2 bg-black border-2 border-[#FFD700]'><strong>Image_3</strong></button>
</div>

<div className=" flex flex-col gap-1">
<button className='p-2 bg-black border-2 border-[#FFD700]'><strong>Image_4</strong></button>
</div>

</div>

<div className="w-[100%] my-3 ">
            <label className='text-[8px]'><strong className='text-lg'>Any other product Details</strong></label>
          <textarea className="rounded-sm border-2 border-[#FFD700]  text-black  w-[100%] inline-block p-4" type="text" placeholder="Your Product Name" />
        </div>

        <div className='text-xl  w-[100%] inline-block p-2 text-center border-2 border-[#FFD700] bg-black rounded-sm text-white'><strong>Your Personal Information</strong></div>

        <div className="w-[100%] flex flex-col  gap-3 my-3">

<div className=" flex flex-col gap-1 w-full">
    <label className='text-[8px]'><strong>Your Name</strong></label>
  <input className=" text-black rounded-sm border-2 border-[#FFD700] w-[100%] inline-block p-2" type="text" placeholder="Add your name" />
</div>

<div className=" flex flex-col gap-1 w-full">
    <label className='text-[8px]'><strong>Your Location</strong></label>
  <input className=" text-black rounded-sm border-2 border-[#FFD700] w-[100%] inline-block p-2" type="text" placeholder="Add your location" />
</div>
</div>


<div className="w-[100%] flex flex-wrap justify-between my-3">

<div className=" flex flex-col gap-1">
    <label><strong>Phone Number_1</strong></label>
  <input className=" text-black rounded-sm border-2 border-[#FFD700]  w-[100%] inline-block p-2" type="text" placeholder="Your first phone number" />
</div>

<div className=" flex flex-col gap-1">
    <label><strong>Phone Number_2</strong></label>
  <input className=" text-black rounded-sm border-2 border-[#FFD700]  w-[100%] inline-block p-2" type="text" placeholder="Your second phone number" />
</div>

<div className=" flex flex-col gap-1">
    <label><strong>Number of sold</strong></label>
  <input className=" text-black rounded-sm border-2 border-[#FFD700]  w-[100%] inline-block p-2" type="text" placeholder="number of sold items" />
</div>

</div>

<div className="">
<button className='p-2 bg-black rounded-sm border-2 border-[#FFD700] '><strong>Add Your Photo</strong></button>
</div>
        <div>
        <button className="border-2 bg-green-700 p-2 inline-block w-full m-2"><strong>Post Product</strong></button>
        </div>
       
      </form>
        </div>
    </div>
  );
};
