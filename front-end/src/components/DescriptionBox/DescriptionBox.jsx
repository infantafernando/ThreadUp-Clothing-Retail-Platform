import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-nav">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce platform allows businesses to sell products and services online, integrating tools like 
          payment gateways and shopping carts. It caters to both small and large businesses, offering scalability 
          and convenience for managing online sales and reaching a global audience.</p>
      <p>
      An e-commerce platform is an online solution that allows businesses to sell products and services over the internet. 
      It integrates various tools and services, including payment gateways, shopping carts, and product catalogs, 
      to facilitate seamless transactions. E-commerce platforms can range from simple plug-and-play solutions for small 
      businesses to complex, customizable systems for large enterprises. They provide a scalable and convenient way for 
      businesses to reach a global audience and manage their online sales operations efficiently.
      </p>
      </div>
    </div>
  )
}

export default DescriptionBox
