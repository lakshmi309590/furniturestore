import React, { useContext } from "react";
import Header from "../components/header/header";
import Footer from "../components/Footer/footer";
import { myContext } from "../App";
import "./Home.css"

function Wishlist(){
    const {wishlist,setWishlist}=useContext(myContext)
    function handleRemove(itemID){
       setWishlist(wishlist.filter((item)=>item.id!==itemID))
    }
    return(
        <div>
            <Header/>
            <h2>Wishlist</h2>
            {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="productItem">
          {wishlist.map((item) => (
            <div key={item.id}  className="product-card">
              <h3 className="product-title">{item.title}</h3>
              <img className="product-image " alt={item.title} src={item.image} width="100" />
              <p className="product-category">Category: {item.category}</p>
              <p className="product-price">Price: ${item.price}</p>
              <p className="product-quantity">Quantity: {item.qty}</p>

              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
            <Footer/>

        </div>
    )
}

export default Wishlist