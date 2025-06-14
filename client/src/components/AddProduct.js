import { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';
function AddProduct() {
  const [productId, setId] = useState('');
  const [productName, setName] = useState('');
  const [productPrice, setPrice] = useState('');
  const [entryDate, setDate] = useState('');

  const submitProduct = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/products', {
        productId,
        productName,
        productPrice: parseFloat(productPrice),
        entryDate
      });
      alert('✅ Product Added');
      console.log(response.data);
      setId('');
      setName('');
      setPrice('');
      setDate('');
    } catch (err) {
      console.error("❌ Error adding product:", err.response?.data || err.message);
      alert('❌ Failed to add product');
    }
  };

  return (
    <div>
      <h3>Add Product</h3>
      <input placeholder="Product ID" value={productId} onChange={e => setId(e.target.value)} /><br />
      <input placeholder="Product Name" value={productName} onChange={e => setName(e.target.value)} /><br />
      <input placeholder="Product Price" type="number" value={productPrice} onChange={e => setPrice(e.target.value)} /><br />
      <input type="date" value={entryDate} onChange={e => setDate(e.target.value)} /><br />
      <button onClick={submitProduct}>Submit</button>
    </div>
  );
}

export default AddProduct;
