import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myContext } from "../App";
import "./AdminEditProduct.css"; // Import CSS for styling

function AdminEditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { sharedValue, setSharedValue } = useContext(myContext);
  const productToEdit = sharedValue.find((prod) => prod.id === parseInt(id));

  const [updatedProduct, setUpdatedProduct] = useState({
    id: "",
    title: "",
    image: "",
    category: "",
    price: "",
    qty: "",
  });

  useEffect(() => {
    if (productToEdit) {
      setUpdatedProduct(productToEdit);
    } else {
      navigate("/admin/products"); // Redirect if product is not found
    }
  }, [productToEdit, navigate]);

  function handleChange(e) {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const updatedProducts = sharedValue.map((prod) =>
      prod.id === parseInt(id) ? updatedProduct : prod
    );

    setSharedValue(updatedProducts);
    navigate("/admin/products");
  }

  return (
    <div className="edit-product-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} className="edit-product-form">
        <div className="input-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={updatedProduct.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
        </div>
        <div className="input-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={updatedProduct.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
        </div>
        <div className="input-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={updatedProduct.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
        </div>
        <div className="input-group">
          <label>Quantity:</label>
          <input
            type="number"
            name="qty"
            value={updatedProduct.qty}
            onChange={handleChange}
            placeholder="Quantity"
            required
          />
        </div>
        <div className="input-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={updatedProduct.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
        </div>
        <button type="submit" className="save-btn">Save</button>
        <button type="button" className="cancel-btn" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AdminEditProduct;
