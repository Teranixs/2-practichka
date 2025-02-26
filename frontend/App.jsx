import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './features/productSlice';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import './styles/global.css';

function App() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Product Manager</h1>
      <AddProductForm />
      {status === 'loading' ? <p>Loading...</p> : <ProductList products={items} />}
    </div>
  );
}

export default App;