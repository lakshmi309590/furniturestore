import React,{useContext,useState} from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../App";

function AdminAddProduct(){
    const navigate=useNavigate()
    const { sharedValue, setSharedValue } = useContext(myContext);
    const [newProduct,setNewProduct]=useState({
        id:"",
        title:"",
        image:"",
        category:"",
        price:"",
        qty:""
    })
     function handlechange(e){
        setNewProduct({...newProduct,[e.target.name]:e.target.value})
     }

     function handleSubmit(e){
           e.preventDefault();
           if(!newProduct.title,!newProduct.category,!newProduct.qty,!newProduct.price){
            alert("please enter all the fields")
            return
           }

           const newId= sharedValue.length?sharedValue[sharedValue.length-1].id+1:1
          const productToAdd= {...newProduct,id:newId}
          setSharedValue([...sharedValue,productToAdd])
          navigate("/")
        }
    return(
        <div>
          <h2>Add New Product</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="image" placeholder="ImageURL" onChange={handlechange}/>
            <input  type="text" name="title" placeholder="Product Title" onChange={handlechange}/>  
            <input type="text" name="category" placeholder="Category" onChange={handlechange}/>
            <input type="number" name="price" placeholder="Price" onChange={handlechange}/>
            <input type="number" name="qty" placeholder="Quantity" onChange={handlechange}/>   
               <button type="submit">Add Product</button> 
          </form>
        </div>
    )
}

export default AdminAddProduct