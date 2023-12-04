// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import Products from '../Constants/Hardjson';
// import { TbCurrencyNaira } from "react-icons/tb"

// const Productcards = () => {
//     const Productcard = Products.map((Product) => {
//         return (
           
//             <div className='product-card col-md-3 col-6 m-3 p-3' key={Product._id}>
//             <div className="card mb-3" >
//               <div className='card-person'>{Product.person}</div>
//     <img src={Product.image_1} className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">{Product.title}</h5>
//       <p className="card-text">{Product.description}</p>
//       <div className='product-price d-flex gap-2 align-items-center'>
//       <TbCurrencyNaira  className='naira'/>
//         <h3 className="card-price-text">{Product.price}</h3>
//       </div>
//       <p className="card-location"><strong>Location:</strong> {Product.location}</p>
//       <p className="card-brand"><strong>Brand:</strong> {Product.brand}</p>
//       <p className="card-brand"><strong>Condition:</strong> {Product.condition}</p>
//       <NavLink to='/product' className="btn btn-primary">View Product</NavLink>

//     </div>
//             </div>
//            </div>
//         )
//     })
//   return (
//     Productcard
//   )
// }

// export default Productcards

import React from 'react';
import { NavLink } from 'react-router-dom';
import Products from '../Constants/Hardjson';
import { TbCurrencyNaira } from 'react-icons/tb';

const truncateDescription = (description, wordLimit) => {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return description;
};

const Productcards = () => {
  const Productcard = Products.map((Product) => {
    const truncatedDescription = truncateDescription(Product.description,25);

    return (
      <div className='product-card col-md-3 col-6 m-3 p-3' key={Product._id}>
        <div className="card mb-3">
          <div className='card-person'>{Product.person}</div>
          <img src={Product.image_1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Product.title}</h5>
            <p className="card-text">{truncatedDescription}</p>
            <div className='product-price d-flex gap-2 align-items-center'>
              <TbCurrencyNaira className='naira' />
              <h3 className="card-price-text">{Product.price}</h3>
            </div>
            <p className="card-location"><strong>Location:</strong> {Product.location}</p>
            <p className="card-brand"><strong>Brand:</strong> {Product.brand}</p>
            <p className="card-brand"><strong>Condition:</strong> {Product.condition}</p>
            <NavLink to='/product' className="btn btn-primary">View Product</NavLink>
          </div>
        </div>
      </div>
    );
  });

  return Productcard;
};

export default Productcards;
