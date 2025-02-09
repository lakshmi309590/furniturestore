import React, { useContext } from "react";
import Header from "../components/header/header";
import Footer from "../components/Footer/footer";
import { myContext } from "../App";
import "./productscontainer.css";  // Import the CSS file
import LikedButton from "../components/LikedButton/LikedButton";

function Decore() {
    const { sharedValue } = useContext(myContext);
    const FilterProduct = sharedValue.filter((item) => item.category === "Decoration");

    return (
        <div>
            <Header />
            <div className="product-container">
                {FilterProduct.map((item, index) => (
                    <div key={index} className="product-card">
                       <LikedButton item={item}/>
                        <img src={item.image} alt={item.title} className="product-image" />
                        <div className="product-info">
                            <h3 className="product-title">{item.title}</h3>
                            <p className="product-category">{item.category}</p>
                            <p className="product-price">${item.price}</p>
                            <button className="add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Decore;
