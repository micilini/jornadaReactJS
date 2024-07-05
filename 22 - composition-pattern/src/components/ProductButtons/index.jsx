import React from 'react';

const ProductButtons = ({ inStock }) => {
  return (
    <div className="card-footer">
      <button className="btn btn-secondary">
        <i className="bi bi-eye"></i>
        Visualizar
      </button>
      {inStock && (
        <button className="btn btn-primary">
          <i className="bi bi-bag"></i>
          Comprar
        </button>
      )}
    </div>
  );
};

export default ProductButtons;