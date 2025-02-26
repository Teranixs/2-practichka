import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../features/productSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductItem;