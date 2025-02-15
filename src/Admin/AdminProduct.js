import React, { useContext } from "react";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./AdminProduct.css"; // Import CSS for styling

function AdminProduct() {
  const { sharedValue, setSharedValue } = useContext(myContext);
  const navigate = useNavigate();

  function handleEdit(productId) {
    navigate(`/admin/edit-product/${productId}`);
  }

  function handleDelete(productId) {
    const updatedProducts = sharedValue.filter((prod) => prod.id !== productId);
    setSharedValue(updatedProducts);
  }

  function handleAddProduct() {
    navigate("/adminAddProduct");
  }

  return (
    <div className="admin-product-container">
      <h2>Manage Products</h2>
      {/* Header Section */}
      <div className="admin-header">
        
        <button className="add-product-btn" onClick={handleAddProduct}>
          + Add Product
        </button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {sharedValue.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-category">Category: {product.category}</p>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-qty">Stock: {product.qty}</p>
            </div>
            <div className="product-actions">
              <button className="edit-btn" onClick={() => handleEdit(product.id)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(product.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProduct;
