import React from 'react';
import ProductList from '../components/ProductList';
import AddProductForm from '../components/AddProductForm';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <AddProductForm />
      <ProductList />
    </div>
  );
};

export default Home;