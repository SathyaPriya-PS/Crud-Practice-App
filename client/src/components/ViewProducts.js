import { useEffect, useState } from 'react';
import axios from 'axios';

function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/get-products');
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;
    await axios.delete(`http://localhost:5000/api/delete/${id}`);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/edit-product/${editingProduct._id}`, editingProduct);
    setEditingProduct(null);
    fetchProducts();
  };

  const handleChange = (e) => {
    setEditingProduct({ ...editingProduct, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>All Products</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Entry Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr><td colSpan="5">No products found</td></tr>
          ) : (
            products.map(prod => (
              <tr key={prod._id}>
                <td>{prod.productId}</td>
                <td>{prod.productName}</td>
                <td>{prod.productPrice}</td>
                <td>{new Date(prod.entryDate).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleEdit(prod)}>Edit</button>
                  <button onClick={() => handleDelete(prod._id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* EDIT FORM */}
      {editingProduct && (
        <div style={{ marginTop: '20px' }}>
          <h3>Edit Product</h3>
          <form onSubmit={handleEditSubmit}>
            <input
              name="productId"
              value={editingProduct.productId}
              onChange={handleChange}
              placeholder="Product ID"
            /><br />
            <input
              name="productName"
              value={editingProduct.productName}
              onChange={handleChange}
              placeholder="Product Name"
            /><br />
            <input
              name="productPrice"
              value={editingProduct.productPrice}
              onChange={handleChange}
              placeholder="Product Price"
              type="number"
            /><br />
            <input
              name="entryDate"
              value={editingProduct.entryDate?.split('T')[0]}
              onChange={handleChange}
              type="date"
            /><br />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setEditingProduct(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ViewProducts;
