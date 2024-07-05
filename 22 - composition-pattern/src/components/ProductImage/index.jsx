import React from 'react';

const ProductImage = ({ src, alt }) => {
  return (
    <div className="card-header">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ProductImage;