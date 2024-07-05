import React from 'react';
import ProductTag from '../ProductTag';
import ProductImage from '../ProductImage';
import ProductInfo from '../ProductInfo';
import ProductButtons from '../ProductButtons';
import './product-card.css';

const ProductCard = ({ tag, imageSrc, title, status, price, inStock }) => {
  return (
    <div className="product-card">
      <ProductTag tag={tag} />
      <ProductImage src={imageSrc} alt={title} />
      <ProductInfo title={title} status={status} price={price} inStock={inStock} />
      <ProductButtons inStock={inStock} />
    </div>
  );
};

export default ProductCard;