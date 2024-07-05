import React from 'react';

const ProductInfo = ({ title, status, price, inStock }) => {
  return (
    <div className="card-body">
      <h4 className="product-title">{title}</h4>
      <p className="product-status">{inStock ? 'Disponível' : 'Fora de Estoque'}</p>
      <h3 className="product-prices">R$ {price.toFixed(2)}</h3>
    </div>
  );
};

export default ProductInfo;