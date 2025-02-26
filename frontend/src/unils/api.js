export const fetchProducts = async () => {
    const response = await fetch('/api/products');
    return response.json();
  };
  
  export const addProduct = async (product) => {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return response.json();
  };
  
  export const updateProduct = async (product) => {
    const response = await fetch(`/api/products/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return response.json();
  };
  
  export const deleteProduct = async (id) => {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
  };