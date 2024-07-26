import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId}= useParams();
  console.log("All Products:", all_product);
  console.log("Product ID:", productId);

  const product = all_product.find((e)=> e.id === Number(productId));
  console.log("Product:", product);
  return (
    <div>
      {product? <Breadcrum product ={product}/> : <p>Product not found</p>}
      <ProductDisplay product = {product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
