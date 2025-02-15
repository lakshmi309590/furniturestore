import React, { useContext } from "react";
import { myContext } from "../App";

function AdminDash(){
    const {sharedValue}=useContext(myContext)
    return(
        <div>
           {sharedValue.map((pro)=>(
             <div><h1>{pro.title}</h1></div>
          ) )}
        </div>
    )
}

export default AdminDash