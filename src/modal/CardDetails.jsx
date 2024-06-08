import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, } from "react-icons/fa";
import { BodyOne, Title } from "../screens/articles/components/CustomComponents";
import { IoClose } from 'react-icons/io5';

const RenderRatingStars = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfstars = rating % 1 !== 0;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} color="#ff8a00" />);
    } else if (hasHalfstars && i === fullStars + 1) {
      stars.push(<FaStarHalfAlt key="half-star" color="#ff8a00" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ff8a00" />);
    }
  }
  return stars;
};

const CardDetails = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  const { images, id, discount, title, rating, price, description, category } = product;

  return (
    <div className="overlay-bg " onClick={onClose}>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content flex justify-between" onClick={(e) => e.stopPropagation()}>
          <div className="w-1/2 h-[500px] overflow-hidden">
            {images.slice(0, 1).map((cover, index) => (
              <img key={index} src={cover?.image} alt={id} className="modal-image w-full h-full object-cover" />
            ))}
          </div>
          <div className="modal-details w-1/2 h-[500px] overflow-y-scroll p-9">
            <button className="feature-btn bg-indigo-500">
              SALE {discount}% OFF
            </button>
            <Title level={2}>{title}</Title>
            <div className="flex items-center gap-1 -mt-2">
              {RenderRatingStars(rating)}
            </div>
            {price.slice(0, 1).map((priceItem, index) => (
              <div className="flex items-center gap-3" key={index}>
                <BodyOne className="line-through mt-4">
                  {priceItem.value}DA
                </BodyOne>
                <Title className="text-primary-green">
                  {(priceItem.value - (priceItem.value * discount) / 100).toFixed(2)}DA
                </Title>
              </div>
            ))}
            <BodyOne className="text-sm leading-6">{description}</BodyOne>
            <div className="flex items-center gap-3">
              {/* <input
                type="text"
                value="1"
                className="w-1/2 h-12 text-primary outline-none border-2 border-primary px-4"
              /> */}
              {/* <button className="primary-btn">ADD TO CART</button> */}
            </div>
            {/* <hr className="my-5" />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Title level={5} className="text-lg">
                  category:
                  <span className='font-normal'>Wooden Product</span>
                </Title>
              </div>
              <div className="flex items-center gap-3">
                <Title level={5} className="text-lg">
                  Tag : <span className='font-normal'>Wooden</span>
                </Title>
              </div>
              <div className="flex items-center gap-3">
                <Title level={5} className="text-lg">
                  Share : 
                </Title>
                <div className='flex items-center -mt-1 gap-3'>
                  <FaFacebookF/>
                  <AiFillInstagram/>
                  <FaTwitter/>
                </div>
              </div>
            </div>   */}

            {/* <button className='close-btn absolute top-0 right-0 w-12 h-12 flex justify-center items-center bg-primary-green text-white '
            onClick={closeModal}>
              <IoClose size={20}/>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
