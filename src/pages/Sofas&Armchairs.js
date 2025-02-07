import React, { useContext } from "react";
import { myContext } from "../App";
import Header from "../components/header/header";

function SofasArmchairs(){

    const {sharedValue}= useContext(myContext)
    const filterProduct= sharedValue.filter((item)=>item.category==="Sofas")
   return(

    <div>
        <Header/>
        {filterProduct.map((item,index)=>(
           <div key={index} className="product-card">
           <h3>{item.title}</h3>
           <img src={item.image} alt={item.title} width="100" />
           <p>Category: {item.category}</p>
           <p>Price: ${item.price}</p>
           <p>Quantity: {item.qty}</p>
           
         </div> 
        ))}

    </div>
   )

}

export default SofasArmchairs