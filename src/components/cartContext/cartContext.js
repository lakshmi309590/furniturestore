import React, { useContext } from "react";
import { myContext } from "../../App";
import "./cartContext.css";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

function CartButton({ item }) {
    const {  setCartItems } = useContext(myContext);

    function handleAddToCart() {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            let updatedCart;
            
            if (existingItem) {
                updatedCart = prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, qty: cartItem.qty + 1 }
                        : cartItem
                );
            } else {
                updatedCart = [...prevCart, { ...item, qty: 1 }];
            }

            // Show success alert when item is added
            Swal.fire({
                icon: "success",
                title: "Added to Cart",
                text: `${item.title} has been added to your cart.`,
                showConfirmButton: false,
                timer: 1500, // Auto-close after 1.5 seconds
            });

            return updatedCart;
        });
    }

    return (
        <button className="cart-btn" onClick={handleAddToCart} disabled={item.qty === 0}>
            <FaShoppingCart className="cart-icon" />
            Add to Cart
        </button>
    );
}

export default CartButton;
