import React from 'react';

const ProductTag = ({ tag }) => {
  return (
    tag && <span className="card-tag">{tag}</span>
  );
};

export default ProductTag;