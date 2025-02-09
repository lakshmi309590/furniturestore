import React, { useContext } from "react";
import { myContext } from "../App";
import Header from "../components/header/header";
import "./Home.css"

function SofasArmchairs(){

    const {sharedValue}= useContext(myContext)
    const filterProduct= sharedValue.filter((item)=>item.category==="Sofas")
   return(

    <div>
        <Header/>
        <div className="productItem">
        {filterProduct.map((item,index)=>(
           <div key={index} className="product-card">
           <h3 className="product-title">{item.title}</h3>
           <img className="product-image" src={item.image} alt={item.title} width="100" />
           <p className="product-category">Category: {item.category}</p>
           <p className="product-price">Price: ${item.price}</p>
           <p className="product-quantity">Quantity: {item.qty}</p>
           <button className="add-to-cart-btn">Add to Cart</button>
         </div> 
        ))}
        </div>
        

    </div>
   )

}

export default SofasArmchairs