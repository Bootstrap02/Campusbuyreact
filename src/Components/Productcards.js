import React from 'react';
import { NavLink } from 'react-router-dom';
import images from '../Constants/images.js';
import { TbCurrencyNaira } from 'react-icons/tb';

const truncateDescription = (description, wordLimit) => {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return description;
};

export const Productcards = () => {
  const Productcard = images.Card.map((Product) => {
    const truncatedDescription = truncateDescription(Product.description,25);

    return (
      <div className='product-card flex w-[30%] max-lg:w-[95%] max-lg:flex-col justify-center  m-3 p-3 max-lg:m-0 max-lg:p-0' key={Product._id}>
        <div className="card mb-3">
          <div className='card-person'>{Product.person}</div>
          <img src={Product.photos[0].image_1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><strong>{Product.title}</strong></h5>
            <p className="card-text">{truncatedDescription}</p>
            <div className='product-price d-flex gap-2 align-items-center'>
              <TbCurrencyNaira className='naira' />
              <h3 className="card-price-text text-2xl">{Product.price}</h3>
            </div>
            <p className="card-location"><strong>Location:</strong> {Product.location}</p>
            <p className="card-brand"><strong>Brand:</strong> {Product.brand}</p>
            <p className="card-brand"><strong>Condition:</strong> {Product.condition}</p>
            <NavLink to={`/productpage/${Product?.title}`} className="btn btn-primary">View Product</NavLink>
          </div>
        </div>
      </div>
    );
  });

  return Productcard;
};

export const Productcard = () => {
  const Productcard = images.Card.map((Product) => {
    const truncatedDescription = truncateDescription(Product.description,25);

    return (
      <div className='product-card flex w-[40%] max-lg:w-[95%] max-lg:flex-col justify-center  m-3 p-3 max-lg:m-0 max-lg:p-0' key={Product._id}>
        <div className="card mb-3">
          <div className='card-person'>{Product.person}</div>
          <img src={Product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><strong>{Product.title}</strong></h5>
            <p className="card-text">{truncatedDescription}</p>
            <div className='product-price d-flex gap-2 align-items-center'>
              <TbCurrencyNaira className='naira' />
              <h3 className="card-price-text text-2xl">{Product.price}</h3>
            </div>
            <p className="card-location"><strong>Location:</strong> {Product.location}</p>
            <p className="card-brand"><strong>Brand:</strong> {Product.brand}</p>
            <p className="card-brand"><strong>Condition:</strong> {Product.condition}</p>
            <NavLink to={`/productpage/${Product?.title}`} className="btn btn-primary">View Product</NavLink>
          </div>
        </div>
      </div>
    );
  });

  return Productcard;
};

export const Mobileproductcard = () => {
  const Productcard = images.Card.map((Product) => {
    const truncatedDescription = truncateDescription(Product.description,25);

    return (
      <div className='product-card flex w-[100%]  flex-col justify-center mb-3' key={Product._id}>
        <div className="card w-[100%] ">
          <div className='mobile-card-person'>{Product.person}</div>
        <div className='flex items-center'>
       <div className='mobile-card-img w-[80%]'> <img src={Product.image} className="card-img-top" alt="..."/></div>
          <div className="card-body">
            <h5 className="card-title"><strong>{Product.title}</strong></h5>
            <p className="card-text">{truncatedDescription}</p>
            <div className='product-price d-flex gap-2 align-items-center'>
              <TbCurrencyNaira className='naira' />
              <h3 className="card-price-text text-2xl">{Product.price}</h3>
            </div>
            <p className="card-location"><strong>Location:</strong> {Product.location}</p>
            <p className="card-brand"><strong>Brand:</strong> {Product.brand}</p>
            <p className="card-brand"><strong>Condition:</strong> {Product.condition}</p>
            <NavLink to={`/productpage/${Product?.title}`} className="btn btn-primary">View Product</NavLink>
          </div>
        </div>
        </div>
      </div>
    );
  });

  return Productcard;
};

// export default { Productcards, Productcard };
