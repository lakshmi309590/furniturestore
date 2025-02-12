import React, { useContext } from "react";
import Header from "../components/header/header";
import Banner from "../components/Banner/banner";
import { myContext } from "../App";
import "./Home.css";
import Footer from "../components/Footer/footer";
import LikedButton from "../components/LikedButton/LikedButton";
import CartButton from "../components/cartContext/cartContext";


function Home() {
  const { sharedValue } = useContext(myContext);
  
  return (
    <div>
      <Header />
      <Banner /> {/* Add the Sliding Banner Here */}
      <div className="productItem">
    {sharedValue.map((item, index) => (
        <div key={index} className="product-card">
        <LikedButton item={item}/>
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-category">{item.category}</p>
                <p className="product-price">${item.price}</p>
                <p className="product-quantity">Stock: {item.qty}</p>
                <CartButton item={item} />
                
            </div>
        </div>
       
    ))}
    
</div>

      <Footer/>
    </div>
  );
}

export default Home;
