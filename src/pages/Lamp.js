import React, { useContext } from "react";
import Header from "../components/header/header";
import Footer from "../components/Footer/footer";
import { myContext } from "../App";
import "./Home.css"
import LikedButton from "../components/LikedButton/LikedButton";

function Lamp(){
    const {sharedValue}=useContext(myContext)
    const FilterProduct= sharedValue.filter((item)=>item.category==="LampsLighting")
    return(
        <div>
            <Header/>
            <div className="productItem">
                
            {FilterProduct.map((item,index)=>(

           <div key={index} className="product-card">
            <LikedButton item={item}/>
           
           <img className="product-image"  src={item.image} alt={item.title} width="100" />
           <h3 className="product-title">{item.title}</h3>
           <p className="product-category">Category: {item.category}</p>
           <p className="product-price">Price: ${item.price}</p>
           <p className="product-quantity">Quantity: {item.qty}</p>
           <button className="add-to-cart-btn">Add to Cart</button>
         </div> 
        ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Lamp