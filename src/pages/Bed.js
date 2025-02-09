import React, { useContext } from "react";
import Header from "../components/header/header";
import Footer from "../components/Footer/footer";
import { myContext } from "../App";
import "./Home.css"
import LikedButton from "../components/LikedButton/LikedButton";

function Bed(){
    const {sharedValue}=useContext(myContext)
    const FilterProduct= sharedValue.filter((item)=>item.category==="Bed")
    return(
        <div>
            <Header/>
            <div className="productItem">
            {FilterProduct.map((item,index)=>(
           <div key={index} className="product-card">
          <LikedButton item={item}/>
           <img src={item.image} alt={item.title} width="100" />
           <h3>{item.title}</h3>
           <p>Category: {item.category}</p>
           <p>Price: ${item.price}</p>
           <p>Quantity: {item.qty}</p>
           <button className="add-to-cart-btn">Add to Cart</button>
         </div> 
        ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Bed