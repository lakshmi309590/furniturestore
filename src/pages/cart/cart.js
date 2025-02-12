//when cart quantity is increasing when the quantity stock fibnish it should telll stock is out of stop but it is still increasing quantity
import React, { useContext } from "react";
import { myContext } from "../../App";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import "./cart.css";

function Cart() {
    const { cartItems, setCartItems } = useContext(myContext);
    const {sharedValue}=useContext(myContext)
    // Increase quantity
   
    const increaseQty = (id) => {
        setCartItems(cartItems.map(item => {
            // Find the product in sharedValue to get its max stock quantity
            const productStock = sharedValue.find(prod => prod.id === id)?.qty || 0;
            
            if (item.id === id) {
                if (item.qty >= productStock) {
                    // Show SweetAlert if stock limit is reached
                    Swal.fire({
                        icon: "warning",
                        title: "Out of Stock!",
                        text: "You have reached the maximum available quantity for this product.",
                        confirmButtonText: "OK",
                    });
                    return item; // Return the item unchanged
                }
                return { ...item, qty: item.qty + 1 };
            }
            return item;
        }));
    };


    // Decrease quantity
    const decreaseQty = (id) => {
        setCartItems(cartItems.map(item => 
            item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        ));
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h4>{item.title}</h4>
                                    <p>Price: ₹{item.price}</p>
                                    <div className="cart-qty">
                                        <button onClick={() => decreaseQty(item.id)}>-</button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => increaseQty(item.id)}>+</button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                        <FaTrash /> Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Total: ₹{totalPrice}</h3>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;