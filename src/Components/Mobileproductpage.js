import React, {useState} from "react";
import { useParams } from 'react-router-dom';
import { Callbackmodals, Messagemodals } from './Productmodals';

import { TbCurrencyNaira } from 'react-icons/tb';
import { MdCancel } from 'react-icons/md';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import images from "../Constants/images";

const Mobileproductpage = () => {

    const [modals, setModals] = useState(false);
  const [callbackModals, setCallbackModals] = useState(false);

  // Separate state variables for success messages
  const [successMessage, setSuccessMessage] = useState(false);
  const [callbackSuccessMessage, setCallbackSuccessMessage] = useState(false);

  const openSuccessMessage = () => {
    setSuccessMessage('message sent!');
  };

  const closeSuccessMessage = () => {
    setSuccessMessage(false);
  };

  const openCallbackSuccessMessage = () => {
    setCallbackSuccessMessage('Call request sent!');
  };

  const closeCallbackSuccessMessage = () => {
    setCallbackSuccessMessage(false);
  };

  const openModals = () => {
    setModals(true);
  };

  const closeModals = () => {
    setModals(false);
  };

  const openCallbackModals = () => {
    setCallbackModals(true);
  };

  const closeCallbackModals = () => {
    setCallbackModals(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  const { title } = useParams();
  const findProduct = images.Card.find((product) => product.title === title);

  


  if (!findProduct) {
    return (
      <div>
        <h2 className="text-center">Product not found</h2>
      </div>
    );
  }
  

  return (
    <div className="container mt-[17.5rem]">
        <div>
       <div>
       
       <div className=" border border-gray-700 mb-3 ">
       <Slider {...settings}>
          {Object.values(findProduct.photos[0]).map((image, index) => (
            <div
            key={index}>
            <img
              src={image}
              alt="main_image"
            />
          </div>
          ))}
           </Slider>
        </div>
            
           
       </div>
       <div>
              <h1 className="text-center text-2xl text-black text-bold shadow-md p-2">
                {findProduct.title}
              </h1>
              <div className="m-2 flex flex-wrap gap-3 p-2 justify-center">
                <div className="m-1"><strong>Condition:</strong> {findProduct.condition}</div>
                <div className="m-1"><strong>Brand:</strong> {findProduct.brand}</div>
                <div className="m-1"><strong>Location:</strong> {findProduct.location}</div>
                <div className="m-1"><strong>Stock:</strong> {findProduct.stock}</div>
                <div className="product-price d-flex gap-2 m-1 align-items-center">
                <strong>Price:</strong>
                  <div className="text-2xl flex gap-2 text-[#5C1818]">
                    <TbCurrencyNaira className="naira" />
                    <h3 className="card-price-text text-2xl">{findProduct.price}</h3>
                  </div>
                </div>
                <div className="m-1"><strong>Sold:</strong> {findProduct.amountSold}</div>
                <div className="m-1"><strong>Description:</strong> {findProduct.description}</div>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-4 border border-red-800">
          <div className="text-center text-bold text-[#5C1818] text-2xl m-2 p-2">
            Seller Information
          </div>
          <div className="flex flex-col gap-6 my-2 justify-center w-[100%] ">
            <div className="flex gap-3 ">
              <div className="flex flex-col gap-3 justify-center ">
                <div className="flex gap-4 justify-between items-center mb-2">
                  <div className="bg-[#f5f5f5] rounded-full shadow-lg">
                    <img src={findProduct.ownerImage} width={100} alt="seller_image" />
                  </div>

                  <div>
                    <div className="text-bold text-lg">{findProduct.ownerName}</div>
                    <div className="text-sm text-gray-600">{findProduct.ownerLocation}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-center">
                  <div>
                    <h1 className="text-lg text-orange-700 underline text-center rounded-sm border inline-block">
                      Seller Phone Number
                    </h1>
                    <p className="text-[#5C1818] text-bold m-1 p-1">
                      {findProduct.phone_number_1}
                      <br />
                      {findProduct.phone_number_2}
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      className="bg-orange-700 p-2 inline-block container m-2"
                      onClick={openModals}
                    >
                      <span className="text-white">Send a Message</span>
                    </button>
                    <div>
                      {modals && <Messagemodals closeModals={closeModals} openSuccessMessage={openSuccessMessage} />}
                      {successMessage && (
                        <div className="container max-lg:w-[300px]">
                          <div className="bg-black rounded-lg flex flex-col justify-center items-center max-lg:p-2 max-lg:m-2 ">
                            <div className="flex flex-col justify-center w-full  items-center rounded-lg border-2 border-[#B59410] max-lg:p-4">
                              <button className="bg-white ml-auto" onClick={closeSuccessMessage}>
                              <MdCancel className="ml-auto w-[30px] h-[30px] bg-black text-white" />
                              </button>
                              <p className="text-white font-black text-center text-xl mb-2">{successMessage}</p>
                              <img src={images.picture.sent} width={20} alt="success_image" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="bg-orange-700 p-2 inline-block m-2 w-full"
                      onClick={openCallbackModals}
                    >
                      <span className="text-white">Request for a Call</span>
                    </button>
                    <div>
                      {callbackModals && (
                        <Callbackmodals
                          closeCallbackModals={closeCallbackModals}
                          openCallbackSuccessMessage={openCallbackSuccessMessage}
                        />
                      )}
                      {callbackSuccessMessage && (
                        <div className="container max-lg:w-[300px]">
                          <div className="bg-black rounded-lg flex flex-col justify-center items-center  max-lg:p-2 max-lg:m-2 ">
                            <div className="flex flex-col justify-center w-full  items-center rounded-lg border-2 border-[#B59410] p-8 max-lg:p-4">
                              <button className="bg-white ml-auto" onClick={closeCallbackSuccessMessage}>
                                <MdCancel className="ml-auto w-[30px] h-[30px]  bg-black text-white" />
                              </button>
                              <p className="text-white font-black text-center text-xl mb-2">
                                {callbackSuccessMessage}
                              </p>
                              <img src={images.picture.sent} width={20} alt="success_image" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg text-orange-700 underline text-bold text-center m-2 p-2">
                    Safety Tips
                  </h1>
                  <ul className="flex flex-col gap-2">
                    <li className="p-2">Never pay in advance, even for delivery</li>
                    <li className="p-2">Always meet with the seller at a safe public place</li>
                    <li className="p-2">Never hurry. Take your time when buying</li>
                    <li className="p-2">Inspect the item thoroughly and ensure it's exactly what you want</li>
                    <li className="p-2">Pay only when you're satisfied</li>
                    <li className="p-2">Keep in touch with the seller</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )

 
}

export default Mobileproductpage