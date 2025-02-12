import React, { useContext } from "react";
import { myContext } from "../../App";
import { FaRegHeart } from "react-icons/fa"; 
import Swal from "sweetalert2";
import "./LikedButton.css";

function LikedButton({ item }) {
    const { wishlist, setWishlist } = useContext(myContext);

    function handleLike() {
        if (wishlist.some((wishlistProd) => wishlistProd.id === item.id)) {
            setWishlist(wishlist.filter((wishlistProd) => wishlistProd.id !== item.id));
            
            // SweetAlert for removing from wishlist
            Swal.fire({
                icon: "info",
                title: "Removed from Wishlist",
                text: `${item.title} has been removed from your wishlist.`,
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            setWishlist([...wishlist, item]);
            
            // SweetAlert for adding to wishlist
            Swal.fire({
                icon: "success",
                title: "Added to Wishlist",
                text: `${item.title} has been added to your wishlist!`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }

    return (
        <button className="wishlist-btn" onClick={handleLike}>
            <FaRegHeart className="wishlist-icon" />
        </button>
    );
}

export default LikedButton;
